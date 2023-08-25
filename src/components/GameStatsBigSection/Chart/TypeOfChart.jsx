import Dropdown from '../../../UI/DropDownMenu';
import RoundCheckbox from '../../../UI/Checkbox/RoundCheckbox';
import { useState } from 'react';

export const SelectionData = () => {
  const [chartLines, setChartLines] = useState('Graph');

  const handleCheckboxChange = (label) => {
    setChartLines(label);
  };

  return (
    <Dropdown name="Graph" atribute="Data type">
      <RoundCheckbox
        handleChange={handleCheckboxChange}
        checked={chartLines === 'Diagrams'}
        label="Diagrams"
      />
      <RoundCheckbox
        handleChange={handleCheckboxChange}
        checked={chartLines === 'Graph'}
        label="Graph"
      />
      <RoundCheckbox
        handleChange={handleCheckboxChange}
        checked={chartLines === 'Table'}
        label="Table"
      />
      <RoundCheckbox
        handleChange={handleCheckboxChange}
        checked={chartLines === 'Paragraph'}
        label="Paragraph"
      />
    </Dropdown>
  );
};
