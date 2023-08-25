import React, { FC, useState, ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import { Chart } from './Chart/Chart';
import { SectionHeader } from '../../UI/SectionHeader';
import { UsersRating } from './UsersRating';
import { SelectionData } from './Chart/TypeOfChart';
const StatisticWrapper = styled.section`
  max-width: 1312px;
  width: 100%;
  height: 344px;
  background-color: ${({ theme }) => theme.colors.greyBg};
  border-radius: 4px;
  margin-top: 16px;
  div.flex {
    width: 100%;
    height: 100%;
    display: flex;
    gap: 20px;
  }
`;

export const GameStatsSect = ({ data, usersData }) => {
  const [checkState, setCheckState] = useState({
    showBlue: true,
    showRed: true,
    showGreen: true,
    showYellow: false,
    showPurple: false,
  });

  const [chartData, setChartData] = useState(data);

  useEffect(() => {
    const filteredData = data.map((item) => {
      let updatedItem = { ...item };

      if (!checkState.showBlue) {
        delete updatedItem.blue;
      }

      if (!checkState.showRed) {
        delete updatedItem.red;
      }

      if (!checkState.showGreen) {
        delete updatedItem.green;
      }

      return updatedItem;
    });

    setChartData(filteredData);
  }, [data, checkState]);

  const handleCheckboxChange = (name) => (event) => {
    setCheckState({
      ...checkState,
      [name]: event.target.checked,
    });
  };

  return (
    <StatisticWrapper>
      <SectionHeader name="Game Stats">
        <SelectionData />
      </SectionHeader>
      <div className="flex">
        <Chart data={chartData} />
        <UsersRating
          data={usersData}
          handleCheckboxChange={handleCheckboxChange}
          checkState={checkState}
        />
      </div>
    </StatisticWrapper>
  );
};
