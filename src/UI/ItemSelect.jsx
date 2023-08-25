import React from 'react';
import styled from 'styled-components';

const SelectionElement = styled.li`
  color: ${(props) => (props.color ? props.color : '#fff')};
  font-size: ${(props) => (props.fontsize ? props.fontsize : '13px')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 230px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.greyHover};
  }
`;

export const ItemSelect = ({ onClick, name, children }) => {
  return (
    <SelectionElement onClick={onClick}>
      <p>{name}</p>
      <div>{children}</div>
    </SelectionElement>
  );
};
