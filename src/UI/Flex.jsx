import React from 'react';
import styled from 'styled-components';

const StyledFlexContainer = styled.div`
  display: flex;
  width: ${(props) => (props.width ? props.width : '')};
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
  align-items: ${(props) => (props.alignitems ? props.alignitems : 'stretch')};
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : 'nowrap')};
  gap: ${(props) => (props.gap ? props.gap : '0')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
`;

const FlexContainer = ({ children, ...rest }) => {
  return <StyledFlexContainer {...rest}>{children}</StyledFlexContainer>;
};

export default FlexContainer;
