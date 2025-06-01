import { requireAuth } from "@/components/actions/auth";
import { getUserProfile } from "@/libs/api/apiServer";
import PhoneDataTable from "@/components/ui/display/PhoneDataTable";
export default async function ProfilePage() {
  // Check if user is authenticated
  const phoneData = await requireAuth();

  // Get liked GitHub users
  // const res = await getUserProfile(phoneData.withoutPlus);
  // const users = await res.data.user.favorite_github_users;

  return <PhoneDataTable phoneData={phoneData} />;
}
