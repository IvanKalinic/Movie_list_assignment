import { Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { MovieFields } from "../../components";
import { LoginWrapper } from "../styles";

const AddMovie = ({ edit }: { edit: boolean }) => {
  const { id } = useParams();

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
          {edit ? "Edit" : "Create a new movie"}
        </Text>
        <MovieFields edit={edit} id={id} />
      </Flex>
    </LoginWrapper>
  );
};

export default AddMovie;
