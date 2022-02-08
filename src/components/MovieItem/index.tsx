import { Flex, Text } from "@chakra-ui/react";
import { MovieItemContainer, MovieImage, PositionLeft } from "../styles";

interface Props {
  name: string;
  url: string | undefined;
  year: number;
}

const MovieItem = (props: Props) => {
  const { name, url, year } = props;

  return (
    <MovieItemContainer>
      <MovieImage />
      <PositionLeft>
        <Flex
          flexDirection="column"
          justifyContent="space-around"
          alignItems="start"
          height="4rem"
        >
          <Text fontSize="1.1rem" mt="1.8rem" fontWeight="500">
            {name}
          </Text>
          <Text fontSize="0.7rem" mt="0.5rem">
            {year}
          </Text>
        </Flex>
      </PositionLeft>
    </MovieItemContainer>
  );
};

export default MovieItem;
