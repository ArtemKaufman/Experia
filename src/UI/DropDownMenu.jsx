import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownMenu = styled.ul`
  color: ${(props) => (props.color ? color : '#fff')};
  position: absolute;
  top: 100%;
  z-index: 10;
  left: -150px;
  padding: 5px;
  border-radius: 8px;
  background: #242731;
  box-shadow: 0px 16px 24px 0px rgba(55, 58, 83, 0.16),
    0px 4px 12px 0px rgba(36, 38, 53, 0.1),
    0px 2px 4px 0px rgba(36, 38, 53, 0.08), 0px 8px 48px 0px rgba(0, 0, 0, 0.6),
    0px 2px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 12px 0px rgba(0, 0, 0, 0.4);
  list-style: none;

  margin: 0;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  pointer-events: ${(props) => (props.isOpen ? 'auto' : 'none')};
  transform: translateY(${(props) => (props.isOpen ? '0' : '-10px')});
  transition: opacity 0.3s, transform 0.3s;
  li {
    height: 40px;
    padding: 0px 16px;
  }
`;

const Dropdown = ({
  name = 'Click',
  atribute,
  children,
  color,
  buttonType = 'Dropdown',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer>
      <Button
        name={name}
        onClick={toggleDropdown}
        atribute={atribute}
        isOpen={isOpen}
        color={color}
        type={buttonType}
      />
      <DropdownMenu isOpen={isOpen}>{children}</DropdownMenu>
    </DropdownContainer>
  );
};

export default Dropdown;
