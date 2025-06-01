"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

export default function MiniNavBar() {
  const currentPath = usePathname();
  const activeTab = currentPath.includes("favorite") ? "github" : "phone";
  const router = useRouter();
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-white mb-4">
      <button
        type="button"
        disabled={activeTab === "phone"}
        onClick={() => router.push(`/profile`)}
        className={`px-3 py-2 sm:py-1 rounded sm:rounded-none text-left sm:text-center ${
          activeTab === "phone" ? "bg-red-600" : ""
        }`}
      >
        📱 Phone Info
      </button>
      <button
        type="button"
        disabled={activeTab === "github"}
        onClick={() => router.push(`/favorite`)}
        className={`px-3 py-2 sm:py-1 rounded sm:rounded-none text-left sm:text-center ${
          activeTab === "github" ? "bg-red-600" : ""
        }`}
      >
        🤖 GitHub Profiles
      </button>
    </div>
  );
}
