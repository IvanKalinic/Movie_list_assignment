import { useCallback, useEffect, useState, useLayoutEffect } from "react";
import { useMovies } from "../../../context/MoviesContext";
import MovieItem from "../MovieItem";
import Search from "../../Search";
import { EmptyList } from "../../index";
import { MovieListWrapper } from "../../styles";

const MovieList = () => {
  const {
    movies,
    firstPageIndex,
    lastPageIndex,
    currentPage,
    maxItems,
    setMaxItems,
  } = useMovies();

  const [term, setTerm] = useState<string>("");
  const [moviesOnPage, setMoviesOnPage] = useState<Array<any>>(
    movies.slice(0, maxItems)
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

  useLayoutEffect(() => {
    const setMaxItemsOnPage = () => {
      if (window.innerWidth <= 80 * 16 && window.innerWidth > 70 * 16) {
        setMaxItems(6);
        return;
      }
      if (window.innerWidth <= 70 * 16 && window.innerWidth > 45 * 16) {
        setMaxItems(4);
        return;
      }
      if (window.innerWidth <= 49 * 16) {
        setMaxItems(2);
        return;
      }
      setMaxItems(8);
    };
    window.addEventListener("resize", setMaxItemsOnPage);

    return () => {
      window.removeEventListener("resize", setMaxItemsOnPage);
    };
  });

  return (
    <>
      {!!!movies.length ? (
        <EmptyList />
      ) : (
        <>
          <Search term={term} setTerm={setTerm} />
          <MovieListWrapper>
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
          </MovieListWrapper>
        </>
      )}
    </>
  );
};

export default MovieList;
