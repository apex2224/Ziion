import React from "react";
import styles from "./Advertiser.module.css";
import {
  FaUserCircle,
  FaBell,
  FaCog,
  FaChartBar,
  FaBullseye,
  FaTasks,
  FaClipboardList,
  FaPlus,
  FaRocket,
  FaLink,
  FaGift,
  FaBookOpen,
  FaDownload,
  FaAngleDown,
  FaSearch,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaShareAlt,
} from "react-icons/fa";

// Sub-component for the top header
const DashboardHeader = () => (
  <header className={styles.header}>
    <div className={styles.logo}>CPIDroid</div>
    <div className={styles.searchBar}>
      <FaSearch />
      <input type="text" placeholder="Search in Knowledge Base" />
    </div>
    <div className={styles.userMenu}>
      <a href="#" className={styles.getHelp}>
        Get Help
      </a>
      <FaBell className={styles.headerIcon} />
      <FaCog className={styles.headerIcon} />
      <FaUserCircle size={24} className={styles.headerIcon} />
    </div>
  </header>
);

// Sub-component for the sidebar navigation
const Sidebar = () => (
  <aside className={styles.sidebar}>
    <div className={styles.profile}>
      <div className={styles.profileInfo}>
        <h4>rohitrakaror12</h4>
        <span className={styles.plan}>FREE</span>
      </div>
      <FaAngleDown />
    </div>
    <nav className={styles.nav}>
      <a href="#" className={`${styles.navItem} ${styles.active}`}>
        <FaChartBar /> Dashboard
      </a>
      <a href="#" className={styles.navItem}>
        <FaBullseye /> Campaigns
      </a>
      <a href="#" className={styles.navItem}>
        <FaTasks /> Tracking
      </a>
      <a href="#" className={styles.navItem}>
        <FaClipboardList /> Applications{" "}
        <span className={styles.badge}>PRO</span>
      </a>
      <a href="#" className={styles.navItem}>
        <FaClipboardList /> Advertiser Report
      </a>
      <a href="#" className={styles.navItem}>
        <FaGift /> Referral Program <span className={styles.badge}>NEW</span>
      </a>
    </nav>
    <div className={styles.managedServices}>
      <p className={styles.navHeader}>MANAGED SERVICES</p>
      <a href="#" className={styles.navItem}>
        <FaRocket /> ASO Booster <span className={styles.badge}>NEW</span>
      </a>
    </div>
    <div className={styles.resources}>
      <p className={styles.navHeader}>RESOURCES</p>
      <a href="#" className={styles.navItem}>
        <FaBookOpen /> Getting Started
      </a>
    </div>
    <div className={styles.sidebarFooter}>
      <a href="#">Referral Program</a>
      <FaCog />
    </div>
  </aside>
);

// Sub-component for the stat cards (Running, Paused, etc.)
const StatCard = ({ title, value, icon, color }) => (
  <div className={styles.statCard}>
    <div>
      <p>{title}</p>
      <h3>{value}</h3>
      <a href="#">
        {title} Campaigns <FaAngleDown size={12} />
      </a>
    </div>
    <div className={`${styles.statIcon} ${styles[color]}`}>{icon}</div>
  </div>
);

// Main Advertiser Dashboard Component
const Advertiser = () => {
  return (
    <div className={styles.dashboardLayout}>
      <DashboardHeader />
      <Sidebar />
      <main className={styles.mainContent}>
        {/* Top Stats Section */}
        <section className={styles.statsGrid}>
          <StatCard title="RUNNING" value="0" icon={<FaTasks />} color="blue" />
          <StatCard title="PAUSED" value="0" icon={<FaTasks />} color="blue" />
          <StatCard
            title="COMPLETED"
            value="0"
            icon={<FaTasks />}
            color="blue"
          />
          <StatCard
            title="TOTAL CAMPAIGNS"
            value="0"
            icon={<FaTasks />}
            color="blue"
          />
        </section>

        {/* Active Campaigns Table */}
        <section className={styles.campaignsTable}>
          <div className={styles.tableHeader}>
            <h4>Active Campaigns</h4>
            <div className={styles.tableControls}>
              <select>
                <option>10</option>
              </select>
              <span>entries per page</span>
              <div className={styles.tableSearch}>
                <FaSearch />
                <input type="text" placeholder="Search" />
              </div>
            </div>
          </div>
          <div className={styles.tableWrapper}>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>PLATFORM</th>
                  <th>TYPE</th>
                  <th>APP</th>
                  <th>TARGET COUNTRY</th>
                  <th>CONV / CLICKS TODAY</th>
                  <th>CONVERSIONS</th>
                  <th>CR</th>
                  <th>PROGRESS</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="10" className={styles.noData}>
                    No data available in table
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.tableFooter}>
            <span>Showing 0 to 0 of 0 entries</span>
            <div className={styles.pagination}>
              <button>&lt;</button>
              <button>&gt;</button>
            </div>
          </div>
        </section>

        <div className={styles.bottomActions}>
          <button className={styles.manageBtn}>
            <FaDownload /> Manage All Campaigns
          </button>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className={styles.rightSidebar}>
        <div className={styles.widget}>
          <h4>Our Services</h4>
          <div className={styles.serviceItem}>
            <div>
              <h5>CPC Campaigns</h5>
              <p>CPC (Pay per click) on interested clicks. No SDK required.</p>
            </div>
          </div>
          <div className={styles.serviceItem}>
            <div>
              <h5>CPI Campaigns</h5>
              <p>
                CPI (Pay per install) on installs. Best for cost-efficent
                marketing.
              </p>
            </div>
          </div>
          <div className={styles.serviceItem}>
            <div>
              <h5>CPA Campaigns</h5>
              <p>
                CPA (Pay per action) on action after free signup to install.
              </p>
            </div>
          </div>
          <a href="#" className={styles.moreInfo}>
            Understanding various Campaign Types/Conversions
          </a>
        </div>

        <div className={`${styles.widget} ${styles.referWidget}`}>
          <h4>Refer & Earn UNLIMITED 🤑</h4>
          <p>Share your referral link with friends to start earning.</p>
          <div className={styles.referralLink}>
            <span>https://cpidroid.com/?ref=K12345</span>
            <FaLink />
          </div>
          <div className={styles.shareButtons}>
            <span>SHARE</span>
            <button>
              <FaFacebookF />
            </button>
            <button>
              <FaTwitter />
            </button>
            <button>
              <FaWhatsapp />
            </button>
            <button>
              <FaShareAlt />
            </button>
          </div>
        </div>

        <div className={styles.widget}>
          <h4>Membership</h4>
          <div className={styles.membershipInfo}>
            <div className={styles.membershipIcon}>
              <FaUserCircle />
            </div>
            <div>
              <p>FREE</p>
              <a href="#">Manage Membership</a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Advertiser;
