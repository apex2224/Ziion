import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PublisherProfile from "./PublisherProfile";
import ASObooster from "./ASObooster";
import LetsChat from "./LetsChat";
import Offers from "./Offers";
import PublisherReport from "./PublisherReport";
import AddPlacement from "./AddPlacement";
import ManagePlacements from "./ManagePlacements";
import PublisherBilling from "./PublisherBilling";
import styles from "./Publisher.module.css";
import {
  FaUserCircle,
  FaBell,
  FaCog,
  FaChartBar,
  FaFileAlt,
  FaTasks,
  FaClipboardList,
  FaRocket,
  FaLink,
  FaGift,
  FaAngleDown,
  FaSearch,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaShareAlt,
  FaExclamationTriangle,
  FaCheck,
  FaSpinner,
  FaDollarSign,
  FaFlag,
  FaPlus,
  FaQuestionCircle,
  FaComments,
  FaTicketAlt,
  FaExclamationCircle,
  FaBars,
  FaTimes,
  FaArrowLeft,
  FaFilter,
  FaEdit,
  FaEye,
  FaTrash,
  FaCopy,
} from "react-icons/fa";

const DashboardHeader = ({ onMenuToggle }) => (
  <header className={styles.header}>
    <button className={styles.menuToggle} onClick={onMenuToggle}>
      <FaBars />
    </button>
    <div className={styles.logo}>Ziion</div>
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
      <FaUserCircle className={styles.headerIcon} />
    </div>
  </header>
);

const DashboardSelector = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

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
          onClick={() => {}}
        >
          Publisher
        </button>
        <button
          className={`${styles.dashboardTab} ${
            activeTab === "advertiser" ? styles.activeTab : ""
          }`}
          onClick={() => navigate("/advertiser")}
        >
          Advertiser
        </button>
      </div>
    </div>
  );
};

