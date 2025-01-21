import { Select } from "antd";
import React, { PureComponent } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", uv: 4000, amt: 2400 },
  { name: "Feb", uv: 3000, amt: 2210 },
  { name: "Mar", uv: 2000, amt: 2290 },
  { name: "Apr", uv: 2780, amt: 2000 },
  { name: "May", uv: 1890, amt: 2181 },
  { name: "June", uv: 2390, amt: 2500 },
  { name: "July", uv: 3490, amt: 2100 },
  { name: "Aug", uv: 1490, amt: 2100 },
  { name: "Sep", uv: 3090, amt: 2100 },
  { name: "Oct", uv: 3111, amt: 2100 },
  { name: "Nov", uv: 1987, amt: 2100 },
  { name: "Dec", uv: 2490, amt: 2100 },
];

const BarChartComponent = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      <div className="flex items-center justify-between py-7">
        <h1 className="text-sm md:text-2xl">Earnings</h1>
        <Select
          defaultValue="2024 May"
          style={{
            width: 120,
          }}
          bordered={false}
          suffixIcon={<MdOutlineKeyboardArrowDown color="gray" fontSize={30} />}
          onChange={handleChange}
          options={[
            {
              value: "2024 May",
              label: "2024 May",
            },
            {
              value: "2024 Apr",
              label: "2024 Apr",
            },
          ]}
        />
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid horizontal={true} vertical={false} />
          <XAxis dataKey="name" />
          <YAxis
            tickFormatter={(value) => `${value / 1000}k`} // Converts numbers to "k" format
          />
          <Tooltip cursor={{ fill: "transparent" }} />
          {/* <Legend /> */}
          <Bar dataKey="uv" fill="#dd800c" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default BarChartComponent;
