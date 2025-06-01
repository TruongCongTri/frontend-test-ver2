import React from "react";
import Card from "./Card";
import { getUserProfile } from "@/libs/api/apiServer";
import { requireAuth } from "@/components/actions/auth";
import CardSkeleton from "@/components/skeletons/CardSkeleton";

export default async function CardList({ users }) {
  // Check if user is authenticated
  const phoneData = await requireAuth();
  // Get liked GitHub users
  if (!users || users.length === 0) {
    return <p className="text-white">No results found.</p>;
  }

  return (
    <>
      {users.length > 0 ? (
        <div className="rounded-md border border-gray-700 overflow-hidden">
          <table className="w-full table-fixed text-sm text-[#00ff88]">
            <thead className="hidden md:table-header-group sticky top-0 z-10 bg-black text-white pr-4">
              <tr>
                <th className="px-4 py-3 text-left border-b border-gray-700">
                  Avatar
                </th>
                <th className="px-4 py-3 text-left border-b border-gray-700">
                  Login
                </th>
                <th className="px-4 py-3 text-left border-b border-gray-700">
                  Profile
                </th>
                <th className="px-4 py-3 text-left border-b border-gray-700">
                  Repos
                </th>
                <th className="px-4 py-3 text-left border-b border-gray-700">
                  Followers
                </th>
                <th className="px-4 py-3 text-left border-b border-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red"
                    viewBox="0 0 24 24"
                    stroke="red"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.172 5.172a4 4 0 015.656 0L12 8.343l3.172-3.171a4 4 0 015.656 5.656L12 21 3.172 10.828a4 4 0 010-5.656z"
                    />
                  </svg>
                </th>
              </tr>
            </thead>
          </table>
          <div className="overflow-y-auto max-h-[calc(100vh-300px)] scrollbar-thin scrollbar-track-black scrollbar-thumb-gray-700 md:block">
            <table className="w-full table-fixed text-sm text-[#00ff88]">
              <tbody>
                {users.map((user) => (
                  <Card key={user.id} user={user} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <CardSkeleton />
      )}
    </>
  );
}
