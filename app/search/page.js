import React, { Suspense } from "react";

import { requireAuth } from "@/components/actions/auth";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

import { searchGithubUsers } from "@/libs/api/apiServer";
import CardList from "@/components/ui/display/CardList";
import Pagination from "@/components/ui/actions/Pagination";

import { parseSearchParams } from "@/utils/parseSearchParams";

import Breadcrumb from "@/components/navigation/Breadcrumb";
import Loading from "@/components/layout/Loading";

export default async function SearchPage({ searchParams }) {
  // check if user is authenticated
  await requireAuth();
  const { q, page, per_page } = parseSearchParams(await searchParams);

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
    console.log("Search results:", data);
    if (data.data.users[0] == null) throw new Error("github rate limit hit");
    return (
      <Suspense fallback={<Loading />}>
        <LayoutWrapper>
          <Breadcrumb />

          {q && (
            <p className="mb-2 text-sm text-gray-400">
              Showing results for: <strong>{q}</strong>
            </p>
          )}
          <div>
            <CardList users={data.data.users} />
            <Pagination meta={data.meta.pagination} />
          </div>
        </LayoutWrapper>
      </Suspense>
    );
  } catch (err) {
    if (err instanceof Error && err.message.includes("GitHub rate limit")) {
      throw new Error("github rate limit hit");
    }
    throw err; // Let other errors also bubble up to error.js
  }
}
