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
            activeItem === "manageCampaigns" ? styles.active : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            setActiveItem("manageCampaigns");
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

const Tracking = () => {
  const [trackingLinks, setTrackingLinks] = useState([
    { id: 1, name: 'Summer Campaign', url: 'ziion.com/t/c1', clicks: 1250, conversions: 45, cr: '3.6%' },
    { id: 2, name: 'New App Launch', url: 'ziion.com/t/c2', clicks: 890, conversions: 32, cr: '3.6%' },
    { id: 3, name: 'Holiday Special', url: 'ziion.com/t/c3', clicks: 2100, conversions: 78, cr: '3.7%' },
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newLink, setNewLink] = useState({
    name: '',
    app: '',
    campaign: '',
    destination: '',
    trackingParameters: []
  });

  const handleCreateLink = () => {
    if (!newLink.name || !newLink.destination) {
      alert("Please fill in required fields.");
      return;
    }
    
    const newTrackingLink = {
      id: trackingLinks.length + 1,
      name: newLink.name,
      url: `ziion.com/t/${Date.now()}`,
      clicks: 0,
      conversions: 0,
      cr: '0%'
    };
    
    setTrackingLinks([...trackingLinks, newTrackingLink]);
    setShowCreateForm(false);
    setNewLink({ name: '', app: '', campaign: '', destination: '', trackingParameters: [] });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLink({ ...newLink, [name]: value });
  };

  return (
    <div className={styles.trackingSection}>
      <div className={styles.sectionHeader}>
        <h2>Tracking</h2>
        <button
          className={styles.createBtn}
          onClick={() => setShowCreateForm(!showCreateForm)}
        >
          <FaPlus /> {showCreateForm ? "Cancel" : "Create Tracking Link"}
        </button>
      </div>

      {showCreateForm && (
        <div className={styles.createForm}>
          <h3>Create New Tracking Link</h3>
          <div className={styles.formGroup}>
            <label>Link Name</label>
            <input
              type="text"
              name="name"
              value={newLink.name}
              onChange={handleInputChange}
              placeholder="Enter tracking link name"
            />
          </div>
          <div className={styles.formGroup}>
            <label>Destination URL</label>
            <input
              type="text"
              name="destination"
              value={newLink.destination}
              onChange={handleInputChange}
              placeholder="https://example.com"
            />
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>App</label>
              <select name="app" value={newLink.app} onChange={handleInputChange}>
                <option value="">Select App</option>
                <option value="App 1">App 1</option>
                <option value="App 2">App 2</option>
                <option value="App 3">App 3</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>Campaign</label>
              <select name="campaign" value={newLink.campaign} onChange={handleInputChange}>
                <option value="">Select Campaign</option>
                <option value="Summer Campaign">Summer Campaign</option>
                <option value="New App Launch">New App Launch</option>
                <option value="Holiday Special">Holiday Special</option>
              </select>
            </div>
          </div>
          <div className={styles.formActions}>
            <button
              className={styles.cancelBtn}
              onClick={() => setShowCreateForm(false)}
            >
              Cancel
            </button>
            <button className={styles.saveBtn} onClick={handleCreateLink}>
              Create Link
            </button>
          </div>
        </div>
      )}

      <div className={styles.trackingCards}>
        <div className={styles.trackingCard}>
          <div className={styles.cardHeader}>
            <h3><FaChartLine /> Performance Overview</h3>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.metric}>
              <span className={styles.metricLabel}>Total Links</span>
              <span className={styles.metricValue}>{trackingLinks.length}</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricLabel}>Total Clicks</span>
              <span className={styles.metricValue}>{trackingLinks.reduce((sum, link) => sum + link.clicks, 0)}</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricLabel}>Total Conversions</span>
              <span className={styles.metricValue}>{trackingLinks.reduce((sum, link) => sum + link.conversions, 0)}</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricLabel}>Avg Conversion Rate</span>
              <span className={styles.metricValue}>
                {((trackingLinks.reduce((sum, link) => sum + (parseInt(link.cr) || 0), 0)) / trackingLinks.length || 0).toFixed(2)}%
              </span>
            </div>
          </div>
        </div>

        <div className={styles.trackingCard}>
          <div className={styles.cardHeader}>
            <h3><FaGlobe /> Top Performing Links</h3>
          </div>
          <div className={styles.cardContent}>
            {trackingLinks.slice(0, 3).map(link => (
              <div key={link.id} className={styles.metric}>
                <span className={styles.metricLabel}>{link.name}</span>
                <span className={styles.metricValue}>{link.cr}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.trackingTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Tracking URL</th>
              <th>Clicks</th>
              <th>Conversions</th>
              <th>Conversion Rate</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {trackingLinks.length > 0 ? (
              trackingLinks.map(link => (
                <tr key={link.id}>
                  <td>{link.name}</td>
                  <td>
                    <div className={styles.urlContainer}>
                      <span className={styles.truncatedUrl}>{link.url}</span>
                      <button 
                        className={styles.copyBtn} 
                        onClick={() => navigator.clipboard.writeText(link.url)}
                      >
                        Copy
                      </button>
                    </div>
                  </td>
                  <td>{link.clicks}</td>
                  <td>{link.conversions}</td>
                  <td>{link.cr}</td>
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
                <td colSpan="6" className={styles.noData}>
                  No tracking links found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Applications = () => {
  const [apps, setApps] = useState([
    { id: 1, name: 'Fitness Tracker Pro', platform: 'iOS', category: 'Health & Fitness', status: 'Active', installs: 12500, revenue: '$2,500' },
    { id: 2, name: 'Budget Planner', platform: 'Android', category: 'Finance', status: 'Active', installs: 8900, revenue: '$1,780' },
    { id: 3, name: 'Photo Editor Plus', platform: 'iOS', category: 'Photo & Video', status: 'Paused', installs: 5400, revenue: '$1,080' },
    { id: 4, name: 'Task Manager', platform: 'Android', category: 'Productivity', status: 'Active', installs: 15600, revenue: '$3,120' },
    { id: 5, name: 'Cooking Recipes', platform: 'iOS', category: 'Food & Drink', status: 'Pending', installs: 2300, revenue: '$460' },
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newApp, setNewApp] = useState({
    name: '',
    platform: 'Android',
    category: '',
    description: '',
    packageName: ''
  });

  const handleCreateApp = () => {
    if (!newApp.name || !newApp.packageName) {
      alert("Please fill in required fields.");
      return;
    }
    
    const newAppObj = {
      id: apps.length + 1,
      name: newApp.name,
      platform: newApp.platform,
      category: newApp.category,
      status: 'Pending',
      installs: 0,
      revenue: '$0'
    };
    
    setApps([...apps, newAppObj]);
    setShowCreateForm(false);
    setNewApp({ name: '', platform: 'Android', category: '', description: '', packageName: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewApp({ ...newApp, [name]: value });
  };

  return (
    <div className={styles.applicationsSection}>
      <div className={styles.sectionHeader}>
        <h2>Applications</h2>
        <button
          className={styles.createBtn}
          onClick={() => setShowCreateForm(!showCreateForm)}
        >
          <FaPlus /> {showCreateForm ? "Cancel" : "Add Application"}
        </button>
      </div>

      {showCreateForm && (
        <div className={styles.createForm}>
          <h3>Add New Application</h3>
          <div className={styles.formGroup}>
            <label>App Name</label>
            <input
              type="text"
              name="name"
              value={newApp.name}
              onChange={handleInputChange}
              placeholder="Enter app name"
            />
          </div>
          <div className={styles.formGroup}>
            <label>Package Name (Bundle ID)</label>
            <input
              type="text"
              name="packageName"
              value={newApp.packageName}
              onChange={handleInputChange}
              placeholder="com.example.app"
            />
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Platform</label>
              <select name="platform" value={newApp.platform} onChange={handleInputChange}>
                <option value="Android">Android</option>
                <option value="iOS">iOS</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>Category</label>
              <select name="category" value={newApp.category} onChange={handleInputChange}>
                <option value="">Select Category</option>
                <option value="Health & Fitness">Health & Fitness</option>
                <option value="Finance">Finance</option>
                <option value="Photo & Video">Photo & Video</option>
                <option value="Productivity">Productivity</option>
                <option value="Food & Drink">Food & Drink</option>
                <option value="Games">Games</option>
                <option value="Social">Social</option>
                <option value="Education">Education</option>
              </select>
            </div>
          </div>
          <div className={styles.formGroup}>
            <label>Description</label>
            <textarea
              name="description"
              value={newApp.description}
              onChange={handleInputChange}
              placeholder="Enter app description"
              rows="3"
            />
          </div>
          <div className={styles.formActions}>
            <button
              className={styles.cancelBtn}
              onClick={() => setShowCreateForm(false)}
            >
              Cancel
            </button>
            <button className={styles.saveBtn} onClick={handleCreateApp}>
              Add App
            </button>
          </div>
        </div>
      )}

      <div className={styles.appsGrid}>
        {apps.map(app => (
          <div key={app.id} className={styles.appCard}>
            <div className={styles.appHeader}>
              <div className={styles.appIcon}>
                <FaMobileAlt />
              </div>
              <div className={styles.appInfo}>
                <h3>{app.name}</h3>
                <div className={styles.platform}>{app.platform}</div>
              </div>
            </div>
            
            <div className={styles.appStats}>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Installs</span>
                <span className={styles.statValue}>{app.installs.toLocaleString()}</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Revenue</span>
                <span className={styles.statValue}>{app.revenue}</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Category</span>
                <span className={styles.statValue}>{app.category}</span>
              </div>
            </div>
            
            <div className={styles.appStatus}>
              <span className={`${
                app.status === 'Active' ? styles.statusActive : 
                app.status === 'Paused' ? styles.statusPaused : styles.statusPending
              }`}>
                {app.status}
              </span>
            </div>
            
            <div className={styles.appActions}>
              <button className={styles.btnSecondary}>
                <FaEdit /> Edit
              </button>
              <button className={styles.btnPrimary}>
                <FaChartBar /> Analytics
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Reports = () => {
  const [reportType, setReportType] = useState('overview');
  const [dateRange, setDateRange] = useState('last7days');
  
  // Mock data for reports
  const reportData = {
    overview: {
      totalClicks: 24589,
      totalConversions: 892,
      totalSpent: 4567.89,
      conversionRate: 3.63,
      roi: 189.45
    },
    clicks: [
      { date: '2025-09-18', value: 3200 },
      { date: '2025-09-19', value: 2850 },
      { date: '2025-09-20', value: 3500 },
      { date: '2025-09-21', value: 2980 },
      { date: '2025-09-22', value: 3120 },
      { date: '2025-09-23', value: 2870 },
      { date: '2025-09-24', value: 3050 },
    ],
    conversions: [
      { date: '2025-09-18', value: 112 },
      { date: '2025-09-19', value: 95 },
      { date: '2025-09-20', value: 128 },
      { date: '2025-09-21', value: 105 },
      { date: '2025-09-22', value: 115 },
      { date: '2025-09-23', value: 98 },
      { date: '2025-09-24', value: 139 },
    ]
  };

  return (
    <div className={styles.reportsSection}>
      <div className={styles.sectionHeader}>
        <h2>Advertiser Reports</h2>
        <div className={styles.reportControls}>
          <select 
            value={dateRange} 
            onChange={(e) => setDateRange(e.target.value)}
            className={styles.dateRangeSelector}
          >
            <option value="today">Today</option>
            <option value="last7days">Last 7 Days</option>
            <option value="last30days">Last 30 Days</option>
            <option value="last90days">Last 90 Days</option>
          </select>
        </div>
      </div>

      <div className={styles.reportCards}>
        <div className={styles.reportCard}>
          <div className={styles.cardHeader}>
            <h3><FaChartBar /> Performance Overview</h3>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.metric}>
              <span className={styles.metricLabel}>Total Clicks</span>
              <span className={styles.metricValue}>{reportData.overview.totalClicks.toLocaleString()}</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricLabel}>Total Conversions</span>
              <span className={styles.metricValue}>{reportData.overview.totalConversions.toLocaleString()}</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricLabel}>Total Spent</span>
              <span className={styles.metricValue}>${reportData.overview.totalSpent.toLocaleString()}</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricLabel}>Conversion Rate</span>
              <span className={styles.metricValue}>{reportData.overview.conversionRate}%</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricLabel}>ROI</span>
              <span className={styles.metricValue}>{reportData.overview.roi}%</span>
            </div>
          </div>
        </div>

        <div className={styles.reportCard}>
          <div className={styles.cardHeader}>
            <h3><FaChartLine /> Clicks Trend</h3>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.chartContainer}>
              <div className={styles.chartHeader}>
                <h4>Clicks</h4>
                <div className={styles.chartLegend}>
                  <span className={styles.legendItem}><span className={styles.legendColor} style={{backgroundColor: '#3b82f6'}}></span> Clicks</span>
                </div>
              </div>
              <div className={styles.chart}>
                {reportData.clicks.map((item, index) => (
                  <div key={index} className={styles.chartBar}>
                    <div 
                      className={styles.chartBarFill} 
                      style={{ height: `${(item.value / Math.max(...reportData.clicks.map(c => c.value))) * 100}%` }}
                    ></div>
                    <span className={styles.chartLabel}>{item.date.split('-')[2]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.reportCard}>
          <div className={styles.cardHeader}>
            <h3><FaChartArea /> Conversions Trend</h3>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.chartContainer}>
              <div className={styles.chartHeader}>
                <h4>Conversions</h4>
                <div className={styles.chartLegend}>
                  <span className={styles.legendItem}><span className={styles.legendColor} style={{backgroundColor: '#10b981'}}></span> Conversions</span>
                </div>
              </div>
              <div className={styles.chart}>
                {reportData.conversions.map((item, index) => (
                  <div key={index} className={styles.chartBar}>
                    <div 
                      className={styles.chartBarFill} 
                      style={{ height: `${(item.value / Math.max(...reportData.conversions.map(c => c.value))) * 100}%`, backgroundColor: '#10b981' }}
                    ></div>
                    <span className={styles.chartLabel}>{item.date.split('-')[2]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <div className={styles.tableHeader}>
          <h4>Campaign Performance Overview</h4>
        </div>
        <table className={styles.reportsTable}>
          <thead>
            <tr>
              <th>Campaign</th>
              <th>Clicks</th>
              <th>Conversions</th>
              <th>Spent</th>
              <th>CR</th>
              <th>ROI</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Summer Campaign</td>
              <td>12,500</td>
              <td>420</td>
              <td>$1,250</td>
              <td>3.36%</td>
              <td>168%</td>
              <td><span className={styles.statusActive}>Running</span></td>
            </tr>
            <tr>
              <td>New App Launch</td>
              <td>8,900</td>
              <td>312</td>
              <td>$980</td>
              <td>3.51%</td>
              <td>187%</td>
              <td><span className={styles.statusActive}>Running</span></td>
            </tr>
            <tr>
              <td>Holiday Special</td>
              <td>3,189</td>
              <td>160</td>
              <td>$337.89</td>
              <td>5.02%</td>
              <td>243%</td>
              <td><span className={styles.statusCompleted}>Completed</span></td>
            </tr>
            <tr>
              <td>Black Friday</td>
              <td>0</td>
              <td>0</td>
              <td>$0</td>
              <td>0%</td>
              <td>0%</td>
              <td><span className={styles.statusPaused}>Paused</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ReferralProgram = () => {
  const [copied, setCopied] = useState(false);

  const copyReferralLink = () => {
    navigator.clipboard
      .writeText("https://Ziion.com/?ref=A12345")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
  };

  const commissionTiers = [
    { tier: 'Tier 1', refs: '1-5 advertisers', commission: '5%' },
    { tier: 'Tier 2', refs: '6-15 advertisers', commission: '7%' },
    { tier: 'Tier 3', refs: '16-30 advertisers', commission: '10%' },
    { tier: 'Tier 4', refs: '30+ advertisers', commission: '12%' },
  ];

  const myReferrals = [
    { id: 1, name: 'Marketing Pro LLC', status: 'Active', spent: '$2,450.00', earned: '$122.50' },
    { id: 2, name: 'Growth Hackers Inc', status: 'Active', spent: '$1,780.50', earned: '$89.03' },
    { id: 3, name: 'Ad Agency Co', status: 'Pending', spent: '$0.00', earned: '$0.00' },
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
            <p className={styles.statValue}>12</p>
          </div>
          <div className={styles.statCard}>
            <h4>Active Referrals</h4>
            <p className={styles.statValue}>8</p>
          </div>
          <div className={styles.statCard}>
            <h4>Total Earned</h4>
            <p className={styles.statValue}>$587.25</p>
          </div>
          <div className={styles.statCard}>
            <h4>This Month</h4>
            <p className={styles.statValue}>$145.75</p>
          </div>
        </div>
      </div>

      <div className={styles.referralWidget}>
        <h3>Share Your Referral Link</h3>
        <p>Invite new advertisers and earn commission on their ad spend!</p>
        <div className={styles.referralLink} onClick={copyReferralLink}>
          <span>https://Ziion.com/?ref=A12345</span>
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
              <p className={styles.refs}>{tier.refs}</p>
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
                <th>Company</th>
                <th>Status</th>
                <th>Amount Spent</th>
                <th>Commission Earned</th>
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
                  <td>{referral.spent}</td>
                  <td className={styles.amountPositive}>{referral.earned}</td>
                  <td>2025-09-12</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.referralBenefits}>
        <h3>How It Works</h3>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>1</div>
            <h4>Share Your Link</h4>
            <p>Send your unique referral link to potential advertisers</p>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>2</div>
            <h4>They Sign Up</h4>
            <p>When they sign up using your link, they're tagged as your referral</p>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>3</div>
            <h4>Earn Commission</h4>
            <p>Earn a percentage of what they spend on advertising</p>
          </div>
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
      case "manageCampaigns":
        return <Campaigns />;
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

export default Advertiser;