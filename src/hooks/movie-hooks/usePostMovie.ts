import { useMutation, useQueryClient } from "react-query";
import { useAxios } from "../../context/AxiosContext";

export const usePostMovie = () => {
  const axios = useAxios();
  const queryClient = useQueryClient();

  const addMovie = async (movie: FormData) => {
    try {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_MOVIES_URL}`,
        data: movie,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return useMutation(addMovie, {
    onError: (error) => console.log(error),
    onSuccess: async () => {
      await queryClient.invalidateQueries("fetchMovies");
    },
  });
};
