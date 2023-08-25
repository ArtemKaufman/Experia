import styled from 'styled-components';
import { User } from './User';
import { Typography } from '../../UI/Typography.styled';

const HeaderWrapper = styled.header`
  grid-area: header;

  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 48px 0px 36px;

  background-color: ${({ theme }) => theme.colors.black};
  font-weigth: 500;
  color: #fff;
`;

export const Header = ({ pageName = 'DASHBOARD' }) => {
  return (
    <HeaderWrapper>
      <Typography fontsize="20px" fontWeight="500">
        {pageName}
      </Typography>
      <User />
    </HeaderWrapper>
  );
};
