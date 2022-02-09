import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { PaginationWrapper } from "./styles";

interface Props {
  totalPages: number;
  paginate: (pageNumber: number) => void;
}

const Pagination = ({ totalPages, paginate }: Props) => {
  const pages: ReadonlyArray<number> = Array.from(
    new Array(totalPages),
    (item, index: number) => index + 1
  );

  return (
    <PaginationWrapper>
      <Flex justifyContent="space-around" width="10vw">
        {pages.map((num) => (
          <Button key={num} onClick={() => paginate(num)}>
            {num}
          </Button>
        ))}
      </Flex>
    </PaginationWrapper>
  );
};

export default Pagination;
