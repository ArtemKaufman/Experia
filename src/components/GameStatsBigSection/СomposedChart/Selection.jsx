import React from 'react';
import FlexContainer from '../../../UI/Flex';
import SquareCheckbox from '../../../UI/Checkbox/SquareCheckbox';
import { Typography } from '../../../UI/Typography.styled';

export const SelectColor = ({ handleCheckboxChange, checkState }) => {
  return (
    <FlexContainer direction="column" gap="10px">
      <FlexContainer gap="16px" alignitems="center">
        <SquareCheckbox
          color="#18A0FB"
          showChart="blue"
          checked={checkState == 'blue'}
          handleCheckboxChange={handleCheckboxChange}
        />
        <Typography fontWeight="500" fontsize="16px" color="#0F81CE">
          Show stattistic for blue color
        </Typography>
      </FlexContainer>

      <FlexContainer gap="16px" alignitems="center">
        <SquareCheckbox
          color="#3CDC86"
          showChart="green"
          checked={checkState == 'green'}
          handleCheckboxChange={handleCheckboxChange}
        />
        <Typography fontWeight="500" fontsize="16px" color="#3CDC86">
          Show stattistic for green color
        </Typography>
      </FlexContainer>
      <FlexContainer gap="16px" alignitems="center">
        <SquareCheckbox
          color="#ED2D95"
          showChart="red"
          checked={checkState == 'red'}
          handleCheckboxChange={handleCheckboxChange}
        />
        <Typography fontWeight="500" fontsize="16px" color="#ED2D95">
          Show stattistic for red color
        </Typography>
      </FlexContainer>
    </FlexContainer>
  );
};
