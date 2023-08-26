import React, { FC } from 'react';
import FlexContainer from '../../UI/Flex';
import SquareCheckbox from '../../UI/Checkbox/SquareCheckbox';
import { Typography } from '../../UI/Typography.styled';

export const UsersRating = ({ data, handleCheckboxChange, checkState }) => {
  const colors = [
    { color: '#18A0FB' },
    { color: '#ED2D95' },
    { color: '#3CDC86' },
    { color: '#F4A732' },
    { color: '#9B53F8' },
  ];

  const colorNames = {
    '#18A0FB': 'showBlue',
    '#ED2D95': 'showRed',
    '#3CDC86': 'showGreen',
    '#F4A732': 'showYellow',
    '#9B53F8': 'showPurple',
  };

  const dataWithColors = data.map((obj, index) => ({
    ...obj,
    color: colors[index % colors.length].color,
    showChart: colorNames[colors[index % colors.length].color],
    isChecked: checkState[colorNames[colors[index % colors.length].color]],
  }));

  return (
    <FlexContainer direction="column" gap="20px">
      {dataWithColors.map((user, index) => (
        <UserData
          key={index}
          user={user}
          handleCheckboxChange={handleCheckboxChange}
        />
      ))}
    </FlexContainer>
  );
};

const UserData = ({ user, handleCheckboxChange }) => (
  <FlexContainer key={user.name} gap="20px">
    <FlexContainer gap="16px">
      <SquareCheckbox
        color={user.color}
        showChart={user.showChart}
        checked={user.isChecked}
        handleCheckboxChange={handleCheckboxChange}
      />
      <FlexContainer direction="column">
        <Typography fontsize="14px" lineheight="20px">
          Rating 94%
        </Typography>
        <Typography color="rgba(255, 255, 255, 0.6)">116</Typography>
      </FlexContainer>
    </FlexContainer>
    <FlexContainer direction="column">
      <Typography fontsize="14px" lineheight="20px">
        {user.name}
      </Typography>
      <Typography color="rgba(255, 255, 255, 0.6)">{user.date}</Typography>
    </FlexContainer>
  </FlexContainer>
);
