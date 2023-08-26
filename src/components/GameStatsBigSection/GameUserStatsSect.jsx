import React, { FC, useState, ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import { Chart } from './Chart/Chart';
import { SectionHeader } from '../../UI/SectionHeader';
import { UsersRating } from './UsersRating';
import { SelectionData } from './Chart/TypeOfChart';
import { CustomFunnelChart } from './FunnelChart/FunnelChart';
import { CustomComposedChart } from './СomposedChart/ComposedChart';
const StatisticWrapper = styled.section`
  max-width: 1312px;
  width: 100%;
  height: 344px;
  background-color: ${({ theme }) => theme.colors.greyBg};
  border-radius: 4px;
  margin-top: 16px;
  div.flex {
    width: 100%;
    height: 280px;
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
  const [chartLines, setChartLines] = useState('Graph');

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
    console.log('called me');
    setCheckState({
      ...checkState,
      [name]: event.target.checked,
    });
  };

  const selectTypeOfChart = (label) => {
    setChartLines(label);
  };

  const selectionTypeChart = (type) => {
    if (type == 'Funnel') {
      return (
        <div className="flex">
          <CustomFunnelChart data={chartData} />;
          <UsersRating
            data={usersData}
            handleCheckboxChange={handleCheckboxChange}
            checkState={checkState}
          />
        </div>
      );
    } else if (type == 'Graph') {
      return (
        <div className="flex">
          <Chart data={chartData} />;
          <UsersRating
            data={usersData}
            handleCheckboxChange={handleCheckboxChange}
            checkState={checkState}
          />
        </div>
      );
    } else if (type == 'Composed') {
      return <CustomComposedChart data={chartData} />;
    } else if (type == 'Paragraph') {
      return <img src="./images/job-offer2.jpeg" style={{ height: '80%' }} />;
    }
  };

  const chart = selectionTypeChart(chartLines);
  return (
    <StatisticWrapper>
      <SectionHeader name="Game Stats">
        <SelectionData
          handleCheckboxChange={selectTypeOfChart}
          chartLines={chartLines}
        />
      </SectionHeader>
      {chart}
    </StatisticWrapper>
  );
};
