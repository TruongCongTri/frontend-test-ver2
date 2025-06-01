import { requireAuth } from "@/components/actions/auth";
import { getUserProfile } from "@/libs/api/apiServer";
import CardList from "@/components/ui/display/CardList";
export default async function FavoritePage() {
  // Check if user is authenticated
  const phoneData = await requireAuth();

  try {
    // Get liked GitHub users
    const res = await getUserProfile(phoneData.withoutPlus);
    if (
      !res ||
      !res.data ||
      !res.data.user ||
      !res.data.user.favorite_github_users
    ) {
      return (
        <div className="p-8 text-white">
          <h1 className="text-2xl font-bold">Error</h1>
          <p className="mt-4 text-gray-400">
            Unable to fetch favorite GitHub users. Please try again later.
          </p>
        </div>
      );
    }
    if (res.data.user.favorite_github_users === null) {
      throw new Error("GitHub rate limit hit");
    }

    const users = await res.data.user.favorite_github_users;
    if (!users || users.length === 0) {
      return (
        <div className="p-8 text-white">
          <h1 className="text-2xl font-bold">No Favorites Found</h1>
          <p className="mt-4 text-gray-400">
            You haven&apos;t added any favorite GitHub users yet.
          </p>
        </div>
      );
    }
    if (users[0] === null) throw new Error("GitHub rate limit hit");

    return <CardList users={users} />;
  } catch (error) {
    if (error instanceof Error && error.message.includes("GitHub rate limit")) {
      throw new Error("github rate limit hit");
    }
    throw error; // Let other errors also bubble up to error.js
  }
}
