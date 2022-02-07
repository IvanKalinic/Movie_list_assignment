import { Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  return (
    <div>
      <Heading>Movies page</Heading>
      <Link to="/logout">Logout</Link>
    </div>
  );
};

export default Movies;
