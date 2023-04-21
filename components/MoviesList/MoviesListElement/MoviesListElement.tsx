import { ListItemButton, ListItemText, Typography } from "@mui/material";

import {
  StyledListItem,
  StyledImg,
  MovieInfo,
} from "./MoviesListElement.styled";
import { MoviesListElementProps } from "./MoviesListElement.types";

const MoviesListElement: React.FC<MoviesListElementProps> = ({
  imgUrl,
  title,
  categories,
  productionYear,
  description,
}) => {
  return (
    <StyledListItem>
      <ListItemButton>
        <StyledImg src={imgUrl} />
        <ListItemText
          primary={title}
          secondary={
            <Typography component="div" variant="body2">
              <MovieInfo>
                {productionYear} {"|"}
                {categories.map((category) => (
                  <Typography component="p" variant="caption" key={category}>
                    {category}
                  </Typography>
                ))}
              </MovieInfo>
              <Typography className="movie-description" component="div" variant="body2">
                {description}
              </Typography>
            </Typography>
          }
        />
      </ListItemButton>
    </StyledListItem>
  );
};

export default MoviesListElement;
