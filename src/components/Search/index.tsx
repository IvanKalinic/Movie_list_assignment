import { SearchIcon } from "../../assets/svg";
import { Flex } from "@chakra-ui/react";
import {
  SearchBox,
  SearchButton,
  SearchContainer,
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
    <SearchContainer>
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
    </SearchContainer>
  );
};

export default Searchbar;
