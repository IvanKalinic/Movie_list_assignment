import { Oval } from "react-loader-spinner";
import { LoaderContainer } from "../styles";

export const Loader = () => {
  return (
    <LoaderContainer>
      <Oval color="#404774" height={100} width={100} />
    </LoaderContainer>
  );
};
