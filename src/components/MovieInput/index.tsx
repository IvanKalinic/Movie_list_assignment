import { Button, Flex } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { useMovies } from "../../context/MoviesContext";
import { usePostMovie } from "../../hooks";
import { movieSchema } from "../../schemas/movieSchema";
import { MovieForm } from "../../types";
import { TextInput } from "../Input";

const defaultMovieValues = {
  title: "",
  publishingYear: "",
};

const MovieInput = () => {
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

  const handleAddMovie = async (movieForm: MovieForm) => {
    const movie = {
      data: movieForm,
      // files: { poster: `@${image.slice(26)}` },
      files: {
        poster: `${image.slice(27)}`,
      },
    };

    console.log(movie);
    postMovie.mutate(movie);
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
          borderRadius="10px"
          height="3.375rem"
          mr="1rem"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          width="100%"
          mt="4"
          backgroundColor="#2BD17E"
          borderRadius="10px"
          height="3.375rem"
        >
          Submit
        </Button>
      </Flex>
    </form>
  );
};

export default MovieInput;
