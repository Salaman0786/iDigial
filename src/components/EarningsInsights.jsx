import { Wallet, Receipt, ShoppingBag, User } from "lucide-react";
import styles from "../styles/EarningsInsights.module.css";

export default function EarningsInsights() {
  const data = [
    {
      id: 1,
      icon: <Wallet size={28} className={styles.iconGold} />,
      amount: "₹ 51,060",
      label: "All Time",
      change: "+6% from yesterday",
      changeClass: styles.changeUp,
    },
    {
      id: 2,
      icon: <Receipt size={28} className={styles.iconGreen} />,
      amount: "₹ 21,340",
      label: "All time paid",
      change: "+1% from yesterday",
      changeClass: styles.changeUp,
    },
    {
      id: 3,
      icon: <ShoppingBag size={28} className={styles.iconPurple} />,
      amount: "₹ 10,162",
      label: "In last 30 Days",
      change: "-2% from yesterday",
      changeClass: styles.changeDown,
    },
    {
      id: 4,
      icon: <User size={28} className={styles.iconBlue} />,
      amount: "₹ 3,890",
      label: "In last 7 Days",
      change: "+2% from yesterday",
      changeClass: styles.changeUp,
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Earnings Insights</h2>
      <p className={styles.subtitle}>Performance Summary</p>
      <div className={styles.cards}>
        {data.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.iconWrapper}>{item.icon}</div>
            <h3 className={styles.amount}>{item.amount}</h3>
            <p className={styles.label}>{item.label}</p>
            <p className={`${styles.change} ${item.changeClass}`}>
              {item.change}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
