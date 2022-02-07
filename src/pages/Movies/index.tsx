import { Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAxios } from "../../context/AxiosContext";

const Movies = () => {
  const axios = useAxios();

  const fetchMovies = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/movies`,
        {
          data: { name: "Wall-E", publicationYear: 2008 },
          files: { poster: "sazhdas" },
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMovies();
  });

  return (
    <div>
      <Heading>Movies page</Heading>
      <Link to="/logout">Logout</Link>
    </div>
  );
};

export default Movies;
