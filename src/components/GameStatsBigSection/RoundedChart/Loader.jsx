import React from 'react';
import { Typography } from '../../../UI/Typography.styled';
import FlexContainer from '../../../UI/Flex';

export const Loader = () => {
  return (
    <FlexContainer
      justifyContent="center"
      alignitems="center"
      margin="172px 0 0 0"
    >
      <Typography color="rgba(255, 255, 255, 0.60)" fontsize="24px">
        Loading...
      </Typography>
    </FlexContainer>
  );
};
