import { FC } from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 16px;
`;

const LabelText = styled.span`
  color: #fff;
  font-size: 14px;
  width: 212px;
`;

const InputCheckbox = styled.input`
  display: none;
`;

const CustomCheckbox = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 2px solid
    ${({ theme, checked }) =>
      checked ? theme.colors.purple : theme.colors.greyText};
  border-radius: 50%;
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
  background-color: ${({ theme }) => theme.colors.purple};
  border-radius: 50%;
  opacity: ${(props) => (props.checked ? 1 : 0)};
`;

const RoundCheckbox = ({ checked, label, handleChange }) => {
  return (
    <CheckboxContainer onClick={() => handleChange(label)}>
      <InputCheckbox
        type="checkbox"
        checked={checked}
        onChange={() => handleChange(label)}
      />
      <CustomCheckbox checked={checked}>
        <CustomCheckmark checked={checked} />
      </CustomCheckbox>
      <LabelText>{label}</LabelText>
    </CheckboxContainer>
  );
};

export default RoundCheckbox;
