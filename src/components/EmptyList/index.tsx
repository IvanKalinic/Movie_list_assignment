import { Flex, Text, Button } from "@chakra-ui/react";

const EmptyList = () => {
  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Text fontWeight="600" fontSize="3rem" mb="1rem">
        Your movie list is empty
      </Text>
      <Button backgroundColor="#2BD17E" borderRadius="10px" height="3.375rem">
        Add a new movie
      </Button>
    </Flex>
  );
};

export default EmptyList;
