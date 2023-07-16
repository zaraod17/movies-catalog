import { useContext } from "react";

import { SearchContext } from "@/contexts/SearchContext";

import { Search } from "@mui/icons-material";
import {
  SearchWrapper,
  SearchIconWrapper,
  StyledInputBase,
} from "./SearchField.styled";

const SearchField: React.FC = () => {
  const { movieTitle, setSearchedTerm } = useContext(SearchContext);

  return (
    <SearchWrapper>
      <SearchIconWrapper>
        <Search />
      </SearchIconWrapper>
      <StyledInputBase
        onChange={(e) => {
          setSearchedTerm(e.target.value);
        }}
        placeholder="Search movie"
        inputProps={{ "aria-label": "search" }}
      />
    </SearchWrapper>
  );
};

export default SearchField;
