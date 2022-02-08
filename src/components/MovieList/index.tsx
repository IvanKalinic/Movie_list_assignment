import { Flex } from "@chakra-ui/react";
import { useMovies } from "../../context/MoviesContext";
import MovieItem from "../MovieItem";

const MovieList = () => {
  const { movies, setMovies } = useMovies();
  console.log(movies);
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      width="50vw"
      height="75vh"
      flexWrap="wrap"
    >
      {movies.map(({ attributes, id }: { attributes: any; id: number }) => (
        <MovieItem
          key={id}
          name={attributes.name}
          url={attributes.poster?.data}
          year={attributes.publicationYear}
        />
      ))}
    </Flex>
  );
};

export default MovieList;
