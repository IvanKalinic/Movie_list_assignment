import { Flex } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { useMovies } from "../../../context/MoviesContext";
import MovieItem from "../MovieItem";
import Search from "../../Search";
import { EmptyList } from "../../index";

const MovieList = () => {
  const { movies, firstPageIndex, lastPageIndex, setCurrentPage, currentPage } =
    useMovies();
  const [term, setTerm] = useState<string>("");
  const [moviesOnPage, setMoviesOnPage] = useState<Array<any>>(
    movies.slice(0, 8)
  );

  const findMovies = useCallback(
    (term) => {
      return movies
        ?.filter((movie: any) =>
          movie.attributes.name.toUpperCase().includes(term.toUpperCase())
        )
        .slice(firstPageIndex, lastPageIndex);
    },
    [term, firstPageIndex, lastPageIndex]
  );

  useEffect(() => {
    setMoviesOnPage(
      term ? findMovies(term) : movies.slice(firstPageIndex, lastPageIndex)
    );
  }, [currentPage, term, movies, firstPageIndex, lastPageIndex, findMovies]);

  console.log(currentPage);

  return (
    <>
      {!!!movies.length ? (
        <EmptyList />
      ) : (
        <>
          <Search term={term} setTerm={setTerm} />
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
                  id={id}
                  name={attributes.name}
                  url={attributes.poster.data?.attributes?.url}
                  year={attributes.publicationYear}
                />
              )
            )}
          </Flex>
        </>
      )}
    </>
  );
};

export default MovieList;
