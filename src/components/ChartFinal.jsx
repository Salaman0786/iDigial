import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import styles from "../styles/ChartFinal.module.css";

const data = [
  { month: "Jan", revenue: 50 },
  { month: "Feb", revenue: 80 },
  { month: "Mar", revenue: 300 },
  { month: "Apr", revenue: 250 },
  { month: "May", revenue: 500 },
  { month: "Jun", revenue: 320 },
  { month: "Jul", revenue: 400 },
  { month: "Aug", revenue: 380 },
  { month: "Sep", revenue: 420 },
  { month: "Oct", revenue: 300 },
  { month: "Nov", revenue: 280 },
  { month: "Dec", revenue: 260 },
];

const ChartFinal = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>Total Earning</h3>
        <span className={styles.legend}>
          <span className={styles.dot}></span> Revenue
        </span>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3DB6FF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3DB6FF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="transparent" />
          <XAxis dataKey="month" stroke="#aaa" fontSize={10} />
          <YAxis stroke="#aaa" fontSize={10} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1c1c28",
              border: "1px solid #333",
              color: "#fff",
            }}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#3DB6FF"
            strokeWidth={2}
            dot={{ r: 3, fill: "#FF9500" }}
            activeDot={{ r: 5, fill: "#FF9500" }}
            fillOpacity={1}
            fill="url(#colorRevenue)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartFinal;
