import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export const Chart = ({ data }) => {
  const transformedData = data.map((item) => {
    const [year, month, day] = item.date.split('-');
    const transformedDate = `${day}/${month}`;

    return { ...item, date: transformedDate };
  });

  return (
    <ResponsiveContainer width="70%" height="70%">
      <AreaChart data={transformedData}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#0F81CE" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#0F81CE00" stopOpacity={0} />
          </linearGradient>

          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#C52D81" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#C52D8100" stopOpacity={0} />
          </linearGradient>

          <linearGradient id="colorGv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1BBA64" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#1BBA6400" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <CartesianGrid opacity={0.1} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="blue"
          stroke="#18A0FB"
          fillOpacity={1}
          strokeWidth={2}
          fill="url(#colorUv)"
          dot={{ stroke: '#18A0FB', strokeWidth: 2, fill: '#18A0FB' }}
        />
        <Area
          type="monotone"
          dataKey="red"
          stroke="#C52D81"
          fillOpacity={1}
          strokeWidth={2}
          fill="url(#colorPv)"
          dot={{ stroke: '#ED2D95', strokeWidth: 2, fill: '#ED2D95' }}
        />
        <Area
          type="monotone"
          dataKey="green"
          stroke="#29ae66"
          fillOpacity={1}
          strokeWidth={2}
          fill="url(#colorGv)"
          dot={{ stroke: '#48cd86', strokeWidth: 2, fill: '#48cd86' }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
