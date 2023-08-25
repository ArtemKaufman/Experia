import { FC } from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.label`
  display: inline-block;
`;

const InputCheckbox = styled.input`
  display: none;
`;

const CustomCheckbox = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 2px solid ${(props) => (props.color ? props.color : '#fff')};
  border-radius: 4px;
  position: relative;
  cursor: pointer;
`;

const CustomCheckmark = styled.span`
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 18px;
  height: 18px;
  background-color: ${(props) => (props.color ? props.color : '#fff')};
  border-radius: 2px;
  opacity: ${(props) => (props.checked ? 1 : 0)};
`;
const InputCheckboxLabel = styled.label`
  display: inline-block;
`;

const SquareCheckbox = ({
  color,
  checked,
  handleCheckboxChange,
  showChart,
}) => {
  return (
    <CheckboxContainer>
      <InputCheckboxLabel>
        <InputCheckbox
          type="checkbox"
          value={color}
          checked={checked}
          onChange={handleCheckboxChange(showChart)}
        />
        <CustomCheckbox color={color}>
          <CustomCheckmark color={color} checked={checked} />
        </CustomCheckbox>
      </InputCheckboxLabel>
    </CheckboxContainer>
  );
};

export default SquareCheckbox;
