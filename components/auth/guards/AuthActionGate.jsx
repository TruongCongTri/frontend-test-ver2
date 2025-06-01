"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AuthActionGate() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    const phone = localStorage.getItem("phone_number");
    setIsAuthenticated(!!phone);
  }, []);

  return (
    <div className="mt-6 flex flex-wrap gap-4">
      {isAuthenticated ? (
        <>
          <Link
            href="/search"
            className="bg-[#00ff88] text-black font-bold px-4 py-2 rounded-sm hover:opacity-90"
          >
            🔍 Search GitHub
          </Link>
          <Link
            href="/Profile"
            className="bg-white text-black font-bold px-4 py-2 rounded-sm hover:opacity-90"
          >
            🗂 Profile
          </Link>
        </>
      ) : (
        <Link
          href="/login"
          className="bg-blue-500 text-white font-bold px-4 py-2 rounded-sm hover:bg-blue-600"
        >
          🔐 Login to continue
        </Link>
      )}
    </div>
  );
}
