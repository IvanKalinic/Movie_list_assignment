import { Heading, Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAxios } from "../../context/AxiosContext";
import { useUser } from "../../context/UserContext";
import { decodeToken } from "react-jwt";
import { LinkWrapper, LoginWrapper } from "../styles";
import { Logout } from "../../assets/svg";
import { useMovies } from "../../context/MoviesContext";
import { MovieList } from "../../components";

interface JwtToken {
  id: number;
  iat: number;
  exp: number;
}

const Movies = () => {
  const axios = useAxios();
  const { user, setUser } = useUser();
  const { movies, setMovies } = useMovies();

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/movies?populate=*`
        // {
        //   data: { name: "Wall-E", publicationYear: 2008 },
        //   files: { poster: "sazhdas" },
        // }
      );
      if (response) {
        setMovies(response.data.data);
      }
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (user.jwt) {
      const token = decodeToken(user.jwt) as JwtToken;
      if (token.exp < Date.now() / 1000) {
        setUser(null);
      }
    }
  }, []);

  return (
    <>
      <LinkWrapper>
        <Link to="/logout">
          <Flex alignItems="center" justifyContent="space-between">
            <Text mr="1rem">Logout</Text>
            <Logout />
          </Flex>
        </Link>
      </LinkWrapper>
      <LoginWrapper>
        {!movies ? <Heading>No movies in your list</Heading> : <MovieList />}
      </LoginWrapper>
    </>
  );
};

export default Movies;
