import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import {
  BarChart2,
  Wallet,
  CreditCard,
  TrendingUp,
  Bell,
  ChevronDown,
  Rocket,
  CircleDot,
  Hand,
  HandMetal,
} from "lucide-react";
import EarningsInsights from "./components/EarningsInsights";
import EarningChart from "./components/EarningChart";
import RankCard from "./components/RankCard";
import ChartFinal from "./components/ChartFinal";

const Dashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className={styles.dashboard}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>Razorpay</div>
        <ul className={styles.menu}>
          <li className={styles.active}>Dashboard</li>
          <li>Earnings</li>
          <li>Tiers</li>
          <li>M-Tools</li>
          <li>Leads</li>
          <li>Reports</li>
        </ul>
      </aside>

      <main className={styles.main}>
        <header className={styles.header}>
          <h2>
            Hello,{" "}
            <span>
              Piyush Patyal <HandMetal size={24} color="#FF9500" />
            </span>
          </h2>

          <div className={styles.rightSection}>
            <div className={styles.notification}>
              <Bell size={20} />
              <span className={styles.badge}></span>
            </div>

            <div
              className={styles.avatarContainer}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <img
                src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fwww.gravatar.com%2Favatar%2F2c7d99fe281ecd3bcd65ab915bac6dd5%3Fs%3D250" //
                alt="avatar"
                className={styles.avatar}
              />
              <ChevronDown size={18} className={styles.arrow} />

              {dropdownOpen && (
                <ul className={styles.dropdown}>
                  <li>Edit Your Profile</li>
                  <li>Back to Dashboard</li>
                  <li className={styles.logout}>Log Out</li>
                </ul>
              )}
            </div>
          </div>
        </header>

        <div className={styles.countdown}>
          <div className={styles.countMain}>
            <div className={styles.timeBlock}>
              <span className={styles.value}>6</span>
              <span className={styles.unit}>DAYS</span>
            </div>
            <span className={styles.separator}>:</span>
            <div className={styles.timeBlock}>
              <span className={styles.value}>11</span>
              <span className={styles.unit}>HRS</span>
            </div>
            <span className={styles.separator}>:</span>
            <div className={styles.timeBlock}>
              <span className={styles.value}>59</span>
              <span className={styles.unit}>MIN</span>
            </div>
            <span className={styles.separator}>:</span>
            <div className={styles.timeBlock}>
              <span className={styles.value}>09</span>
              <span className={styles.unit}>SEC</span>
            </div>
          </div>

          <div className={styles.textJust}>
            Your next level is just one click away...
          </div>
          <div className={styles.launchWrapper}>
            <Rocket size={24} className={styles.rocket} />
            <span className={styles.text}>Launching Soon!</span>
          </div>
        </div>

        <div className={styles.earningRow}>
          <EarningsInsights />
          <EarningChart />
        </div>
        <div className={styles.earningRow}>
          <RankCard />
          <ChartFinal />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
