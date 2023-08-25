import { Typography } from '../../UI/Typography.styled';
import FlexContainer from '../../UI/Flex';
import { NavItem } from '../Navbar/NavItem';

export const User = ({ username = 'Username' }) => {
  return (
    <FlexContainer gap="12px" alignitems="center">
      <NavItem
        isactive={false}
        src="./icons/user_light.svg"
        size={'small'}
      ></NavItem>
      <Typography>{username}</Typography>
    </FlexContainer>
  );
};
