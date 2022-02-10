import { useMutation, useQueryClient } from "react-query";
import { useAxios } from "../../context/AxiosContext";

export const useDeleteMovie = () => {
  const axios = useAxios();
  const queryClient = useQueryClient();

  const deleteMovie = async (id: number) => {
    await axios.delete(`${process.env.REACT_APP_MOVIES_URL}/${id}`);
  };

  return useMutation(deleteMovie, {
    onError: (error) => console.log(error),
    onSuccess: () => {
      queryClient.invalidateQueries("fetchMovies");
    },
  });
};
