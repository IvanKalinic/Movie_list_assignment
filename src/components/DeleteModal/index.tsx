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
import { useDeleteMovie } from "../../hooks";

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  id: number;
  name: string;
}

const DeleteModal = ({ isOpen, onOpen, onClose, id, name }: Props) => {
  const deleteMovie = useDeleteMovie();
  const queryClient = useQueryClient();

  const onSubmit = () => {
    deleteMovie.mutate(id);
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
