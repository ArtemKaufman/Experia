import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import styled from 'styled-components';
import FlexContainer from '../../../UI/Flex';
import { Typography } from '../../../UI/Typography.styled';

const COLORS = ['#3CDC86', '#18A0FB', '#ED2D95'];

const StyledPieChart = styled(PieChart)`
  width: 300px;
  height: 300px;
`;

const StyledText = styled.div`
  position: absolute;
  top: 40%;
  left: 20%;
`;

export const PieChartComponent = ({ data }) => {
  function transformData(inputData) {
    const transformedData = {
      blue: 0,
      red: 0,
      green: 0,
    };

    inputData.forEach((entry) => {
      transformedData.blue += entry.blue;
      transformedData.red += entry.red;
      transformedData.green += entry.green;
    });

    const result = [
      { name: 'Blue', value: transformedData.blue },
      { name: 'Red', value: transformedData.red },
      { name: 'Green', value: transformedData.green },
    ];

    return result;
  }
  const transformedData = transformData(data);

  const renderColorfulLegendText = (value, entry) => {
    return (
      <span
        style={{
          color: '#9F9F9F',
          fontSize: '12px',
          marginLeft: '16px',
        }}
      >
        {value}
      </span>
    );
  };

  return (
    <>
      <StyledPieChart width={445} height={250}>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
          height="220px"
          iconSize={8}
          formatter={renderColorfulLegendText}
          wrapperStyle={{ paddingLeft: '10px' }}
        />

        <Pie
          dataKey="value"
          data={transformedData}
          width={350}
          height={150}
          position="relative"
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={110}
          stroke="#242731"
          strokeWidth={10}
          cornerRadius={50}
        >
          {data.map((entry, index) => (
            <Cell
              outerradius="100%"
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </StyledPieChart>
      <StyledText>
        <FlexContainer
          direction="column"
          justifyContent="center"
          alignitems="center"
          gap="4px"
        >
          <Typography fontWeight="500" fontSize="12px" color="#A7A9AD">
            Excessive
          </Typography>
          <Typography fontsize="64px" fontWeight="500">
            85%
          </Typography>
          <Typography textalign="center">
            +40 418 in the last
            <br /> 30 days
          </Typography>
        </FlexContainer>
      </StyledText>
    </>
  );
};
