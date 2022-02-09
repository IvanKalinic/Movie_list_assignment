import { Flex } from "@chakra-ui/react";
import ImageUploader from "../ImageUploader";
import MovieInput from "../MovieInput";

const MovieFields = () => {
  return (
    <Flex alignItems="start">
      <ImageUploader />
      <MovieInput />
    </Flex>
  );
};

export default MovieFields;
