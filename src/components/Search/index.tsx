import { SearchIcon } from "../../assets/svg";
import { Flex } from "@chakra-ui/react";
import {
  SearchBox,
  SearchButton,
  SearchForm,
  SearchLabel,
  SearchText,
} from "../styles";

interface Props {
  term: string;
  setTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Searchbar = ({ term, setTerm }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      position="fixed"
      margin="auto"
      top="-3.5rem"
    >
      <SearchForm>
        <Flex alignItems="center" justifyContent="center">
          <SearchLabel>Search movies</SearchLabel>
          <SearchBox>
            <SearchText
              type="text"
              value={term}
              placeholder="Search movies"
              onChange={handleChange}
            />
            <SearchButton href="#">
              <SearchIcon />
            </SearchButton>
          </SearchBox>
        </Flex>
      </SearchForm>
    </Flex>
  );
};

export default Searchbar;
