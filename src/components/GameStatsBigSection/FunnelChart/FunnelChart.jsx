import React from 'react';
import {
  Funnel,
  FunnelChart,
  LabelList,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

export const CustomFunnelChart = ({ data }) => {
  function transformData(inputData) {
    const transformedData = {
      blue: 0,
      red: 0,
      green: 0,
    };

    inputData.forEach((entry) => {
      if (entry.blue) transformedData.blue += entry.blue;
      if (entry.red) transformedData.red += entry.red;
      if (entry.green) transformedData.green += entry.green;
    });

    const result = [];

    if (transformedData.blue > 0) {
      result.push({
        name: 'Blue',
        value: transformedData.blue,
        fill: '#0F81CE',
      });
    }
    if (transformedData.red > 0) {
      result.push({ name: 'Red', value: transformedData.red, fill: '#C52D81' });
    }
    if (transformedData.green > 0) {
      result.push({
        name: 'Green',
        value: transformedData.green,
        fill: '#1BBA64',
      });
    }

    return result;
  }

  const transformedData = transformData(data);

  return (
    <ResponsiveContainer width="70%" height="70%">
      <FunnelChart>
        <Tooltip />
        <Funnel dataKey="value" data={transformedData} isAnimationActive>
          <LabelList position="right" fill="#000" dataKey="name" />
        </Funnel>
      </FunnelChart>
    </ResponsiveContainer>
  );
};
