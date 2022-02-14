import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useQueryClient } from "react-query";
import { useMovies } from "../../context/MoviesContext";
import { useDeleteMovie } from "../../hooks";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  id: number;
  name: string;
}

const DeleteModal = ({ isOpen, onClose, id, name }: Props) => {
  const queryClient = useQueryClient();
  const { movies, setCurrentPage, maxItems } = useMovies();
  const deleteMovie = useDeleteMovie();

  const onSubmit = () => {
    deleteMovie.mutate(id, {
      onSuccess: () => {
        if (movies?.length % maxItems === 1)
          setCurrentPage((currentPage) => currentPage - 1);
      },
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size={"sm"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete movie</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Do you want to delete <b>{name}</b>?
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="gray" onClick={onClose} mr="1rem" w="5rem">
            Close
          </Button>
          <Button
            w="5rem"
            colorScheme="blue"
            onClick={onSubmit}
            isLoading={
              deleteMovie.isLoading ||
              !!queryClient.isFetching({ queryKey: "fetchMovies" })
            }
            _hover={{ bg: "#092c39" }}
          >
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteModal;
