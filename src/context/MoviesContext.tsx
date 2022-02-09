import React, { createContext, useContext, useMemo, useState } from "react";

type ContextType = {
  movies: any;
  setMovies: React.Dispatch<React.SetStateAction<any>>;
  firstPageIndex: number;
  setFirstPageIndex: React.Dispatch<React.SetStateAction<number>>;
  lastPageIndex: number;
  setLastPageIndex: React.Dispatch<React.SetStateAction<number>>;
};

const MoviesContext = createContext<ContextType>({
  movies: [],
  setMovies: () => null,
  firstPageIndex: 0,
  setFirstPageIndex: () => null,
  lastPageIndex: 0,
  setLastPageIndex: () => null,
});

export const useMovies = () => {
  const moviesContext = useContext(MoviesContext);

  if (moviesContext === undefined) {
    throw new Error("useMovies must be inside of its provider");
  }
  return moviesContext;
};

interface Props {
  children: React.ReactChild;
}

export const MoviesProvider = ({ children }: Props) => {
  const [movies, setMovies] = useState<Array<any>>([]);
  const [firstPageIndex, setFirstPageIndex] = useState<number>(0);
  const [lastPageIndex, setLastPageIndex] = useState<number>(8);

  const value = useMemo(
    () => ({
      movies,
      setMovies,
      firstPageIndex,
      setFirstPageIndex,
      lastPageIndex,
      setLastPageIndex,
    }),
    [
      movies,
      setMovies,
      firstPageIndex,
      setFirstPageIndex,
      lastPageIndex,
      setLastPageIndex,
    ]
  );

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
};
