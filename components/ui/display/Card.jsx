import Link from "next/link";
import LikeButton from "@/components/ui/actions/LikeButton";

export default function Card({ user }) {
  // const isUnavailable = !!user.error;
  const isUnavailable = user.followers == null || user.login == null;
  return (
    <>
      {/* Desktop */}
      <tr className="hidden md:table-row border-b border-gray-700 hover:bg-gray-800">
        <td className="px-4 py-3">
          <img
            src={user.avatar_url}
            alt="avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
        </td>
        <td className="px-4 py-3">{user.login}</td>
        <td className="px-4 py-3">
          <Link
            href={user.html_url || "#"}
            target="_blank"
            className={`underline ${
              isUnavailable ? "text-gray-500" : "text-blue-400"
            }`}
          >
            {isUnavailable ? "Unavailable" : "View"}
          </Link>
        </td>
        <td className="px-4 py-3">
          <Link
            href={user.repos_url || "#"}
            target="_blank"
            className={`underline ${
              isUnavailable ? "text-gray-500" : "text-blue-400"
            }`}
          >
            {isUnavailable ? "Unavailable" : "Repos"}
          </Link>
        </td>
        <td className="px-4 py-3">
          {isUnavailable
            ? "⚠️ Profile data unavailable"
            : `${user.followers ?? 0} followers`}
        </td>
        <td className="px-4 py-3">
          <LikeButton
            githubUserId={user.id}
            initiallyLiked={user.liked}
            disabled={isUnavailable}
          />
        </td>
      </tr>

      {/* Mobile */}
      <tr className="md:hidden border-b border-gray-800">
        <td colSpan={6} className="px-4 py-3">
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <img
                src={user.avatar_url}
                alt="avatar"
                width={36}
                height={36}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold">{user.login}</p>
                <p className="text-xs text-gray-400">
                  {isUnavailable
                    ? "⚠️ Profile data unavailable"
                    : `${user.followers ?? 0} followers`}
                </p>
              </div>
            </div>
            <div className="text-xs text-right space-y-1">
              <div>
                🔗{" "}
                <Link
                  href={user.html_url || "#"}
                  target="_blank"
                  className={`underline ${
                    isUnavailable ? "text-gray-500" : "text-blue-400"
                  }`}
                >
                  {isUnavailable ? "Unavailable" : "Profile"}
                </Link>
              </div>
              <div>
                📦{" "}
                <Link
                  href={user.repos_url || "#"}
                  target="_blank"
                  className={`underline ${
                    isUnavailable ? "text-gray-500" : "text-blue-400"
                  }`}
                >
                  {isUnavailable ? "Unavailable" : "Repos"}
                </Link>
              </div>
              <LikeButton
                githubUserId={user.id}
                initiallyLiked={user.liked}
                disabled={isUnavailable}
              />
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}
