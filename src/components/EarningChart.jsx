import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styles from "../styles/EarningChart.module.css";

const data = [
  { day: "M", earning: 2800 },
  { day: "T", earning: 1800 },
  { day: "W", earning: 3500 },
  { day: "T", earning: 1200 },
  { day: "F", earning: 2300 },
  { day: "S", earning: 2100 },
  { day: "S", earning: 2600 },
];

const EarningChart = () => {
  return (
    <div className={styles.chartContainer}>
      <div className={styles.header}>
        <h3 className={styles.title}>Earning Level</h3>
        <select className={styles.dropdown}>
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data}>
          <XAxis dataKey="day" stroke="#aaa" />
          <YAxis hide />
          <Tooltip
            cursor={{ fill: "transparent" }}
            contentStyle={{
              background: "#222",
              border: "none",
              borderRadius: "8px",
            }}
            formatter={(value) => [`₹ ${value}`, "Earning"]}
          />
          <Bar
            dataKey="earning"
            fill="#7FFFD4"
            radius={[6, 6, 0, 0]}
            barSize={28}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningChart;
