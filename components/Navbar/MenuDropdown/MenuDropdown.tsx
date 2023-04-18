import { useState } from "react";
import Link from "next/link";

import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { StyledMenu } from "../NavBar.styled";

const pages: { title: string; page: string }[] = [
  { title: "MoviesCatalog", page: "/" },
  { title: "MyList", page: "/watchlist" },
  { title: "Favorites", page: "/favorites" },
];

const MenuDropdown: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget);
  };

  const closeNavMenu = (): void => {
    setAnchorElNav(null);
  };

  return (
    <StyledMenu>
      <IconButton
        size="large"
        color="inherit"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={!!anchorElNav}
        onClose={closeNavMenu}
      >
        {pages.map((page) => (
          <MenuItem key={page.title} onClick={closeNavMenu}>
            <Link href={page.page}>
              <Typography textAlign="center">{page.title}</Typography>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </StyledMenu>
  );
};

export default MenuDropdown;
