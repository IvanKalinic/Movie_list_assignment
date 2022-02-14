import { Button, Flex } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { useMovies } from "../../../context/MoviesContext";
import { useFindOneMovie, usePostMovie, usePutMovie } from "../../../hooks";
import { movieSchema } from "../../../schemas/movieSchema";
import { MovieForm } from "../../../types";
import { TextInput } from "../../Input";

const defaultMovieValues = {
  title: "",
  publishingYear: "",
};

interface Props {
  edit: boolean;
  id: string | undefined;
}

const MovieInput = (props: Props) => {
  const { edit, id } = props;
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(movieSchema),
    defaultValues: defaultMovieValues,
  });

  const { image, setImage } = useMovies();
  const postMovie = usePostMovie();
  const putMovie = usePutMovie();
  const navigate = useNavigate();

  const { data } = useFindOneMovie(id);

  useEffect(() => {
    if (data) {
      reset({
        title: data.data.attributes.name,
        publishingYear: String(data.data.attributes.publicationYear),
      });
    }
  }, [data]);

  const handleAddMovie = async (movieForm: MovieForm) => {
    const movie = {
      name: movieForm.title,
      publicationYear: movieForm.publishingYear,
    };

    console.log(movie);
    const formData = new FormData();
    formData.append("files.poster", image);
    formData.append("data", JSON.stringify(movie));

    if (edit) {
      putMovie.mutate({ id, formData });
    } else {
      postMovie.mutate(formData);
    }
    navigate("/movies");
  };

  const handleCancel = () => {
    setImage("");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleAddMovie)}>
      <Flex flexDirection="column" alignItems="start">
        <TextInput
          title="title"
          registerName="title"
          placeholder="Title"
          register={register}
          errors={errors}
          style={{
            border: "none",
            width: "18.75rem",
            height: "2.8125rem",
          }}
        />
        <TextInput
          title="publishingYear"
          registerName="publishingYear"
          placeholder="Publishing year"
          register={register}
          errors={errors}
          style={{
            border: "none",
            height: "2.8125rem",
            position: "relative",
            display: "flex",
          }}
        />
      </Flex>
      <Flex>
        <Button
          onClick={handleCancel}
          width="100%"
          mt="4"
          variant="outline"
          borderRadius="0.625rem"
          height="3.375rem"
          mr="1rem"
        >
          Cancel
        </Button>
        <Button
          isLoading={
            postMovie.isLoading ||
            putMovie.isLoading ||
            !!queryClient.isFetching({ queryKey: "fetchMovies" })
          }
          type="submit"
          width="100%"
          mt="4"
          backgroundColor="#2BD17E"
          borderRadius="0.625rem"
          height="3.375rem"
        >
          {!edit ? "Submit" : "Update"}
        </Button>
      </Flex>
    </form>
  );
};

export default MovieInput;
