import { DEFAULT_PAGE, DEFAULT_PER_PAGE, MAX_PER_PAGE } from "@/constant/enum";

export function parseSearchParams(searchParams) {
  const q = searchParams.q || "";

  let page = Number(searchParams.page);
  let per_page = Number(searchParams.per_page);

  // Fallback if NaN or invalid
  page = !Number.isInteger(page) || page < 1 ? DEFAULT_PAGE : page;
  per_page =
    !Number.isInteger(per_page) || per_page < 1
      ? DEFAULT_PER_PAGE
      : Math.min(per_page, MAX_PER_PAGE);

  return {
     q, page, per_page
  };
}
