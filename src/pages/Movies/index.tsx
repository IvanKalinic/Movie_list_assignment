import { Heading, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAxios } from "../../context/AxiosContext";
import { useUser } from "../../context/UserContext";
import { decodeToken } from "react-jwt";
import { LinkWrapper, LoginWrapper } from "../styles";
import { Add, Logout } from "../../assets/svg";
import { useMovies } from "../../context/MoviesContext";
import { MovieList } from "../../components";
import Pagination from "../../pagination";
import { MAX_ITEMS_ON_PAGE } from "../../const";
import { useGetMovies } from "../../hooks";
import { useQueryClient } from "react-query";

interface JwtToken {
  id: number;
  iat: number;
  exp: number;
}

const Movies = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { user, setUser, jwt } = useUser();
  const {
    movies,
    setMovies,
    setLastPageIndex,
    setFirstPageIndex,
    setCurrentPage,
    currentPage,
  } = useMovies();

  const [totalPages, setTotalPages] = useState<number>(0);

  const response = useGetMovies();

  useEffect(() => {
    if (response.data) {
      setMovies(response.data.data);
      if (movies) setTotalPages(Math.ceil(movies.length / MAX_ITEMS_ON_PAGE));
    }
  }, [response, movies, jwt, user]);

  useEffect(() => {
    queryClient.invalidateQueries("fetchMovies");
  }, []);

  useEffect(() => {
    if (user.jwt) {
      const token = decodeToken(user.jwt) as JwtToken;
      if (token.exp < Date.now() / 1000) {
        setUser(null);
      }
    }
  }, []);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setLastPageIndex(currentPage * MAX_ITEMS_ON_PAGE);
    setFirstPageIndex(MAX_ITEMS_ON_PAGE * (currentPage - 1));
  }, [currentPage, setCurrentPage]);

  const handleAdd = () => {
    navigate("/add");
  };

  return (
    <Flex justifyContent="center">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        width="50vw"
        mt="1rem"
      >
        <Flex alignItems="center" onClick={handleAdd} cursor="pointer">
          <Text fontWeight="600" fontSize="3rem" mr="1rem">
            My movies
          </Text>
          <Add style={{ marginTop: "0.4rem" }} />
        </Flex>

        <Link to="/logout">
          <Flex alignItems="center" justifyContent="space-between">
            <Text mr="1rem" fontWeight="600">
              Logout
            </Text>
            <Logout />
          </Flex>
        </Link>
      </Flex>
      <LoginWrapper>
        {!movies ? (
          <Heading>No movies in your list</Heading>
        ) : (
          <MovieList currentPage={currentPage} />
        )}
      </LoginWrapper>
      <Pagination totalPages={totalPages} paginate={paginate} />
    </Flex>
  );
};

export default Movies;
