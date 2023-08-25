import React, { useState } from 'react';
import Dropdown from '../../UI/DropDownMenu';
import { ItemSelect } from '../../UI/ItemSelect';
import Switch from '../../UI/Switcher';

export const ModalList = () => {
  const [settingType, setSettingType] = useState({
    source: true,
    cardModel: true,
    cardNumber: false,
    cardName: true,
    type: true,
    limited: true,
    operations: true,
  });

  const handleCheckboxChange = (label) => {
    setSettingType((prevState) => ({
      ...prevState,
      [label]: !prevState[label],
    }));
  };
  return (
    <Dropdown name="Table settings" atribute="" buttonType="settings">
      <ItemSelect name="Source" onClick={() => handleCheckboxChange('source')}>
        <Switch isActive={settingType.source} />
      </ItemSelect>
      <ItemSelect
        name="Card model"
        onClick={() => handleCheckboxChange('cardModel')}
      >
        <Switch isActive={settingType.cardModel} />
      </ItemSelect>
      <ItemSelect
        name="Card number"
        onClick={() => handleCheckboxChange('cardNumber')}
      >
        <Switch isActive={settingType.cardNumber} />
      </ItemSelect>
      <ItemSelect
        name="Card name"
        onClick={() => handleCheckboxChange('cardName')}
      >
        <Switch isActive={settingType.cardName} />
      </ItemSelect>
      <ItemSelect name="Type" onClick={() => handleCheckboxChange('type')}>
        <Switch isActive={settingType.type} />
      </ItemSelect>
      <ItemSelect
        name="Limited"
        onClick={() => handleCheckboxChange('limited')}
      >
        <Switch isActive={settingType.limited} />
      </ItemSelect>
      <ItemSelect
        name="№ Operations"
        onClick={() => handleCheckboxChange('operations')}
      >
        <Switch isActive={settingType.operations} />
      </ItemSelect>
    </Dropdown>
  );
};
