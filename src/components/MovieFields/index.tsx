import { Flex } from "@chakra-ui/react";
import ImageUploader from "../ImageUploader";
import MovieInput from "../MovieInput";

interface Props {
  edit: boolean;
  id: string | undefined;
}
const MovieFields = (props: Props) => {
  const { edit, id } = props;
  return (
    <Flex alignItems="start">
      <ImageUploader />
      <MovieInput edit={edit} id={id} />
    </Flex>
  );
};

export default MovieFields;
