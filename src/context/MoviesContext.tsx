import React, { createContext, useContext, useMemo, useState } from "react";

type ContextType = {
  movies: any;
  setMovies: React.Dispatch<React.SetStateAction<any>>;
};

const MoviesContext = createContext<ContextType>({
  movies: [],
  setMovies: () => null,
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

  const value = useMemo(() => ({ movies, setMovies }), [movies, setMovies]);

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
};
