import { Button, Flex, Text } from "@chakra-ui/react";
import { useMovies } from "../context/MoviesContext";
import { PaginationWrapper } from "./styles";

interface Props {
  totalPages: number;
  paginate: (pageNumber: number) => void;
}

const Pagination = ({ totalPages, paginate }: Props) => {
  const { currentPage } = useMovies();

  const pages: ReadonlyArray<number> = Array.from(
    new Array(totalPages),
    (item, index: number) => index + 1
  );

  return (
    <PaginationWrapper>
      <Flex justifyContent="space-around" alignItems="center" width="12vw">
        <Text fontWeight="600">Prev</Text>
        {pages.map((num) => (
          <Button
            key={num}
            onClick={() => paginate(num)}
            bg={currentPage === num ? "#2BD17E" : "#092c39"}
            w="2rem"
            h="2rem"
            css={{
              "&:hover": {
                backgroundColor: "#2BD17E",
              },
            }}
          >
            {num}
          </Button>
        ))}
        <Text fontWeight="600">Next</Text>
      </Flex>
    </PaginationWrapper>
  );
};

export default Pagination;
