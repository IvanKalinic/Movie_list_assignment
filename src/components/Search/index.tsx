import { SearchIcon } from "../../assets/svg";
import { Flex } from "@chakra-ui/react";
import { SearchBox, SearchButton, SearchText } from "../styles";

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
      position="relative"
      margin="auto"
    >
      <form>
        <Flex alignItems="center">
          <label>Search movies</label>
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
      </form>
    </Flex>
  );
};

export default Searchbar;
