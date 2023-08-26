import Dropdown from '../../../UI/DropDownMenu';
import RoundCheckbox from '../../../UI/Checkbox/RoundCheckbox';

export const SelectionData = ({ chartLines, handleCheckboxChange }) => {
  return (
    <Dropdown name="Graph" atribute="Data type">
      <RoundCheckbox
        handleChange={handleCheckboxChange}
        checked={chartLines === 'Funnel'}
        label="Funnel"
      />
      <RoundCheckbox
        handleChange={handleCheckboxChange}
        checked={chartLines === 'Graph'}
        label="Graph"
      />
      <RoundCheckbox
        handleChange={handleCheckboxChange}
        checked={chartLines === 'Composed'}
        label="Composed"
      />
      <RoundCheckbox
        handleChange={handleCheckboxChange}
        checked={chartLines === 'Paragraph'}
        label="Paragraph"
      />
    </Dropdown>
  );
};
