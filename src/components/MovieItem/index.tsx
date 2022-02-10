import { DeleteIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import {
  MovieItemContainer,
  MovieImage,
  PositionLeft,
  IconBottomRight,
} from "../styles";

interface Props {
  name: string;
  url: string | undefined;
  year: number;
}

const MovieItem = (props: Props) => {
  const { name, url, year } = props;

  const handleDelete = () => {
    //delete logic
    //popup open
  };

  return (
    <MovieItemContainer>
      <MovieImage src={url} alt="" />
      <PositionLeft>
        <Flex
          flexDirection="column"
          justifyContent="space-around"
          alignItems="start"
          height="4rem"
          position="relative"
          bottom="0"
          left="10%"
          width="100%"
        >
          <Flex alignItems="center" justifyContent="center" mt="1rem">
            <Text
              fontSize="1.1rem"
              mt="1.8rem"
              fontWeight="500"
              maxWidth="14rem"
              style={{
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {name}
            </Text>
          </Flex>
          <Text fontSize="0.7rem" mt="0.5rem">
            {year}
          </Text>
          <IconBottomRight onClick={handleDelete}>
            <DeleteIcon width="1.5rem" height="1.5rem" />
          </IconBottomRight>
        </Flex>
      </PositionLeft>
    </MovieItemContainer>
  );
};

export default MovieItem;
