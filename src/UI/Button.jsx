import { FC } from 'react';
import styled from 'styled-components';
import FlexContainer from './Flex';

const DropdownButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  color: ${(props) => (props.isOpen ? '#81C2FF' : '#fff')};
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  p {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: rgba(255, 255, 255, 0.6);
    margin-right: 16px;
  }
`;

export const Button = ({
  name,
  isOpen,
  onClick,
  type = 'dropDown',
  atribute,
}) => {
  const checkType = () => {
    if (type === 'settings') {
      if (isOpen) {
        return (
          <img
            style={{ width: '24px', height: '24px' }}
            src="./icons/settings-blue.svg"
          />
        );
      } else {
        return (
          <img
            style={{ width: '24px', height: '24px' }}
            src="./icons/settings-white.svg"
          />
        );
      }
    }
  };

  const isOpenIcon = () => {
    const icon = isOpen ? (
      <img src="./icon-statistic/arrow-up.svg" />
    ) : (
      <img src="./icon-statistic/arrow-down.svg" />
    );
    return icon;
  };
  const openIcon = isOpenIcon();
  const settingsIcon = checkType();
  return (
    <DropdownButton isOpen={isOpen}>
      <FlexContainer alignitems="center" gap="8px">
        {settingsIcon}
        {atribute ? <p>{atribute}</p> : ''}
        <FlexContainer alignitems="center" onClick={onClick}>
          {name}
          {openIcon}
        </FlexContainer>
      </FlexContainer>
    </DropdownButton>
  );
};
