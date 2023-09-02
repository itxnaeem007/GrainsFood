import React from "react";
import ReactPaginate from "react-paginate";
import { styled } from "@/theme";
import { Box, Flex, Text } from ".";
import { PaginationIcon } from "../icons";

const ReactPage = styled(ReactPaginate, {
  background: "$productFieldsBgColor",
  border: "1px solid $selectBorder",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  textDecoration: "none",
  listStyleType: "none",
  // padding: "0 $space$16 0 $space$20",
  width: "min-content",
  height: "$space$40",
  borderRadius: "$space$8",
  fontWeight: "$fontWeights$semibold",
  color: "$textLight",

  "& > ul": {
    display: "flex",
    width: "100%",
    // padding: "0 $space$16",
  },
  "& > li": {
    borderLeft: "1px solid $selectBorder",
    // height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "$space$8",
    minHeight: "$space$8",
    cursor: "pointer",
    "&.previous": {},
    a: {
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      div: {
        justifyContent: "center",
      },
    },
  },

  "& > li:first-child": {
    border: "none",
    paddingRight: "$space$4",
    width: "100%",
  },
  "& > li:last-child": {
    border: "none",
    paddingLeft: "$space$4",
    borderLeft: "1px solid  $selectBorder",
    width: "100%",
  },

  ".active-page": {
    backgroundColor: "$primary2",
    borderRadius: "10px",
    color: "$darkBlack",
  },
});

export const Pagination: React.FC<IPaginationProps> = ({
  activePage,
  totalPages,
  handlePageClick,
}) => {
  return (
    <Flex direction={"column"} justify={"center"} align={"center"}>
      <ReactPage
        breakLabel={
          <Flex align={"center"}>
            <Text color={"gray"} css={{ fontWeight: "$semibold" }}>
              ...
            </Text>
          </Flex>
        }
        nextLabel={
          <Box css={{ display: "flex" }}>
            <PaginationIcon style={{ transform: "rotate(180deg)" }} />
          </Box>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={totalPages}
        forcePage={activePage}
        activeClassName={"active-page"}
        activeLinkClassName={"active-link"}
        previousLabel={
          <Box css={{ display: "flex" }}>
            <PaginationIcon />
          </Box>
        }
        renderOnZeroPageCount={undefined}
      />
    </Flex>
  );
};
export interface IPaginationProps {
  activePage: number;
  totalPages: number;
  handlePageClick?: (event: IChangePage) => void;
}
export interface IChangePage {
  selected: number;
}
