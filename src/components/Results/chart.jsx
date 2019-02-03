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
  { name: "Ahuachapán", ni: 0, arena: 0, fmln: 0, vamos: 0 },
  { name: "Cabañas", ni: 0, arena: 0, fmln: 0, vamos: 0 },
  { name: "Chalatenango", ni: 0, arena: 0, fmln: 0, vamos: 0 },
  { name: "Cuscatlán", ni: 0, arena: 0, fmln: 0, vamos: 0 },
  { name: "La Libertad", ni: 0, arena: 0, fmln: 0, vamos: 0 },
  { name: "La Paz", ni: 0, arena: 0, fmln: 0, vamos: 0 },
  { name: "La Unión", ni: 0, arena: 0, fmln: 0, vamos: 0 },
  { name: "Morazán", ni: 0, arena: 0, fmln: 0, vamos: 0 },
  { name: "San Miguel", ni: 0, arena: 0, fmln: 0, vamos: 0 },
  { name: "San Salvador", ni: 0, arena: 0, fmln: 0, vamos: 0 },
  { name: "San Vicente", ni: 0, arena: 0, fmln: 0, vamos: 0 },
  { name: "Santa Ana", ni: 0, arena: 0, fmln: 0, vamos: 0 },
  { name: "Sonsonate", ni: 0, arena: 0, fmln: 0, vamos: 0 },
  { name: "Usulután", ni: 0, arena: 0, fmln: 0, vamos: 0 }
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