const Sidebar = ({
  activeTab,
  setActiveTab,
  activeItem,
  setActiveItem,
  onMenuToggle,
}) => (
  <>
    <div className={styles.sidebarHeader}>
      <button className={styles.menuToggle} onClick={onMenuToggle}>
        <FaTimes />
      </button>
    </div>
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
        <span className={styles.navItemBadge}>Publisher</span>
      </a>
      <a
        href="#"
        className={`${styles.navItem} ${
          activeItem === "offers" ? styles.active : ""
        }`}
        onClick={(e) => {
          e.preventDefault();
          setActiveItem("offers");
        }}
      >
        <FaFileAlt /> Offers
        <span className={styles.badge}>New</span>
      </a>
      <div className={styles.navGroup}>
        <p className={styles.navHeader}>Apps / Placements / PUBLISH</p>
        <a
          href="#"
          className={`${styles.navItem} ${
            activeItem === "addPlacement" ? styles.active : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            setActiveItem("addPlacement");
          }}
        >
          <FaPlus /> Add Placement
        </a>
        <a
          href="#"
          className={`${styles.navItem} ${
            activeItem === "managePlacements" ? styles.active : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            setActiveItem("managePlacements");
          }}
        >
          <FaTasks /> Manage Placements
        </a>
      </div>
      <a
        href="#"
        className={`${styles.navItem} ${
          activeItem === "billing" ? styles.active : ""
        }`}
        onClick={(e) => {
          e.preventDefault();
          setActiveItem("billing");
        }}
      >
        <FaDollarSign /> Publisher Billing
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
        <FaClipboardList /> Publisher Report
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
        <a
          href="/aso-booster"
          className={`${styles.navItem} ${
            activeItem === "asoBooster" ? styles.active : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/aso-booster";
          }}
        >
          <FaRocket /> ASO Booster <span className={styles.badge}>NEW</span>
        </a>
      </div>
    </nav>
    <div className={styles.sidebarFooter}>
      <a href="#">Referral Program</a>
      <FaCog />
    </div>
  </>
);

const DashboardHome = ({ setShowPublisherProfile, openChat }) => {
  const StatCard = ({ title, value, icon, color }) => (
    <div className={styles.statCard}>
      <div>
        <p>{title}</p>
        <h3>{value}</h3>
        <a href="#">
          {title} <FaAngleDown size={12} />
        </a>
      </div>
      <div className={`${styles.statIcon} ${styles[color]}`}>{icon}</div>
    </div>
  );

  return (
    <>
      <section className={styles.statsGrid}>
        <StatCard
          title="APPROVED OFFERS"
          value="0"
          icon={<FaFlag />}
          color="blue"
        />
        <StatCard
          title="PENDING APPROVAL"
          value="0"
          icon={<FaSpinner />}
          color="blue"
        />
        <StatCard
          title="TOTAL CONVERSIONS"
          value="0"
          icon={<FaCheck />}
          color="blue"
        />
        <StatCard
          title="TOTAL EARNINGS"
          value="$0.00"
          icon={<FaDollarSign />}
          color="blue"
        />
      </section>

      <section className={styles.alertSection}>
        <div className={styles.alert}>
          <FaExclamationTriangle className={styles.alertIcon} />
          <div>
            <p className={styles.alertText}>
              Kindly check & fix following errors:
            </p>
            <ul>
              <li>
                You don't have a publisher profile. -{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPublisherProfile(true);
                  }}
                >
                  Apply for Publisher Profile
                </a>
              </li>
            </ul>
            <div className={styles.alertActions}>
              <div className={styles.needHelp}>
                <FaQuestionCircle /> Need help?
              </div>
              <button className={styles.chatBtn} onClick={openChat}>
                <FaComments /> Chat with Support
              </button>
              <button className={styles.ticketBtn} onClick={openChat}>
                <FaTicketAlt /> Create Support Ticket
              </button>
            </div>
          </div>
        </div>
        <div className={styles.warning}>
          <FaExclamationCircle className={styles.warningIcon} />
          <p>
            IMPORTANT Going forward, publishers will have to mandatorily ensure
            these <a href="#">Guidelines to Reduce Fraud Rate.</a>
          </p>
        </div>
      </section>

      <section className={styles.tablesSection}>
        <div className={styles.tableBlock}>
          <h4>Recent Conversion(s)</h4>
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
          <div className={styles.tableWrapper}>
            <table>
              <thead>
                <tr>
                  <th>PLATFORM</th>
                  <th>OFFER</th>
                  <th>COUNTRY</th>
                  <th>CITY</th>
                  <th>PAYOUT (USD)</th>
                  <th>CREATED</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="6" className={styles.noData}>
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
        </div>
      </section>
    </>
  );
};

// The Offers and PublisherReport components are now imported from separate files
// and will be used in the renderActiveComponent function

const ReferralProgram = () => {
  const [copied, setCopied] = useState(false);

  const copyReferralLink = () => {
    navigator.clipboard
      .writeText("https://Ziion.com/?ref=K12345")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
  };

  const commissionTiers = [
    { tier: 'Tier 1', refs: '1-10', commission: '10%' },
    { tier: 'Tier 2', refs: '11-50', commission: '15%' },
    { tier: 'Tier 3', refs: '51-100', commission: '20%' },
    { tier: 'Tier 4', refs: '100+', commission: '25%' },
  ];

  const myReferrals = [
    { id: 1, name: 'John Doe', status: 'Active', earned: '$23.50' },
    { id: 2, name: 'Jane Smith', status: 'Active', earned: '$18.75' },
    { id: 3, name: 'Bob Johnson', status: 'Pending', earned: '$0.00' },
  ];

  return (
    <div className={styles.referralSection}>
      <div className={styles.sectionHeader}>
        <h2>
          Referral Program <span className={styles.badge}>NEW</span>
        </h2>
      </div>

      <div className={styles.referralOverview}>
        <div className={styles.referralStats}>
          <div className={styles.statCard}>
            <h4>Total Referrals</h4>
            <p className={styles.statValue}>24</p>
          </div>
          <div className={styles.statCard}>
            <h4>Active Referrals</h4>
            <p className={styles.statValue}>18</p>
          </div>
          <div className={styles.statCard}>
            <h4>Total Earned</h4>
            <p className={styles.statValue}>$425.50</p>
          </div>
          <div className={styles.statCard}>
            <h4>This Month</h4>
            <p className={styles.statValue}>$78.25</p>
          </div>
        </div>
      </div>

      <div className={styles.referralWidget}>
        <h3>Share Your Referral Link</h3>
        <p>Invite new publishers and earn up to 25% commission!</p>
        <div className={styles.referralLink} onClick={copyReferralLink}>
          <span>https://Ziion.com/?ref=K12345</span>
          {copied ? <FaCheck color="green" /> : <FaCopy />}
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

      <div className={styles.commissionTiers}>
        <h3>Commission Tiers</h3>
        <div className={styles.tiersGrid}>
          {commissionTiers.map((tier, index) => (
            <div key={index} className={styles.tierCard}>
              <h4>{tier.tier}</h4>
              <p className={styles.refs}>{tier.refs} referrals</p>
              <p className={styles.commission}>{tier.commission} commission</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.myReferrals}>
        <h3>My Referrals</h3>
        <div className={styles.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Amount Earned</th>
                <th>Joined</th>
              </tr>
            </thead>
            <tbody>
              {myReferrals.map(referral => (
                <tr key={referral.id}>
                  <td>{referral.name}</td>
                  <td>
                    <span className={`${styles.status} ${styles[referral.status.toLowerCase()]}`}>
                      {referral.status}
                    </span>
                  </td>
                  <td>{referral.earned}</td>
                  <td>2025-09-15</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Main Publisher Dashboard Component
const Publisher = () => {
  const [activeTab, setActiveTab] = useState("publisher");
  const [activeItem, setActiveItem] = useState("dashboard");
  const [showPublisherProfile, setShowPublisherProfile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openChat = () => {
    navigate("/lets-chat");
  };

  const renderActiveComponent = () => {
    switch (activeItem) {
      case "dashboard":
        return (
          <DashboardHome setShowPublisherProfile={setShowPublisherProfile} openChat={openChat} />
        );
      case "offers":
        return <Offers />;
      case "addPlacement":
        return <AddPlacement />;
      case "managePlacements":
        return <ManagePlacements />;
      case "billing":
        return <PublisherBilling />;
      case "reports":
        return <PublisherReport />;
      case "referral":
        return <ReferralProgram />;
      case "asoBooster":
        return <ASObooster />;
      default:
        return (
          <DashboardHome setShowPublisherProfile={setShowPublisherProfile} openChat={openChat} />
        );
    }
  };

  if (showPublisherProfile) {
    return (
      <div className={styles.publisherProfileLayout}>
        <div className={styles.backButtonContainer}>
          <button
            className={styles.backButton}
            onClick={() => setShowPublisherProfile(false)}
          >
            <FaArrowLeft /> Back to Dashboard
          </button>
        </div>
        <PublisherProfile />
      </div>
    );
  }

  return (
    <>
      <div
        className={`${styles.overlay} ${isSidebarOpen ? styles.show : ""}`}
        onClick={toggleSidebar}
      ></div>
      <div className={styles.dashboardLayout}>
        <DashboardHeader onMenuToggle={toggleSidebar} />

        <aside
          className={`${styles.sidebar} ${
            isSidebarOpen ? styles.mobileOpen : ""
          }`}
        >
          <Sidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            onMenuToggle={toggleSidebar}
          />
        </aside>

        <main className={styles.mainContent}>{renderActiveComponent()}</main>

        <aside className={styles.rightSidebar}>
          <div className={styles.widget}>
            <h4>Useful Resources</h4>
            <a href="#">Understanding various Campaign Types (Overview)</a>
          </div>

          <div className={`${styles.widget} ${styles.referWidget}`}>
            <h4>Refer & Earn UNLIMITED 🤑</h4>
            <p>Share your referral link with friends to start earning.</p>
            <div className={styles.referralLink}>
              <span>https://Ziion.com/?ref=13084</span>
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
                <FaFlag />
              </div>
              <div>
                <p>FREE</p>
                <a href="#">Manage Membership</a>
              </div>
            </div>
          </div>
          <p className={styles.copyright}>© Ziion. 2025 SmartKaaS LLP.</p>
        </aside>
      </div>
    </>
  );
};

export default Publisher;
