import { Flex, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const EmptyList = () => {
  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Text fontWeight="600" fontSize="3rem" mb="1rem">
        Your movie list is empty
      </Text>
      <Button backgroundColor="#2BD17E" borderRadius="10px" height="3.375rem">
        <Link to="/add">Add a new movie</Link>
      </Button>
    </Flex>
  );
};

export default EmptyList;
