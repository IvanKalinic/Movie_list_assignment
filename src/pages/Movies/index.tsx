import { Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { decodeToken } from "react-jwt";
import { LoginWrapper, Navbar } from "../styles";
import { Add, Logout } from "../../assets/svg";
import { useMovies } from "../../context/MoviesContext";
import { MovieList } from "../../components";
import Pagination from "../../pagination";
import { useGetMovies } from "../../hooks";
import { useQueryClient } from "react-query";
import { Loader } from "../../components/Loader";

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
    totalPages,
    setTotalPages,
    movies,
    setMovies,
    setLastPageIndex,
    setFirstPageIndex,
    setCurrentPage,
    currentPage,
    maxItems,
  } = useMovies();
  const { data, isLoading } = useGetMovies();

  useEffect(() => {
    if (data) {
      setMovies(data.data);
      if (movies) setTotalPages(Math.ceil(movies.length / maxItems));
    }
  }, [data, movies, jwt, user, maxItems]);

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
    setLastPageIndex(currentPage * maxItems);
    setFirstPageIndex(maxItems * (currentPage - 1));
  }, [currentPage, setCurrentPage, maxItems]);

  const handleAdd = () => {
    navigate("/add");
  };

  return (
    <Flex justifyContent="center">
      <Navbar>
        <Flex alignItems="center" onClick={handleAdd} cursor="pointer">
          <Text fontWeight="600" fontSize="3rem" mr="1rem">
            My movies
          </Text>
          <Add style={{ marginTop: "0.4rem" }} />
        </Flex>

        <Link to="/logout">
          <Flex alignItems="center" justifyContent="space-between">
            <Text
              mr="1rem"
              fontWeight="600"
              css={{ "&:hover": { color: "#3b4c66" } }}
            >
              Logout
            </Text>
            <Logout />
          </Flex>
        </Link>
      </Navbar>
      <LoginWrapper>{isLoading ? <Loader /> : <MovieList />}</LoginWrapper>
      <Pagination totalPages={totalPages} paginate={paginate} />
    </Flex>
  );
};

export default Movies;
