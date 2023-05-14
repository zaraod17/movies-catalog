import { Avatar, Typography } from "@mui/material";

import { StyledUserInfo } from "./UserInfo.styled";

const UserInfo: React.FC = () => {
  return (
    <StyledUserInfo>
      <Avatar />
      <Typography variant="h6" component="div" color="initial">
        Username
      </Typography>
      <Typography variant="subtitle1" component="div" color="initial">
        email@expample.com
      </Typography>
      <Typography variant="subtitle2" component="div">
        About me
      </Typography>
      <Typography variant="body2" color="initial">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cum
        voluptatem saepe nisi a nihil, doloremque unde ratione, reprehenderit
        sunt recusandae dolorem? Iure saepe quaerat nesciunt consectetur tempore
        ullam autem!
      </Typography>
    </StyledUserInfo>
  );
};

export default UserInfo;
