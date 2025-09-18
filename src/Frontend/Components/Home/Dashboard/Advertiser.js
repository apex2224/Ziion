import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Advertiser.module.css";
import {
  FaUserCircle,
  FaBell,
  FaCog,
  FaChartBar,
  FaBullseye,
  FaTasks,
  FaClipboardList,
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
  FaPlus,
  FaEdit,
  FaTrash,
  FaEye,
  FaFilter,
  FaSort,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaGlobe,
  FaMobileAlt,
  FaDesktop,
  FaChartLine,
  FaChartPie,
  FaChartArea,
  FaUsers,
  FaDollarSign,
  FaCopy,
  FaCheck,
  FaBars,
  FaTimes,
} from "react-icons/fa";

// Sub-component for the top header
const DashboardHeader = ({ toggleSidebar }) => (
  <header className={styles.header}>
    <button className={styles.menuToggle} onClick={toggleSidebar}>
      <FaBars />
    </button>
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

// New sub-component for the dashboard selection
const DashboardSelector = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const handlePublisherClick = () => {
    navigate("/publisher");
  };

  const handleAdvertiserClick = () => {
    // Already on advertiser page, no need to navigate
  };

  return (
    <div className={styles.dashboardSelector}>
      <div className={styles.selectorOption}>
        <div className={styles.selectorText}>
          <span>Welcome</span>
          <FaAngleDown />
        </div>
        <div className={styles.profileAmounts}>
          <div className={styles.advertiserAmount}>
            Advertiser <span>$0.00</span>
          </div>
          <div className={styles.publisherAmount}>
            Publisher <span>$0.00</span>
          </div>
        </div>
      </div>
      <div className={styles.dashboardTabs}>
        <button
          className={`${styles.dashboardTab} ${
            activeTab === "publisher" ? styles.activeTab : ""
          }`}
          onClick={handlePublisherClick}
        >
          Publisher
        </button>
        <button
          className={`${styles.dashboardTab} ${
            activeTab === "advertiser" ? styles.activeTab : ""
          }`}
          onClick={handleAdvertiserClick}
        >
          Advertiser
        </button>
      </div>
    </div>
  );
};

// Sub-component for the sidebar navigation
const Sidebar = ({ activeItem, setActiveItem, activeTab, setActiveTab }) => (
  <aside className={styles.sidebar}>
    <DashboardSelector activeTab={activeTab} setActiveTab={setActiveTab} />
    <nav className={styles.nav}>
      <p className={styles.navHeader}>MAIN MENU</p>
      <a
        href="#"
        className={`${styles.navItem} ${
          activeItem === "dashboard" ? styles.active : ""
        }`}
        onClick={(e) => {
          e.preventDefault();
          setActiveItem("dashboard");
        }}
      >
        <FaChartBar /> Dashboard
        <span className={styles.navItemBadge}>Advertiser</span>
      </a>
      <a
        href="#"
        className={`${styles.navItem} ${
          activeItem === "campaigns" ? styles.active : ""
        }`}
        onClick={(e) => {
          e.preventDefault();
          setActiveItem("campaigns");
        }}
      >
        <FaBullseye /> Campaigns
      </a>
      <div className={styles.navGroup}>
        <p className={styles.navHeader}>Apps / Campaigns</p>
        <a
          href="#"
          className={`${styles.navItem} ${
            activeItem === "tracking" ? styles.active : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            setActiveItem("tracking");
          }}
        >
          <FaTasks /> Manage Campaigns
        </a>
        <a
          href="#"
          className={`${styles.navItem} ${
            activeItem === "applications" ? styles.active : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            setActiveItem("applications");
          }}
        >
          <FaClipboardList /> Applications
        </a>
      </div>
      <a
        href="#"
        className={`${styles.navItem} ${
          activeItem === "reports" ? styles.active : ""
        }`}
        onClick={(e) => {
          e.preventDefault();
          setActiveItem("reports");
        }}
      >
        <FaDollarSign /> Advertiser Billing
      </a>
      <a
        href="#"
        className={`${styles.navItem} ${
          activeItem === "reports" ? styles.active : ""
        }`}
        onClick={(e) => {
          e.preventDefault();
          setActiveItem("reports");
        }}
      >
        <FaClipboardList /> Advertiser Report
      </a>
      <a
        href="#"
        className={`${styles.navItem} ${
          activeItem === "referral" ? styles.active : ""
        }`}
        onClick={(e) => {
          e.preventDefault();
          setActiveItem("referral");
        }}
      >
        <FaGift /> Referral Program
      </a>
      <div className={styles.managedServices}>
        <p className={styles.navHeader}>MANAGED SERVICES</p>
        <a href="#" className={styles.navItem}>
          <FaRocket /> ASO Booster <span className={styles.badge}>NEW</span>
        </a>
      </div>
    </nav>
    <div className={styles.sidebarFooter}>
      <a href="#">Referral Program</a>
      <FaCog />
    </div>
  </aside>
);

