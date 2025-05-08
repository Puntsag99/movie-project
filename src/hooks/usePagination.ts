"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

export const usePagination = (totalPage: number) => {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const maxButton = 3;
  const pageLimit = Math.min(totalPage, 10);
  const currentPage = searchParams.get("page") || 1;
  const currentPageIntoNumber = Number(currentPage);

  const handleChangePage = (pagerNumber: number) => () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pagerNumber.toString());
    push(`${pathname}?${params.toString()}`);
  };

  const handlePrevious = () => {
    if (currentPageIntoNumber > 1) {
      handleChangePage(currentPageIntoNumber - 1)();
    }
  };

  const handleNext = () => {
    if (currentPageIntoNumber < pageLimit) {
      handleChangePage(currentPageIntoNumber + 1)();
    }
  };

  let start = Math.max(currentPageIntoNumber - Math.floor(maxButton / 2), 1);
  let end = start + maxButton - 1;

  if (end > pageLimit) {
    end = pageLimit;
    start = end - maxButton + 1;
  }

  const getDisplayButtons = Array.from(
    { length: end - start + 1 },
    (_, index) => start + index
  );

  return {
    pageLimit,
    handleNext,
    handlePrevious,
    handleChangePage,
    getDisplayButtons,
    currentPageIntoNumber,
  };
};
