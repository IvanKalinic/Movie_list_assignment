import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useMovies } from "../../context/MoviesContext";
import MovieItem from "../MovieItem";

const MovieList = (currentPage: { currentPage: number }) => {
  const { movies, firstPageIndex, lastPageIndex } = useMovies();
  const [moviesOnPage, setMoviesOnPage] = useState<Array<any>>(
    movies.slice(0, 8)
  );

  useEffect(() => {
    setMoviesOnPage(movies.slice(firstPageIndex, lastPageIndex));
  }, [currentPage]);

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      width="50vw"
      height="75vh"
      flexWrap="wrap"
    >
      {moviesOnPage.map(
        ({ attributes, id }: { attributes: any; id: number }) => (
          <MovieItem
            key={id}
            name={attributes.name}
            url={attributes.poster?.data}
            year={attributes.publicationYear}
          />
        )
      )}
    </Flex>
  );
};

export default MovieList;
