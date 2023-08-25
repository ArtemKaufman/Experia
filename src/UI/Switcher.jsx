import React, { useState } from 'react';
import styled from 'styled-components';

const SwitchWrapper = styled.label`
  display: block;
  position: relative;
  width: 28px;
  height: 22px;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.purple : '#61677a'};
  border-radius: 15px;
  cursor: pointer;
`;

const Slider = styled.span`
  position: absolute;
  top: 3.5px;
  left: 1.5px;
  right: 28px;
  bottom: 0;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.purple : '#61677a'};
  border-radius: 50%;
  transition: 0.4s;

  &:before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;

    background-color: ${({ theme }) => theme.colors.greyBg};
    border-radius: 50%;
    transition: 0.4s;
    transform: ${({ isActive }) =>
      isActive ? 'translateX(10px)' : 'translateX(0)'};
  }
`;

const Switch = ({ isActive = false, onChange }) => {
  return (
    <SwitchWrapper isActive={isActive}>
      <Slider isActive={isActive} />
    </SwitchWrapper>
  );
};

export default Switch;
