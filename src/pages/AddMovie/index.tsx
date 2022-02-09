import { Flex, Text } from "@chakra-ui/react";
import { MovieFields } from "../../components";
import { LoginWrapper } from "../styles";

const AddMovie = () => {
  return (
    <LoginWrapper>
      <Flex
        justifyContent="space-around"
        flexDirection="column"
        alignItems="start"
        width="50vw"
        height="75vh"
      >
        <Text fontSize="3rem" fontWeight="600">
          Create a new movie
        </Text>
        <MovieFields />
      </Flex>
    </LoginWrapper>
  );
};

export default AddMovie;
