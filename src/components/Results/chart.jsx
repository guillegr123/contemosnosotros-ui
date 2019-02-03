import React from "react";
import styled from "styled-components";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const ResponsiveChartcontainer = styled(ResponsiveContainer)`
  height: 30rem !important;
`;

const data = [
  { name: "Ahuachapán", ni: 4000, arena: 2400, fmln: 2400, vamos: 12500 },
  { name: "Cabañas", ni: 3000, arena: 1398, fmln: 2210, vamos: 100 },
  { name: "Chalatenango", ni: 8000, arena: 11398, fmln: 21210, vamos: 100 },
  { name: "Cuscatlán", ni: 30000, arena: 11398, fmln: 20210, vamos: 100 },
  { name: "La Libertad", ni: 3000, arena: 1398, fmln: 2210, vamos: 100 },
  { name: "La Paz", ni: 3000, arena: 1398, fmln: 2210, vamos: 100 },
  { name: "La Unión", ni: 3000, arena: 1398, fmln: 2210, vamos: 100 },
  { name: "Morazán", ni: 3000, arena: 1398, fmln: 2210, vamos: 100 },
  { name: "San Miguel", ni: 33000, arena: 12398, fmln: 22210, vamos: 1100 },
  { name: "San Salvador", ni: 3000, arena: 1398, fmln: 2210, vamos: 100 },
  { name: "San Vicente", ni: 3000, arena: 1398, fmln: 2210, vamos: 100 },
  { name: "Santa Ana", ni: 3000, arena: 12398, fmln: 2210, vamos: 100 },
  { name: "Sonsonate", ni: 3000, arena: 1398, fmln: 20210, vamos: 100 },
  { name: "Usulután", ni: 30000, arena: 1398, fmln: 2210, vamos: 100 }
];

const Chart = () => (
  <ResponsiveChartcontainer>
    <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="ni"
        stackId="1"
        stroke="#00adef"
        fill="#00adef"
      />
      <Area
        type="monotone"
        dataKey="arena"
        stackId="1"
        stroke="#005baa"
        fill="#005baa"
      />
      <Area
        type="monotone"
        dataKey="fmln"
        stackId="1"
        stroke="#c93638"
        fill="#c93638"
      />
      <Area
        type="monotone"
        dataKey="vamos"
        stackId="1"
        stroke="#1029B6"
        fill="#1029B6"
      />
    </AreaChart>
  </ResponsiveChartcontainer>
);

export default Chart;
