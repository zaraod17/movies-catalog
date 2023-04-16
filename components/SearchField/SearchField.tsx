import { Search } from "@mui/icons-material";
import {
  SearchWrapper,
  SearchIconWrapper,
  StyledInputBase,
} from "./SearchField.styled";

const SearchField: React.FC = () => {
  return (
    <SearchWrapper>
      <SearchIconWrapper>
        <Search />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search movie"
        inputProps={{ "aria-label": "search" }}
      />
    </SearchWrapper>
  );
};

export default SearchField;
