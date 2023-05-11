import { useState, useContext } from "react";
import {
  Menu,
  Tooltip,
  IconButton,
  Avatar,
  MenuItem,
  Typography,
} from "@mui/material";
import { AuthContext } from "@/contexts/AuthContext";

const UserDropdown: React.FC = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const { handleLogin } = useContext(AuthContext);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (): void => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    handleLogin(false);
    setAnchorElUser(null);
  };

  return (
    <>
      <Tooltip title="User Settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt="User photo"
            src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
          ></Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-user"
        anchorEl={anchorElUser}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={!!anchorElUser}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography textAlign="center">Account</Typography>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <Typography textAlign="center">Logout </Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserDropdown;
