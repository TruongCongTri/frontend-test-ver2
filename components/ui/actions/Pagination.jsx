"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function Pagination({ meta }) {
  if (!meta) return null; // prevent crash

  const { current_page, per_page, total_pages } = meta;
  const searchParams = useSearchParams();
  const router = useRouter();

  // Convert current search params into a mutable object
  const buildQuery = (overrides = {}) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(overrides).forEach(([key, value]) => {
      if (value === null || value === undefined) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    return `?${params.toString()}`;
  };

  const handlePerPageChange = (e) => {
    const newPerPage = e.target.value;
    router.push(buildQuery({ page: 1, per_page: newPerPage }));
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 font-mono w-full">
      <div className="flex items-center gap-2">
        <label htmlFor="perPageSelect" className="text-white">
          Results per page:
        </label>
        <select
          id="perPageSelect"
          value={per_page}
          onChange={handlePerPageChange}
          className="bg-black border border-white text-[#00ff88] px-2 py-1 rounded-sm"
        >
          {[5, 10, 20, 50, 100].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-4">
        {current_page > 1 && (
          <Link
            href={buildQuery({ page: current_page - 1 })}
            className="text-[#00ff88] hover:underline"
          >
            &lt; Prev
          </Link>
        )}

        <span className="text-white">
          Page {current_page} of {total_pages}
        </span>

        {current_page < total_pages && (
          <Link
            href={buildQuery({ page: current_page + 1 })}
            className="text-[#00ff88] hover:underline"
          >
            Next &gt;
          </Link>
        )}
      </div>
    </div>
  );
}
