import styled from 'styled-components';
import { Navbar } from './Navbar';
import FlexContainer from '../../UI/Flex';

const SidebarWrapper = styled.aside`
  grid-area: sidebar;
  width: 84px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 14px;
  gap: 50px;
  background-color: ${({ theme }) => theme.colors.greyBg};
`;

export const Sidebar = () => {
  return (
    <SidebarWrapper>
      <img
        src="./images/Logo.svg"
        style={{ height: '40px', width: '40px', cursor: 'pointer' }}
      />

      <FlexContainer>
        <Navbar />
      </FlexContainer>
    </SidebarWrapper>
  );
};
