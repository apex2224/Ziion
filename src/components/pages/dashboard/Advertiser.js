import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Advertiser.module.css";
import ASObooster from "./ASObooster";
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
  FaCalendarAlt,
  FaGlobe,
  FaMobileAlt,
  FaChartLine,
  FaChartPie,
  FaChartArea,
  FaUsers,
  FaDollarSign,
  FaCopy,
  FaCheck,
  FaBars,
  FaTimes,
  FaFlag,
} from "react-icons/fa";

// --- Reusable Components (could be moved to separate files) ---

const StatCard = ({ title, value, icon, color, onClick }) => (
  <div className={styles.statCard} onClick={onClick}>
    <div>
      <p>{title}</p>
      <h3>{value}</h3>
    </div>
    {icon && (
      <div className={`${styles.statIcon} ${styles[color]}`}>{icon}</div>
    )}
  </div>
);

// --- Dashboard Sub-components ---

const DashboardHeader = ({ onMenuToggle }) => (
  <header className={styles.header}>
    <button className={styles.menuToggle} onClick={onMenuToggle}>
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

const DashboardSelector = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.dashboardSelector}>
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
      <div className={styles.dashboardTabs}>
        <button
          className={`${styles.dashboardTab}`}
          onClick={() => navigate("/publisher")}
        >
          Publisher
        </button>
        <button
          className={`${styles.dashboardTab} ${styles.activeTab}`}
          disabled
        >
          Advertiser
        </button>
      </div>
    </div>
  );
};

const Sidebar = ({
  activeItem,
  setActiveItem,
  activeTab,
  setActiveTab,
  onMenuToggle,
}) => {
  const navigate = useNavigate();

  return (
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
        <FaClipboardList /> Reports
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
          className={styles.navItem}
          onClick={(e) => {
            e.preventDefault();
            navigate("/aso-booster");
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
  )
};

const DashboardHome = () => {
  const sampleCampaigns = [];

  return (
    <>
      <section className={styles.statsGrid}>
        <StatCard
          title="RUNNING"
          value={sampleCampaigns.filter((c) => c.status === "Running").length}
        />
        <StatCard
          title="PAUSED"
          value={sampleCampaigns.filter((c) => c.status === "Paused").length}
        />
        <StatCard
          title="COMPLETED"
          value={sampleCampaigns.filter((c) => c.status === "Completed").length}
        />
        <StatCard title="TOTAL CAMPAIGNS" value={sampleCampaigns.length} />
      </section>

      <section className={styles.campaignsTable}>
        <div className={styles.tableHeader}>
          <h4>Active Campaigns</h4>
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
                    <td>
                      <span
                        className={`${styles.status} ${
                          styles[campaign.status.toLowerCase()]
                        }`}
                      >
                        {campaign.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" className={styles.noData}>
                    No active campaigns.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className={styles.tableFooter}>
          <span>
            Showing {sampleCampaigns.length} of {sampleCampaigns.length} entries
          </span>
        </div>
      </section>
    </>
  );
};

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newCampaign, setNewCampaign] = useState({
    name: "",
    platform: "Android",
    type: "CPI",
    budget: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const handleCreateCampaign = () => {
    if (!newCampaign.name || !newCampaign.budget) {
      alert("Please fill in all fields.");
      return;
    }
    const newId =
      campaigns.length > 0 ? Math.max(...campaigns.map((c) => c.id)) + 1 : 1;
    setCampaigns([
      ...campaigns,
      {
        ...newCampaign,
        id: newId,
        spent: "$0",
        status: "Running",
        startDate: new Date().toISOString().slice(0, 10),
        endDate: "N/A",
      },
    ]);
    setShowCreateForm(false);
    setNewCampaign({ name: "", platform: "Android", type: "CPI", budget: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCampaign((prev) => ({ ...prev, [name]: value }));
  };

  const filteredCampaigns = campaigns
    .filter((c) => statusFilter === "All Status" || c.status === statusFilter)
    .filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className={styles.campaignsSection}>
      <div className={styles.sectionHeader}>
        <h2>Campaigns</h2>
        <button
          className={styles.createBtn}
          onClick={() => setShowCreateForm(!showCreateForm)}
        >
          <FaPlus /> {showCreateForm ? "Cancel" : "Create Campaign"}
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
                <option>Android</option>
                <option>iOS</option>
                <option>Web</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>Type</label>
              <select
                name="type"
                value={newCampaign.type}
                onChange={handleInputChange}
              >
                <option>CPI</option>
                <option>CPC</option>
                <option>CPA</option>
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
          <FaSearch />
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className={styles.filterGroup}>
          <FaFilter />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All Status</option>
            <option>Running</option>
            <option>Paused</option>
            <option>Completed</option>
          </select>
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
            {filteredCampaigns.length > 0 ? (
              filteredCampaigns.map((campaign) => (
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
              ))
            ) : (
              <tr>
                <td colSpan="8" className={styles.noData}>
                  No campaigns found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Tracking = () => (
  <div className={styles.trackingSection}>
    <div className={styles.sectionHeader}>
      <h2>Tracking</h2>
    </div>
    <p>Tracking functionality is not yet implemented.</p>
  </div>
);

const Applications = () => (
  <div className={styles.applicationsSection}>
    <div className={styles.sectionHeader}>
      <h2>Applications</h2>
    </div>
    <p>Applications functionality is not yet implemented.</p>
  </div>
);

const Reports = () => (
  <div className={styles.reportsSection}>
    <div className={styles.sectionHeader}>
      <h2>Advertiser Reports</h2>
    </div>
    <p>Reports functionality is not yet implemented.</p>
  </div>
);

const ReferralProgram = () => {
  const [copied, setCopied] = useState(false);

  const copyReferralLink = () => {
    navigator.clipboard
      .writeText("https://cpidroid.com/?ref=K12345")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
  };

  return (
    <div className={styles.referralSection}>
      <div className={styles.sectionHeader}>
        <h2>
          Referral Program <span className={styles.badge}>NEW</span>
        </h2>
      </div>
      <div className={`${styles.widget} ${styles.referWidget}`}>
        <h4>Refer & Earn UNLIMITED 🤑</h4>
        <p>Share your referral link with friends to start earning.</p>
        <div className={styles.referralLink} onClick={copyReferralLink}>
          <span>https://cpidroid.com/?ref=K12345</span>
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
    </div>
  );
};

// --- Main Advertiser Component ---

const Advertiser = () => {
  const [activeTab, setActiveTab] = useState("advertiser");
  const [activeItem, setActiveItem] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
            <div className={styles.serviceItem}>
              <h5>Understanding various Campaign Types</h5>
              <p>(Overview)</p>
              <a href="#" className={styles.moreInfo}>
                More Info <FaAngleDown />
              </a>
            </div>
            <div className={styles.serviceItem}>
              <h5>What is Fraud and How to Reduce It?</h5>
              <p>(Best Practices)</p>
              <a href="#" className={styles.moreInfo}>
                More Info <FaAngleDown />
              </a>
            </div>
            <div className={styles.serviceItem}>
              <h5>What is ASO Booster?</h5>
              <p>(Automated App Store Optimization)</p>
              <a href="#" className={styles.moreInfo}>
                More Info <FaAngleDown />
              </a>
            </div>
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
        </aside>
      </div>
    </>
  );
};

export default Advertiser;