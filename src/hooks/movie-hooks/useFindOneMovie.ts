import { useQuery } from "react-query";
import { useAxios } from "../../context/AxiosContext";

export const useFindOneMovie = (id: string | undefined) => {
  const axios = useAxios();

  const fetchMovie = async (id: string | undefined): Promise<any> => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_MOVIES_URL}/${id}`
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  return useQuery(["fetchMovie", id], async () => await fetchMovie(id), {
    onError: (error) => console.log(error),
    staleTime: Infinity,
  });
};
