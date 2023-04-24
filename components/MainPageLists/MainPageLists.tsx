import { Grid } from "@mui/material";

import MoviesList from "../MoviesList/MoviesList";

const listNames: string[] = [
  "Popular Movies",
  "Latest Releases",
  "Upcoming Movies",
];

const MainPageLists: React.FC = () => {
  return (
    <Grid container spacing={4} columns={21}>
      {listNames.map((list) => (
        <Grid key={list} sx={{display: 'flex', justifyContent: 'center'}}  item xs={21} md={10.5} xl={7}>
          <MoviesList listTitle={list} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MainPageLists;
