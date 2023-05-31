import { Grid } from "@mui/material";

import MoviesList from "../MoviesList/MoviesList";
import { StyledGridItem } from "./MainPageList.styled";

import { ListTitleType } from "./MainPageList.types";

const listNames: ListTitleType[] = [
  "Popular Movies",
  "Latest Releases",
  "Upcoming Movies",
];

const MainPageLists: React.FC = () => {
  return (
    <Grid container spacing={4} columns={21}>
      {listNames.map((list) => (
        <StyledGridItem key={list} item xs={21} md={10.5} xl={7}>
          <MoviesList listTitle={list} />
        </StyledGridItem>
      ))}
    </Grid>
  );
};

export default MainPageLists;
