import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePagination } from "@/hooks/usePagination";

type DynamicPaginationProps = {
  totalPage: number;
};

export const DynamicPagination = ({ totalPage }: DynamicPaginationProps) => {
  const {
    currentPageIntoNumber,
    pageLimit,
    handlePrevious,
    handleChangePage,
    handleNext,
    getDisplayButtons,
  } = usePagination(totalPage);

  //   console.log("bgbgb", currentPageIntoNumber);

  return (
    <div className="">
      <Pagination>
        <PaginationContent>
          {currentPageIntoNumber > 1 && (
            <PaginationItem
              onClick={handlePrevious}
              className="cursor-pointer  "
            >
              <PaginationPrevious />
            </PaginationItem>
          )}
          {getDisplayButtons.map((item) => (
            <PaginationItem
              onClick={handleChangePage(item)}
              key={item}
              className={
                item === currentPageIntoNumber
                  ? " rounded-md px-[3px] border border-[#e4e4e7] bg-white"
                  : ""
              }
            >
              <PaginationLink className="cursor-pointer dark:bg-[#27272A]">
                {item}
              </PaginationLink>
            </PaginationItem>
          ))}
          {pageLimit !== currentPageIntoNumber && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}
          {currentPageIntoNumber < pageLimit && (
            <PaginationItem className="cursor-pointer" onClick={handleNext}>
              <PaginationNext />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
};
