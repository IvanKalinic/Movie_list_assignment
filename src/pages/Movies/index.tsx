import { Heading, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAxios } from "../../context/AxiosContext";
import { useUser } from "../../context/UserContext";
import { decodeToken } from "react-jwt";
import { LinkWrapper, LoginWrapper } from "../styles";
import { Logout } from "../../assets/svg";
import { useMovies } from "../../context/MoviesContext";
import { MovieList } from "../../components";
import Pagination from "../../pagination";
import { MAX_ITEMS_ON_PAGE } from "../../const";

interface JwtToken {
  id: number;
  iat: number;
  exp: number;
}

const Movies = () => {
  const axios = useAxios();
  const { user, setUser } = useUser();
  const { movies, setMovies, setLastPageIndex, setFirstPageIndex } =
    useMovies();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/movies?populate=*`
      );
      if (response) {
        setMovies(response.data.data);
        setTotalPages(Math.ceil(response.data.data.length / MAX_ITEMS_ON_PAGE));
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

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setLastPageIndex(currentPage * MAX_ITEMS_ON_PAGE);
    setFirstPageIndex(MAX_ITEMS_ON_PAGE * (currentPage - 1));
  }, [currentPage, setCurrentPage]);

  return (
    <Flex justifyContent="center">
      <LinkWrapper>
        <Link to="/logout">
          <Flex alignItems="center" justifyContent="space-between">
            <Text mr="1rem" fontWeight="600">
              Logout
            </Text>
            <Logout />
          </Flex>
        </Link>
      </LinkWrapper>
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
