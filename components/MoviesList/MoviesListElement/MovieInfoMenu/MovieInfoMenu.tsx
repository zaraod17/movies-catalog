import { useState } from "react";

import { IconButton, Typography, Popper } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import { MovieInfo } from "../MoviesListElement.styled";
import { InfoButton, StyledPopper } from "./MovieInfoMenu.styled";
import { MovieInfoMenuProps } from "./MovieInfoMenu.types";

const MovieInfoMenu: React.FC<MovieInfoMenuProps> = ({
  categories,
  productionYear,
}) => {
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);
  const open = !!anchorElement;

  const handleHover = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <>
      <InfoButton
        id="info-button"
        aria-controls={open ? "info-menu" : undefined}
        aria-haspopup={true}
        aria-expanded={open ? "true" : undefined}
        onMouseOver={handleHover}
        onMouseLeave={handleClose}
      >
        <InfoOutlinedIcon />
      </InfoButton>
      <StyledPopper id="info-menu" anchorEl={anchorElement} open={open}>
        <Typography component="span" variant="body2">
          {productionYear} {"|"}
        </Typography>
        {categories.map((category) => (
          <Typography component="p" variant="caption" key={category}>
            {category.toUpperCase()}
          </Typography>
        ))}
      </StyledPopper>
    </>
  );
};

export default MovieInfoMenu;