// Dashboard Home Component
const DashboardHome = () => {
  // Sample data for the campaigns table
  const sampleCampaigns = [
    {
      id: 1,
      platform: "Android",
      type: "CPI",
      app: "Game App",
      country: "India",
      convClicks: "25 / 100",
      conversions: "25",
      cr: "25%",
      progress: "50%",
      status: "Running",
    },
    {
      id: 2,
      platform: "iOS",
      type: "CPC",
      app: "Shopping App",
      country: "USA",
      convClicks: "10 / 50",
      conversions: "10",
      cr: "20%",
      progress: "30%",
      status: "Paused",
    },
    {
      id: 3,
      platform: "Web",
      type: "CPA",
      app: "Education App",
      country: "UK",
      convClicks: "5 / 30",
      conversions: "5",
      cr: "16.6%",
      progress: "75%",
      status: "Completed",
    },
  ];

  // Sub-component for the stat cards (Running, Paused, etc.)
  const StatCard = ({ title, value, icon, color, onClick }) => (
    <div className={styles.statCard} onClick={onClick}>
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

  return (
    <>
      {/* Top Stats Section */}
      <section className={styles.statsGrid}>
        <StatCard
          title="RUNNING"
          value={sampleCampaigns.filter((c) => c.status === "Running").length}
          icon={<FaTasks />}
          color="blue"
        />
        <StatCard
          title="PAUSED"
          value={sampleCampaigns.filter((c) => c.status === "Paused").length}
          icon={<FaTasks />}
          color="blue"
        />
        <StatCard
          title="COMPLETED"
          value={sampleCampaigns.filter((c) => c.status === "Completed").length}
          icon={<FaTasks />}
          color="blue"
        />
        <StatCard
          title="TOTAL CAMPAIGNS"
          value={sampleCampaigns.length}
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
              {sampleCampaigns.length > 0 ? (
                sampleCampaigns.map((campaign) => (
                  <tr key={campaign.id}>
                    <td>{campaign.id}</td>
                    <td>{campaign.platform}</td>
                    <td>{campaign.type}</td>
                    <td>{campaign.app}</td>
                    <td>{campaign.country}</td>
                    <td>{campaign.convClicks}</td>
                    <td>{campaign.conversions}</td>
                    <td>{campaign.cr}</td>
                    <td>{campaign.progress}</td>
                    <td>{campaign.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" className={styles.noData}>
                    No data available in table
                  </td>
                </tr>
              )}
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
    </>
  );
};

// Campaigns Component
const Campaigns = () => {
  const [campaigns] = useState([
    {
      id: 1,
      name: "Summer Sale Campaign",
      platform: "Android",
      type: "CPI",
      budget: "$1,000",
      spent: "$500",
      status: "Running",
      startDate: "2023-06-01",
      endDate: "2023-08-31",
    },
    {
      id: 2,
      name: "New App Launch",
      platform: "iOS",
      type: "CPC",
      budget: "$2,500",
      spent: "$1,200",
      status: "Paused",
      startDate: "2023-07-15",
      endDate: "2023-09-30",
    },
    {
      id: 3,
      name: "Holiday Promotion",
      platform: "Web",
      type: "CPA",
      budget: "$3,000",
      spent: "$3,000",
      status: "Completed",
      startDate: "2023-11-01",
      endDate: "2023-12-31",
    },
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newCampaign, setNewCampaign] = useState({
    name: "",
    platform: "Android",
    type: "CPI",
    budget: "",
  });

  const handleCreateCampaign = () => {
    // In a real app, this would make an API call
    console.log("Creating campaign:", newCampaign);
    setShowCreateForm(false);
    setNewCampaign({ name: "", platform: "Android", type: "CPI", budget: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCampaign((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.campaignsSection}>
      <div className={styles.sectionHeader}>
        <h2>Campaigns</h2>
        <button
          className={styles.createBtn}
          onClick={() => setShowCreateForm(!showCreateForm)}
        >
          <FaPlus /> Create Campaign
        </button>
      </div>

      {showCreateForm && (
        <div className={styles.createForm}>
          <h3>Create New Campaign</h3>
          <div className={styles.formGroup}>
            <label>Campaign Name</label>
            <input
              type="text"
              name="name"
              value={newCampaign.name}
              onChange={handleInputChange}
              placeholder="Enter campaign name"
            />
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Platform</label>
              <select
                name="platform"
                value={newCampaign.platform}
                onChange={handleInputChange}
              >
                <option value="Android">Android</option>
                <option value="iOS">iOS</option>
                <option value="Web">Web</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>Type</label>
              <select
                name="type"
                value={newCampaign.type}
                onChange={handleInputChange}
              >
                <option value="CPI">CPI</option>
                <option value="CPC">CPC</option>
                <option value="CPA">CPA</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>Budget ($)</label>
              <input
                type="number"
                name="budget"
                value={newCampaign.budget}
                onChange={handleInputChange}
                placeholder="Enter budget"
              />
            </div>
          </div>
          <div className={styles.formActions}>
            <button
              className={styles.cancelBtn}
              onClick={() => setShowCreateForm(false)}
            >
              Cancel
            </button>
            <button className={styles.saveBtn} onClick={handleCreateCampaign}>
              Create Campaign
            </button>
          </div>
        </div>
      )}

      <div className={styles.tableFilters}>
        <div className={styles.filterGroup}>
          <FaFilter />
          <select>
            <option>All Status</option>
            <option>Running</option>
            <option>Paused</option>
            <option>Completed</option>
          </select>
        </div>
        <div className={styles.filterGroup}>
          <FaGlobe />
          <select>
            <option>All Platforms</option>
            <option>Android</option>
            <option>iOS</option>
            <option>Web</option>
          </select>
        </div>
        <div className={styles.filterGroup}>
          <FaCalendarAlt />
          <input type="date" />
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.campaignsTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Platform</th>
              <th>Type</th>
              <th>Budget</th>
              <th>Spent</th>
              <th>Status</th>
              <th>Period</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign.id}>
                <td>{campaign.name}</td>
                <td>{campaign.platform}</td>
                <td>{campaign.type}</td>
                <td>{campaign.budget}</td>
                <td>{campaign.spent}</td>
                <td>
                  <span
                    className={`${styles.status} ${
                      styles[campaign.status.toLowerCase()]
                    }`}
                  >
                    {campaign.status}
                  </span>
                </td>
                <td>
                  {campaign.startDate} to {campaign.endDate}
                </td>
                <td>
                  <div className={styles.actionButtons}>
                    <button className={styles.iconBtn}>
                      <FaEye />
                    </button>
                    <button className={styles.iconBtn}>
                      <FaEdit />
                    </button>
                    <button className={styles.iconBtn}>
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Tracking Component
const Tracking = () => {
  const [trackingData] = useState([
    {
      id: 1,
      name: "Campaign Tracker 1",
      type: "S2S",
      status: "Active",
      lastUpdated: "2023-07-15 14:30",
    },
    {
      id: 2,
      name: "Pixel Tracker",
      type: "Pixel",
      status: "Active",
      lastUpdated: "2023-07-14 09:15",
    },
    {
      id: 3,
      name: "SDK Tracker",
      type: "SDK",
      status: "Inactive",
      lastUpdated: "2023-07-10 16:45",
    },
  ]);

  return (
    <div className={styles.trackingSection}>
      <div className={styles.sectionHeader}>
        <h2>Tracking</h2>
        <button className={styles.createBtn}>
          <FaPlus /> Add Tracker
        </button>
      </div>

      <div className={styles.trackingCards}>
        <div className={styles.trackingCard}>
          <div className={styles.cardHeader}>
            <h3>
              <FaChartLine /> Performance Overview
            </h3>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.metric}>
              <span className={styles.metricLabel}>Total Conversions</span>
              <span className={styles.metricValue}>1,248</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricLabel}>Conversion Rate</span>
              <span className={styles.metricValue}>24.5%</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricLabel}>Total Revenue</span>
              <span className={styles.metricValue}>$12,480</span>
            </div>
          </div>
        </div>

        <div className={styles.trackingCard}>
          <div className={styles.cardHeader}>
            <h3>
              <FaGlobe /> Geographic Distribution
            </h3>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.geoItem}>
              <span>United States</span>
              <span className={styles.percent}>35%</span>
            </div>
            <div className={styles.geoItem}>
              <span>India</span>
              <span className={styles.percent}>28%</span>
            </div>
            <div className={styles.geoItem}>
              <span>Brazil</span>
              <span className={styles.percent}>18%</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.trackingTable}>
          <thead>
            <tr>
              <th>Tracker Name</th>
              <th>Type</th>
              <th>Status</th>
              <th>Last Updated</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {trackingData.map((tracker) => (
              <tr key={tracker.id}>
                <td>{tracker.name}</td>
                <td>{tracker.type}</td>
                <td>
                  <span
                    className={`${styles.status} ${
                      styles[tracker.status.toLowerCase()]
                    }`}
                  >
                    {tracker.status}
                  </span>
                </td>
                <td>{tracker.lastUpdated}</td>
                <td>
                  <div className={styles.actionButtons}>
                    <button className={styles.iconBtn}>
                      <FaEye />
                    </button>
                    <button className={styles.iconBtn}>
                      <FaEdit />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Applications Component
const Applications = () => {
  const [apps] = useState([
    {
      id: 1,
      name: "Game Master",
      platform: "Android",
      installs: "12,450",
      rating: "4.5",
      status: "Active",
    },
    {
      id: 2,
      name: "ShopEasy",
      platform: "iOS",
      installs: "8,760",
      rating: "4.2",
      status: "Active",
    },
    {
      id: 3,
      name: "LearnPro",
      platform: "Web",
      installs: "5,320",
      rating: "4.7",
      status: "Inactive",
    },
  ]);

  return (
    <div className={styles.applicationsSection}>
      <div className={styles.sectionHeader}>
        <h2>
          Applications <span className={styles.badge}>PRO</span>
        </h2>
        <button className={styles.createBtn}>
          <FaPlus /> Add Application
        </button>
      </div>

      <div className={styles.appsGrid}>
        {apps.map((app) => (
          <div className={styles.appCard} key={app.id}>
            <div className={styles.appHeader}>
              <div className={styles.appIcon}>
                <FaMobileAlt />
              </div>
              <div className={styles.appInfo}>
                <h3>{app.name}</h3>
                <span className={styles.platform}>{app.platform}</span>
              </div>
              <span
                className={`${styles.status} ${
                  styles[app.status.toLowerCase()]
                }`}
              >
                {app.status}
              </span>
            </div>
            <div className={styles.appStats}>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Installs</span>
                <span className={styles.statValue}>{app.installs}</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Rating</span>
                <span className={styles.statValue}>{app.rating}</span>
              </div>
            </div>
            <div className={styles.appActions}>
              <button className={styles.btnSecondary}>
                <FaEdit /> Edit
              </button>
              <button className={styles.btnPrimary}>
                <FaChartLine /> Analytics
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Reports Component
const Reports = () => {
  return (
    <div className={styles.reportsSection}>
      <div className={styles.sectionHeader}>
        <h2>Advertiser Reports</h2>
        <div className={styles.reportFilters}>
          <select>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
          </select>
          <button className={styles.exportBtn}>
            <FaDownload /> Export
          </button>
        </div>
      </div>

      <div className={styles.reportCards}>
        <div className={styles.reportCard}>
          <div className={styles.cardHeader}>
            <h3>
              <FaChartBar /> Campaign Performance
            </h3>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.chartPlaceholder}>
              <FaChartArea size={48} />
              <p>Campaign Performance Chart</p>
            </div>
          </div>
        </div>

        <div className={styles.reportCard}>
          <div className={styles.cardHeader}>
            <h3>
              <FaChartPie /> Conversion Sources
            </h3>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.chartPlaceholder}>
              <FaChartPie size={48} />
              <p>Conversion Sources Chart</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.reportsTable}>
          <thead>
            <tr>
              <th>Report Name</th>
              <th>Period</th>
              <th>Format</th>
              <th>Generated</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Weekly Performance Report</td>
              <td>2023-07-01 to 2023-07-07</td>
              <td>PDF</td>
              <td>2023-07-08</td>
              <td>
                <button className={styles.iconBtn}>
                  <FaDownload />
                </button>
              </td>
            </tr>
            <tr>
              <td>Monthly Campaign Summary</td>
              <td>June 2023</td>
              <td>Excel</td>
              <td>2023-07-01</td>
              <td>
                <button className={styles.iconBtn}>
                  <FaDownload />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Referral Program Component
const ReferralProgram = () => {
  const [referrals] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "john@example.com",
      status: "Active",
      earnings: "$50.00",
      date: "2023-07-10",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      status: "Pending",
      earnings: "$0.00",
      date: "2023-07-05",
    },
  ]);

  const copyReferralLink = () => {
    navigator.clipboard.writeText("https://cpidroid.com/?ref=K12345");
    alert("Referral link copied to clipboard!");
  };

  const shareOnFacebook = () => {
    window.open(
      "https://www.facebook.com/sharer/sharer.php?u=https://cpidroid.com/?ref=K12345",
      "_blank"
    );
  };

  const shareOnTwitter = () => {
    window.open(
      "https://twitter.com/intent/tweet?url=https://cpidroid.com/?ref=K12345",
      "_blank"
    );
  };

  const shareOnWhatsApp = () => {
    window.open(
      "https://wa.me/?text=Check%20out%20this%20amazing%20platform:%20https://cpidroid.com/?ref=K12345",
      "_blank"
    );
  };

  const shareLink = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "CPIDroid Referral",
          url: "https://cpidroid.com/?ref=K12345",
        })
        .catch(console.error);
    } else {
      copyReferralLink();
    }
  };

  return (
    <div className={styles.referralSection}>
      <div className={styles.sectionHeader}>
        <h2>
          Referral Program <span className={styles.badge}>NEW</span>
        </h2>
      </div>

      <div className={styles.referralStats}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FaUsers />
          </div>
          <div className={styles.statInfo}>
            <h3>12</h3>
            <p>Referrals</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FaDollarSign />
          </div>
          <div className={styles.statInfo}>
            <h3>$240</h3>
            <p>Total Earnings</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FaChartLine />
          </div>
          <div className={styles.statInfo}>
            <h3>8</h3>
            <p>Active Referrals</p>
          </div>
        </div>
      </div>

      <div className={styles.referralContent}>
        <div className={styles.referralWidget}>
          <h3>Refer & Earn UNLIMITED 🤑</h3>
          <p>Share your referral link with friends to start earning.</p>
          <div className={styles.referralLink} onClick={copyReferralLink}>
            <span>https://cpidroid.com/?ref=K12345</span>
            <FaCopy />
          </div>
          <div className={styles.shareButtons}>
            <span>SHARE</span>
            <button onClick={shareOnFacebook}>
              <FaFacebookF />
            </button>
            <button onClick={shareOnTwitter}>
              <FaTwitter />
            </button>
            <button onClick={shareOnWhatsApp}>
              <FaWhatsapp />
            </button>
            <button onClick={shareLink}>
              <FaShareAlt />
            </button>
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.referralsTable}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Earnings</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {referrals.map((referral) => (
                <tr key={referral.id}>
                  <td>{referral.name}</td>
                  <td>{referral.email}</td>
                  <td>
                    <span
                      className={`${styles.status} ${
                        styles[referral.status.toLowerCase()]
                      }`}
                    >
                      {referral.status}
                    </span>
                  </td>
                  <td>{referral.earnings}</td>
                  <td>{referral.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Main Advertiser Dashboard Component
const Advertiser = () => {
  const [activeTab, setActiveTab] = useState("advertiser");
  const [activeItem, setActiveItem] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Render the appropriate component based on the active item
  const renderActiveComponent = () => {
    switch (activeItem) {
      case "dashboard":
        return <DashboardHome />;
      case "campaigns":
        return <Campaigns />;
      case "tracking":
        return <Tracking />;
      case "applications":
        return <Applications />;
      case "reports":
        return <Reports />;
      case "referral":
        return <ReferralProgram />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className={styles.dashboardLayout}>
      <DashboardHeader toggleSidebar={toggleSidebar} />

      {/* Only one sidebar at a time */}
      <aside className={styles.sidebar}>
        <Sidebar
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </aside>

      <main className={styles.mainContent}>{renderActiveComponent()}</main>

      {/* Right Sidebar - Hidden on mobile */}
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

      {/* Mobile sidebar overlay and content */}
      {isSidebarOpen && (
        <>
          <div className={styles.overlay} onClick={closeSidebar}></div>
          <div className={styles.mobileSidebar}>
            <div className={styles.mobileSidebarHeader}>
              <button className={styles.closeMenu} onClick={closeSidebar}>
                <FaTimes />
              </button>
            </div>
            <div className={styles.mobileSidebarContent}>
              <Sidebar
                activeItem={activeItem}
                setActiveItem={(item) => {
                  setActiveItem(item);
                  closeSidebar(); // Close sidebar when item is selected
                }}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Advertiser;
