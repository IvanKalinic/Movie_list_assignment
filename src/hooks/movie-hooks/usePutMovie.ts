import { useMutation, useQueryClient } from "react-query";
import { useAxios } from "../../context/AxiosContext";

export const usePutMovie = () => {
  const axios = useAxios();
  const queryClient = useQueryClient();

  const editMovie = async ({
    id,
    formData,
  }: {
    id: string | undefined;
    formData: FormData;
  }) => {
    try {
      await axios({
        method: "put",
        url: `${process.env.REACT_APP_MOVIES_URL}/${id}`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return useMutation(editMovie, {
    onError: (error) => console.log(error),
    onSuccess: async () => {
      await queryClient.invalidateQueries("fetchMovies");
    },
  });
};
