import styled from 'styled-components';

export const Typography = styled.p`
  color: ${(props) => (props.color ? props.color : '#fff')};
  width: ${(props) => (props.width ? props.width : '')};
  font-size: ${(props) => (props.fontsize ? props.fontsize : '13px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
  text-align: ${(props) => (props.textalign ? props.textalign : 'start')};
  line-height: ${(props) => (props.lineheight ? props.lineheight : '')};
`;
