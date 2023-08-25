import React, { useState } from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  border-radius: 4px;
  background-color: ${(props) => (props.checked ? '#31343d' : '')};

  &:hover {
    cursor: pointer;
  }
  img {
    display: ${(props) => (props.checked ? '' : 'none')};
  }
`;

export const List = () => {
  const [checked, setChecked] = useState('Naperville');

  const handleCheckboxChange = (label) => {
    setChecked(label);
  };
  return (
    <>
      <ItemWrapper
        checked={checked == 'Charlottetown'}
        onClick={() => handleCheckboxChange('Charlottetown')}
      >
        Charlottetown <img src="./icons/tabler_check.svg" />
      </ItemWrapper>

      <ItemWrapper
        checked={checked == 'Halifax'}
        onClick={() => handleCheckboxChange('Halifax')}
      >
        Halifax <img src="./icons/tabler_check.svg" />
      </ItemWrapper>

      <ItemWrapper
        checked={checked == 'Naperville'}
        onClick={() => handleCheckboxChange('Naperville')}
      >
        Naperville <img src="./icons/tabler_check.svg" />
      </ItemWrapper>
      <ItemWrapper
        checked={checked == 'Vernon'}
        onClick={() => handleCheckboxChange('Vernon')}
      >
        Vernon <img src="./icons/tabler_check.svg" />
      </ItemWrapper>
      <ItemWrapper
        checked={checked == 'Montreal'}
        onClick={() => handleCheckboxChange('Montreal')}
      >
        Montreal <img src="./icons/tabler_check.svg" />
      </ItemWrapper>
    </>
  );
};
