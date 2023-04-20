import { ListItemButton, ListItemText, Typography } from "@mui/material";

import { StyledListItem, StyledImg } from "./MoviesListElement.styled";
import { MoviesListElementProps } from "./MoviesListElement.types";

const MoviesListElement: React.FC<MoviesListElementProps> = ({
  imgUrl,
  title,
}) => {
  return (
    <StyledListItem>
      <ListItemButton>
        <StyledImg src={imgUrl} />
        <ListItemText
          primary={title}
          secondary={
            <Typography component="span" variant="body2">
              Production year and categories
            </Typography>
          }
        ></ListItemText>
      </ListItemButton>
    </StyledListItem>
  );
};

export default MoviesListElement;
