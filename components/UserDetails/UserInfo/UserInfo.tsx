import { Avatar, Typography, Button } from "@mui/material";

import { StyledUserInfo } from "./UserInfo.styled";
import { UserInfoProps } from "./UserInfo.types";

const UserInfo: React.FC<UserInfoProps> = ({ email, username }) => {
  return (
    <StyledUserInfo>
      <Avatar />
      <Typography variant="h6" component="div" color="initial">
        {username}
      </Typography>
      <Typography variant="subtitle1" component="div" color="initial">
        {email}
      </Typography>
      <Typography variant="h6" component="div">
        About me
      </Typography>
      <Typography variant="body2" color="initial">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cum
        voluptatem saepe nisi a nihil, doloremque unde ratione, reprehenderit
        sunt recusandae dolorem? Iure saepe quaerat nesciunt consectetur tempore
        ullam autem!
      </Typography>
      <Button>Change Password</Button> {/* Implement password changeing */}
    </StyledUserInfo>
  );
};

export default UserInfo;
