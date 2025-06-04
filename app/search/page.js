import React from "react";

import { requireAuth } from "@/components/actions/auth";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

import { searchGithubUsers } from "@/libs/api/apiServer";
import CardList from "@/components/ui/display/CardList";
import Pagination from "@/components/ui/actions/Pagination";

import { parseSearchParams } from "@/utils/parseSearchParams";

import Breadcrumb from "@/components/navigation/Breadcrumb";

export default async function SearchPage({ searchParams }) {
  // Ensure authentication
  await requireAuth();

  const { q, page, per_page } = parseSearchParams(await searchParams);

  // Handle empty query
  if (!q) {
    return (
      <LayoutWrapper>
        <Breadcrumb />
        <p className="mb-2 text-sm text-gray-400">
          Please enter a search term.
        </p>
      </LayoutWrapper>
    );
  }

  try {
    const data = await searchGithubUsers({ q, page, per_page });

    return (
      <LayoutWrapper>
        <Breadcrumb />
        <p className="mb-2 text-sm text-gray-400">
          Showing results for: <strong>{q}</strong>
        </p>

        <CardList users={data.data.users} />
        <Pagination meta={data.meta.pagination} />
      </LayoutWrapper>
    );
  } catch (error) {
    // Catch GitHub rate limit errors
    if (error.code === 403 || error.message.includes("rate limit")) {
      throw new Error("GitHub rate limit hit");
    }

    // Let other errors bubble up to /error.js
    throw error;
  }
}
