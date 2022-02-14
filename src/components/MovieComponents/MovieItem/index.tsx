import { DeleteIcon } from "@chakra-ui/icons";
import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../../DeleteModal";
import DefaultImg from "../../../assets/img/movie.png";

import { MovieItemContainer, MovieImage, IconBottomRight } from "../../styles";

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
        <MovieImage src={url || DefaultImg} alt="" />
        <Flex
          justifyContent="space-around"
          width="100%"
          position="relative"
          left="1rem"
          top="0.5rem"
          height="4rem"
          mb="0.8rem"
        >
          <Flex
            alignItems="flex-start"
            justifyContent="space-around"
            flexDirection="column"
            width="100%"
            height="100%"
          >
            <Text
              fontSize="1.1rem"
              fontWeight="500"
              style={{
                textOverflow: "ellipsis",
                overflowY: "hidden",
              }}
            >
              {name}
            </Text>
            <Text fontSize="0.7rem" mt="0.5rem">
              {year}
            </Text>
          </Flex>
          <IconBottomRight onClick={handleDelete}>
            <DeleteIcon
              width="1.5rem"
              height="1.5rem"
              css={{ "&:hover": { color: "#8c3103" } }}
            />
          </IconBottomRight>
        </Flex>
      </MovieItemContainer>
      <DeleteModal isOpen={isOpen} onClose={onClose} id={id} name={name} />
    </>
  );
};

export default MovieItem;
