import React, { useState } from 'react';
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { SelectColor } from './Selection';
import styled from 'styled-components';

const ComposerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 20px;
`;

export const CustomComposedChart = ({ data }) => {
  const [checkState, setCheckState] = useState('blue');

  const handleCheckboxChange = (name) => (event) => {
    setCheckState(name);
  };
  const colors = {
    blue: '#0F81CE',
    green: '#1BBA64',
    red: '#C52D81',
  };

  return (
    <ComposerWrapper>
      <ResponsiveContainer width="70%" height="70%">
        <ComposedChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#787878" />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey={checkState} barSize={20} fill={colors[checkState]} />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
      <SelectColor
        checkState={checkState}
        handleCheckboxChange={handleCheckboxChange}
      />
    </ComposerWrapper>
  );
};
