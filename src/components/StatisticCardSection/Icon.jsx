import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  background-color: ${(props) => props.color};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Icon = ({ color, children }) => {
  return <IconWrapper color={color}>{children}</IconWrapper>;
};

export default Icon;
