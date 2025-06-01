"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import LikeButton from "@/components/ui/actions/LikeButton";
import { getUserProfile } from "@/libs/api/apiClient";
import CardSkeleton from "@/components/skeletons/CardSkeleton";


export default function Card({ user }) {
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const phone = localStorage.getItem("phone_number");
    if (!phone) return;

    getUserProfile(phone)
      .then((res) => {
        setLoading(true);
        const likedUsers = res?.data?.user?.favorite_github_users || [];
        const likedIds = likedUsers.map((u) => u.id);
        setLiked(likedIds.includes(user.id));
      })
      .catch(() => {
        console.warn("Failed to fetch liked users.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user.id]);

  return (
    <>
      {loading ? (
        <CardSkeleton />
      ) : (
        <>
          {/* Desktop Row */}
          <tr className="hidden md:table-row border-b border-gray-700 hover:bg-gray-800">
            <td className="px-4 py-3 truncate max-w-[120px]">
              <img
                src={user.avatar_url}
                alt="avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
            </td>
            <td className="px-4 py-3 truncate max-w-[120px]">{user.login}</td>
            <td className="px-4 py-3 max-w-[120px]">
              <Link
                href={user.html_url}
                rel="noopener noreferrer"
                target="_blank"
                className="text-blue-400 underline"
              >
                View
              </Link>
            </td>
            <td className="px-4 py-3 max-w-[120px]">
              <Link
                href={user.repos_url}
                rel="noopener noreferrer"
                target="_blank"
                className="text-blue-400 underline"
              >
                Repos
              </Link>
            </td>
            <td className="px-4 py-3 max-w-[120px]">{user.followers}</td>
            <td className="px-4 py-3 max-w-[120px] ">
              <div className="pl-2">
                <LikeButton githubUserId={user.id} initiallyLiked={liked} />
              </div>
            </td>
          </tr>
        </>
      )}

      {loading ? (
        <CardSkeleton />
      ) : (
        <>
          {/* Mobile/Tablet Card */}
          <tr className="md:hidden border-b border-gray-800">
            <td colSpan={6} className="px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={user.avatar_url}
                    alt="avatar"
                    className="rounded-full"
                    width={36}
                    height={36}
                  />
                  <div className="space-y-1">
                    <p className="font-semibold text-sm">{user.login}</p>
                    <p className="text-xs ">
                      {user.followers}{" "}
                      <span className="text-gray-400">followers</span>
                    </p>
                  </div>
                </div>
                <div className="text-sm text-gray-300 space-y-1">
                  <div>
                    🔗 Profile:{" "}
                    <Link
                      href={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 underline"
                    >
                      View
                    </Link>
                  </div>
                  <div>
                    📦 Repos:{" "}
                    <Link
                      href={user.repos_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 underline"
                    >
                      Repos
                    </Link>
                  </div>
                </div>
                <div>
                  <LikeButton githubUserId={user.id} initiallyLiked={liked} />
                </div>
              </div>
            </td>
          </tr>
        </>
      )}
    </>
  );
}
