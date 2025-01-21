import { Button, DatePicker, Dropdown } from "antd";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Rectangle,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const DashboardChart = () => {
  const [cartYear, setCartYear] = useState("Select Year");
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const chart = [
    {
      name: "Jan",
      earn: 500,
    },
    {
      name: "Feb",
      earn: 700,
    },
    {
      name: "Mar",
      earn: 40,
    },
    {
      name: "Apr",
      earn: 900,
    },
    {
      name: "May",
      earn: 672,
    },
    {
      name: "Jun",
      earn: 300,
    },
    {
      name: "Jul",
      earn: 800,
    },
    {
      name: "Aug",
      earn: 400,
    },
    {
      name: "Sep",
      earn: 250,
    },
    {
      name: "Oct",
      earn: 710,
    },
    {
      name: "Nov",
      earn: 310,
    },
    {
      name: "Dec",
      earn: 840,
    },
  ];
  return (
    <div className="bg-white rounded-lg py-8 drop-shadow-sm">
      <div className="flex justify-between items-center px-6 mb-14">
        <h4 className="text-[20px]">Earnings</h4>
        <DatePicker onChange={onChange} picker="year" />
      </div>
      <div className="w-full pr-4">
        <BarChart
          children={"w-[100%]"}
          width={1490}
          height={250}
          // data={data?.data}
          data={chart}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="" stroke="#959393" />
          <XAxis
            // axisLine={false}
            dataKey="name"
            tick={{ stroke: "#00D698", strokeWidth: 0 }}
          />
          <YAxis
            axisLine={false}
            tick={{ stroke: "#959393", strokeWidth: 0 }}
          />
          <Bar
        
            dataKey="earn"
            fill="#00D698"
            barSize={36}
            activeBar={<Rectangle fill="pink" stroke="#00D698" />}
          />
        </BarChart>
      </div>
    </div>
  );
};

export default DashboardChart;
