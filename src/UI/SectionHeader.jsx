import { FC } from 'react';
import styled from 'styled-components';
import FlexContainer from './Flex';
import { Typography } from './Typography.styled';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px 24px 32px;
`;

export const SectionHeader = ({ children, name, image, ...rest }) => {
  const icon = image ? (
    <img style={{ width: '24px', height: '24px' }} src={image} />
  ) : (
    ''
  );
  return (
    <StyledContainer {...rest}>
      <FlexContainer align-items="center" gap="12px">
        <Typography fontsize="18px" fontWeight="500">
          {name}
        </Typography>
        {icon}
      </FlexContainer>
      {children}
    </StyledContainer>
  );
};
