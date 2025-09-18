import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PublisherProfile from "./PublisherProfile";
import ASObooster from "./ASObooster";
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
  FaBookOpen,
  FaDownload,
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

// Sub-component for the dashboard selection (reused)
const DashboardSelector = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const handlePublisherClick = () => {
    // Already on publisher page, no need to navigate
  };

  const handleAdvertiserClick = () => {
    navigate("/advertiser");
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
const Sidebar = ({ activeTab, setActiveTab, activeItem, setActiveItem }) => (
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
            window.location.href = '/aso-booster';
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
  </aside>
);

// Dashboard Home Component
const DashboardHome = ({ setShowPublisherProfile }) => {
  // Sub-component for the stat cards
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
      {/* Top Stats Section */}
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

      {/* Alert and Warning Sections */}
      <section className={styles.alertSection}>
        <div className={styles.alert}>
          <FaExclamationTriangle className={styles.alertIcon} />
          <p className={styles.alertText}>
            Kindly check & fix following errors:
          </p>
          <ul>
            <li>
              You don't have a publisher profile. -{" "}
              <a href="#" onClick={(e) => {
                e.preventDefault();
                setShowPublisherProfile(true);
              }}>
                Apply for Publisher Profile
              </a>
            </li>
          </ul>
          <div className={styles.alertActions}>
            <div className={styles.needHelp}>
              <FaQuestionCircle /> Need help?
            </div>
            <button className={styles.chatBtn}>
              <FaComments /> Chat with Support
            </button>
            <button className={styles.ticketBtn}>
              <FaTicketAlt /> Create Support Ticket
            </button>
          </div>
        </div>
        <div className={styles.warning}>
          <FaExclamationCircle className={styles.warningIcon} />
          <p>
            IMPORTANT Going forward, publishers will have to mandatorily
            ensure these <a href="#">Guidelines to Reduce Fraud Rate.</a>
          </p>
        </div>
      </section>

      {/* Performance and Conversion Tables */}
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
        <div className={styles.tableBlock}>
          <h4>Recent Click(s)</h4>
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
        <div className={styles.tableBlock}>
          <h4>Todays Performance</h4>
          <button className={styles.createPlacementBtn}>
            <FaPlus /> Create New Placement
          </button>
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
                  <th>#</th>
                  <th>APP / PLACEMENT / PUBLISHER</th>
                  <th>TYPE</th>
                  <th>CONVERSIONS / CLICKS (TODAY)</th>
                  <th>CONVERSION RATE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="5" className={styles.noData}>
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

// Offers Component
const Offers = () => (
  <div className={styles.offersSection}>
    <div className={styles.sectionHeader}>
      <h2>Offers</h2>
    </div>
    <div className={styles.offersContent}>
      <p>Manage your offers and campaigns here.</p>
    </div>
  </div>
);

// Add Placement Component
const AddPlacement = () => (
  <div className={styles.addPlacementSection}>
    <div className={styles.sectionHeader}>
      <h2>Add New Placement</h2>
    </div>
    <div className={styles.addPlacementContent}>
      <p>Add a new placement for your apps.</p>
    </div>
  </div>
);

// Manage Placements Component
const ManagePlacements = () => (
  <div className={styles.managePlacementsSection}>
    <div className={styles.sectionHeader}>
      <h2>Manage Placements</h2>
    </div>
    <div className={styles.managePlacementsContent}>
      <p>View and manage your existing placements.</p>
    </div>
  </div>
);

// Publisher Billing Component
const PublisherBilling = () => (
  <div className={styles.billingSection}>
    <div className={styles.sectionHeader}>
      <h2>Publisher Billing</h2>
    </div>
    <div className={styles.billingContent}>
      <p>View your billing information and payment history.</p>
    </div>
  </div>
);

// Publisher Report Component
const PublisherReport = () => (
  <div className={styles.reportSection}>
    <div className={styles.sectionHeader}>
      <h2>Publisher Report</h2>
    </div>
    <div className={styles.reportContent}>
      <p>View detailed reports of your performance.</p>
    </div>
  </div>
);

// Referral Program Component
const ReferralProgram = () => (
  <div className={styles.referralSection}>
    <div className={styles.sectionHeader}>
      <h2>Referral Program</h2>
    </div>
    <div className={styles.referralContent}>
      <p>Refer friends and earn rewards.</p>
    </div>
  </div>
);

// Main Publisher Dashboard Component
const Publisher = () => {
  const [activeTab, setActiveTab] = useState("publisher");
  const [activeItem, setActiveItem] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showPublisherProfile, setShowPublisherProfile] = useState(false);

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
        return <DashboardHome setShowPublisherProfile={setShowPublisherProfile} />;
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
        return <DashboardHome setShowPublisherProfile={setShowPublisherProfile} />;
    }
  };

  // Show PublisherProfile page if state is set to true
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
    <div className={styles.dashboardLayout}>
      <DashboardHeader toggleSidebar={toggleSidebar} />

      {/* Desktop sidebar */}
      <aside className={styles.sidebar}>
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      </aside>

      <main className={styles.mainContent}>{renderActiveComponent()}</main>

      {/* Right Sidebar */}
      <aside className={styles.rightSidebar}>
        <div className={styles.widget}>
          <h4>Useful Resources</h4>
          <a href="#">Understanding various Campaign Types (Overview)</a>
        </div>

        <div className={`${styles.widget} ${styles.referWidget}`}>
          <h4>Refer & Earn UNLIMITED 🤑</h4>
          <p>Share your referral link with friends to start earning.</p>
          <div className={styles.referralLink}>
            <span>https://cpidroid.com/?ref=13084</span>
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
        <p className={styles.copyright}>© CPIDroid. 2025 SmartKaaS LLP.</p>

        {/* Mobile sidebar overlay and content */}
        {isSidebarOpen && (
          <>
            <div
              className={styles.overlay}
              onClick={closeSidebar}
              style={{
                background: "rgba(0, 0, 0, 0.5)",
                zIndex: 999,
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            ></div>
            <div
              className={`${styles.mobileSidebar} ${styles.open}`}
              style={{
                background: "white",
                zIndex: 1000,
                position: "fixed",
                left: 0,
                top: 0,
                bottom: 0,
                width: "240px",
                overflowY: "auto",
              }}
            >
              <div className={styles.mobileSidebarHeader}>
                <button className={styles.closeMenu} onClick={closeSidebar}>
                  <FaTimes />
                </button>
              </div>
              <div
                className={styles.mobileSidebarContent}
                style={{
                  background: "white",
                  height: "calc(100% - 60px)",
                  overflowY: "auto",
                }}
              >
                <Sidebar
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  activeItem={activeItem}
                  setActiveItem={(item) => {
                    setActiveItem(item);
                    closeSidebar(); // Close sidebar when item is selected
                  }}
                />
              </div>
            </div>
          </>
        )}
      </aside>
    </div>
  );
};

export default Publisher;
