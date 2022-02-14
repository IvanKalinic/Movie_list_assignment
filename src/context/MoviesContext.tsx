import React, { createContext, useContext, useMemo, useState } from "react";
import { MAX_ITEMS_ON_PAGE } from "../const";

type ContextType = {
  movies: any;
  setMovies: React.Dispatch<React.SetStateAction<any>>;
  firstPageIndex: number;
  setFirstPageIndex: React.Dispatch<React.SetStateAction<number>>;
  lastPageIndex: number;
  setLastPageIndex: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  image: any;
  setImage: React.Dispatch<React.SetStateAction<any>>;
  maxItems: number;
  setMaxItems: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
};

const MoviesContext = createContext<ContextType>({
  movies: [],
  setMovies: () => null,
  firstPageIndex: 0,
  setFirstPageIndex: () => null,
  lastPageIndex: 0,
  setLastPageIndex: () => null,
  currentPage: 1,
  setCurrentPage: () => null,
  image: null,
  setImage: () => null,
  maxItems: 0,
  setMaxItems: () => null,
  totalPages: 0,
  setTotalPages: () => null,
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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [image, setImage] = useState<any>(null);
  const [maxItems, setMaxItems] = useState<number>(MAX_ITEMS_ON_PAGE);
  const [totalPages, setTotalPages] = useState<number>(0);

  const value = useMemo(
    () => ({
      movies,
      setMovies,
      firstPageIndex,
      setFirstPageIndex,
      lastPageIndex,
      setLastPageIndex,
      currentPage,
      setCurrentPage,
      image,
      setImage,
      maxItems,
      setMaxItems,
      totalPages,
      setTotalPages,
    }),
    [
      movies,
      setMovies,
      firstPageIndex,
      setFirstPageIndex,
      lastPageIndex,
      setLastPageIndex,
      currentPage,
      setCurrentPage,
      image,
      setImage,
      maxItems,
      setMaxItems,
      totalPages,
      setTotalPages,
    ]
  );

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
};
