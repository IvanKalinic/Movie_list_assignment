import { DeleteIcon } from "@chakra-ui/icons";
import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../../DeleteModal";

import {
  MovieItemContainer,
  MovieImage,
  PositionLeft,
  IconBottomRight,
} from "../../styles";

interface Props {
  name: string;
  url: string | undefined;
  year: number;
  id: number;
}

const MovieItem = (props: Props) => {
  const { name, url, year, id } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  const handleDelete = (e: any) => {
    e.stopPropagation();
    onOpen();
  };

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <>
      <MovieItemContainer onClick={handleEdit}>
        <MovieImage src={url} alt="" />
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
              position="relative"
              fontSize="1.1rem"
              top="0.2rem"
              left="-0.1rem"
              fontWeight="500"
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
      </MovieItemContainer>
      <DeleteModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        id={id}
        name={name}
      />
    </>
  );
};

export default MovieItem;
