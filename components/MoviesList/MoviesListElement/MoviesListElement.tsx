import { ListItemButton, ListItemText, Typography, Box } from "@mui/material";

import {
  StyledListItem,
  StyledImg,
  MovieInfo,
  ImageWrapper,
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
        <ImageWrapper>
          <StyledImg src={imgUrl} />
        </ImageWrapper>
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
              <Typography
                className="movie-description"
                component="div"
                variant="body2"
              >
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
