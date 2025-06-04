import { requireAuth } from "@/components/actions/auth";
import { getUserProfile } from "@/libs/api/apiServer";
import CardList from "@/components/ui/display/CardList";

export default async function FavoritePage() {
  // Ensure user is authenticated
  const phoneData = await requireAuth();

  try {
    const res = await getUserProfile(phoneData.withoutPlus);

    const users = res?.data?.user?.favorite_github_users;

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

    // Optional: check if all failed due to rate limit (e.g., every user has statusCode 403)
    const allRateLimited = users.every((u) => u?.statusCode === 403);
    if (allRateLimited) {
      throw new Error("GitHub rate limit hit");
    }

    return <CardList users={users} />;
  } catch (error) {
    if (error.code === 403 || error.message?.includes("GitHub rate limit")) {
      throw new Error("github rate limit hit");
    }

    return (
      <div className="p-8 text-white">
        <h1 className="text-2xl font-bold">Error</h1>
        <p className="mt-4 text-gray-400">
          Failed to load your favorite GitHub users. Please try again later.
        </p>
      </div>
    );
  }
}
