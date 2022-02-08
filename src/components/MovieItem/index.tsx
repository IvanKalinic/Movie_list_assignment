import { Flex, Heading, Text } from "@chakra-ui/react";
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
          <Heading
            style={{
              fontSize: "1rem",
              marginTop: "1.8rem",
            }}
          >
            {name}
          </Heading>
          <Text style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>
            {year}
          </Text>
        </Flex>
      </PositionLeft>
    </MovieItemContainer>
  );
};

export default MovieItem;
