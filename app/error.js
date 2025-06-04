"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error("🔥 Error captured by error.js:", error);
  }, [error]);

  const code = error.code || 500;
  const isRateLimit = error.message?.toLowerCase().includes("rate limit") || code === 403;
  const isUnprocessable = code === 422;
  const isGeneric = code >= 500;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4 text-center">
      <h1 className="text-3xl font-bold mb-4">
        {isRateLimit
          ? "⚠️ GitHub API Rate Limit Hit"
          : isUnprocessable
          ? "⚠️ Invalid Search Query"
          : "Something Went Wrong"}
      </h1>

      <p className="text-gray-400 mb-6 max-w-lg">
        {error.message || "An unexpected error occurred."}
      </p>

      {error.details && (
        <p className="text-sm text-gray-600 italic mb-6">
          Detail: {typeof error.details === "string" ? error.details : JSON.stringify(error.details)}
        </p>
      )}

      <div className="flex gap-4">
        <button
          onClick={reset}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded text-white"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
