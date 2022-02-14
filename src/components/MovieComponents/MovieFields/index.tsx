import { Flex } from "@chakra-ui/react";
import ImageUploader from "../../ImageUploader";
import { AddEditWrapper } from "../../styles";
import MovieInput from "../MovieInput";

interface Props {
  edit: boolean;
  id: string | undefined;
}

const MovieFields = (props: Props) => {
  const { edit, id } = props;
  return (
    <AddEditWrapper>
      <ImageUploader />
      <MovieInput edit={edit} id={id} />
    </AddEditWrapper>
  );
};

export default MovieFields;
