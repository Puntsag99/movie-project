"use client";

import { useSearchParams } from "next/navigation";

export const useURLSearchParams = () => {
  const searchParams = useSearchParams();

  const selectedGenresIds =
    searchParams.get("genreIds")?.split(",").filter(Boolean) ?? [];

  const generateQueryParams = (generId: string) => {
    const queryParams = new URLSearchParams();
    const updateQueryParams = selectedGenresIds.includes(generId)
      ? selectedGenresIds.filter((id) => id !== generId)
      : [...selectedGenresIds, generId];

    if (updateQueryParams.length !== 0) {
      queryParams.set("genreIds", updateQueryParams.join(","));
    }

    const newParams = queryParams.toString();

    return `?${newParams}`;
  };

  return { selectedGenresIds, generateQueryParams };
};
