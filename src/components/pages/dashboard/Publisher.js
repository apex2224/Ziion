import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PublisherProfile from "./PublisherProfile";
import ASObooster from "./ASObooster";
import LetsChat from "./LetsChat";
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

const AddPlacement = () => {
  const [placementData, setPlacementData] = useState({
    name: '',
    platform: 'Android',
    app: '',
    placementType: 'Banner',
    dimensions: '',
    position: 'Top',
    status: 'Active',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlacementData({ ...placementData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to backend
    alert('Placement created successfully!');
    setPlacementData({
      name: '',
      platform: 'Android',
      app: '',
      placementType: 'Banner',
      dimensions: '',
      position: 'Top',
      status: 'Active',
      description: ''
    });
  };

  return (
    <div className={styles.addPlacementSection}>
      <div className={styles.sectionHeader}>
        <h2>Add New Placement</h2>
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.placementForm}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Placement Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={placementData.name}
                onChange={handleInputChange}
                placeholder="Enter placement name"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="platform">Platform *</label>
              <select
                id="platform"
                name="platform"
                value={placementData.platform}
                onChange={handleInputChange}
                required
              >
                <option value="Android">Android</option>
                <option value="iOS">iOS</option>
                <option value="Web">Web</option>
              </select>
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="app">App *</label>
              <select
                id="app"
                name="app"
                value={placementData.app}
                onChange={handleInputChange}
                required
              >
                <option value="">Select App</option>
                <option value="App 1">App 1</option>
                <option value="App 2">App 2</option>
                <option value="App 3">App 3</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="placementType">Placement Type *</label>
              <select
                id="placementType"
                name="placementType"
                value={placementData.placementType}
                onChange={handleInputChange}
                required
              >
                <option value="Banner">Banner</option>
                <option value="Interstitial">Interstitial</option>
                <option value="Native">Native</option>
                <option value="Video">Video</option>
                <option value="Rewarded">Rewarded</option>
              </select>
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="dimensions">Dimensions</label>
              <input
                type="text"
                id="dimensions"
                name="dimensions"
                value={placementData.dimensions}
                onChange={handleInputChange}
                placeholder="e.g., 320x50"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="position">Position</label>
              <select
                id="position"
                name="position"
                value={placementData.position}
                onChange={handleInputChange}
              >
                <option value="Top">Top</option>
                <option value="Bottom">Bottom</option>
                <option value="Center">Center</option>
                <option value="Interstitial">Interstitial</option>
              </select>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={placementData.description}
              onChange={handleInputChange}
              placeholder="Describe the placement"
              rows="3"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={placementData.status}
              onChange={handleInputChange}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Paused">Paused</option>
            </select>
          </div>

          <div className={styles.formActions}>
            <button type="submit" className={styles.createBtn}>
              <FaPlus /> Create Placement
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ManagePlacements = () => {
  const [placements, setPlacements] = useState([
    { id: 1, name: 'Homepage Banner', platform: 'Android', app: 'App 1', type: 'Banner', status: 'Active', impressions: 12500, ctr: '2.3%', revenue: '$234.50' },
    { id: 2, name: 'Video Ad Unit', platform: 'iOS', app: 'App 2', type: 'Video', status: 'Active', impressions: 8900, ctr: '1.8%', revenue: '$187.20' },
    { id: 3, name: 'Interstitial', platform: 'Android', app: 'App 3', type: 'Interstitial', status: 'Paused', impressions: 5400, ctr: '3.1%', revenue: '$95.30' },
    { id: 4, name: 'Rewarded Video', platform: 'Android', app: 'App 1', type: 'Rewarded', status: 'Active', impressions: 15600, ctr: '4.2%', revenue: '$320.75' },
    { id: 5, name: 'Native Ad', platform: 'iOS', app: 'App 2', type: 'Native', status: 'Active', impressions: 7200, ctr: '1.9%', revenue: '$145.60' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredPlacements = placements.filter(placement => {
    const matchesSearch = placement.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          placement.app.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || placement.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const toggleStatus = (id) => {
    setPlacements(prev => prev.map(placement => 
      placement.id === id 
        ? { ...placement, status: placement.status === 'Active' ? 'Paused' : 'Active' } 
        : placement
    ));
  };

  return (
    <div className={styles.managePlacementsSection}>
      <div className={styles.sectionHeader}>
        <h2>Manage Placements</h2>
      </div>

      <div className={styles.tableControls}>
        <div className={styles.filterGroup}>
          <FaSearch />
          <input
            type="text"
            placeholder="Search placements..."
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
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Paused">Paused</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.placementsTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Platform</th>
              <th>App</th>
              <th>Type</th>
              <th>Status</th>
              <th>Impressions</th>
              <th>CTR</th>
              <th>Revenue</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlacements.length > 0 ? (
              filteredPlacements.map(placement => (
                <tr key={placement.id}>
                  <td>{placement.id}</td>
                  <td>{placement.name}</td>
                  <td>{placement.platform}</td>
                  <td>{placement.app}</td>
                  <td>{placement.type}</td>
                  <td>
                    <span 
                      className={`${styles.status} ${styles[placement.status.toLowerCase()]}`}
                      onClick={() => toggleStatus(placement.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      {placement.status}
                    </span>
                  </td>
                  <td>{placement.impressions.toLocaleString()}</td>
                  <td>{placement.ctr}</td>
                  <td>{placement.revenue}</td>
                  <td>
                    <div className={styles.actionButtons}>
                      <button className={styles.iconBtn}>
                        <FaEdit />
                      </button>
                      <button className={styles.iconBtn}>
                        <FaEye />
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
                <td colSpan="10" className={styles.noData}>
                  No placements found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className={styles.tableFooter}>
        <span>
          Showing {filteredPlacements.length} of {placements.length} placements
        </span>
      </div>
    </div>
  );
};

const PublisherBilling = () => {
  const [paymentMethod, setPaymentMethod] = useState('paypal');
  const [paymentDetails, setPaymentDetails] = useState({
    paypal: 'publisher@example.com',
    bank: '****1234 - Bank of America'
  });

  const transactions = [
    { id: 1, date: '2025-09-01', description: 'Monthly earnings', amount: '$1,234.50', status: 'Completed' },
    { id: 2, date: '2025-08-01', description: 'Monthly earnings', amount: '$987.25', status: 'Completed' },
    { id: 3, date: '2025-07-01', description: 'Monthly earnings', amount: '$1,450.00', status: 'Completed' },
    { id: 4, date: '2025-06-01', description: 'Monthly earnings', amount: '$875.75', status: 'Completed' },
  ];

  const currentBalance = 1234.50;
  const pendingAmount = 456.75;
  const lifetimeEarnings = 8750.25;

  return (
    <div className={styles.billingSection}>
      <div className={styles.sectionHeader}>
        <h2>Publisher Billing</h2>
      </div>

      <div className={styles.billingSummary}>
        <div className={styles.balanceCard}>
          <h3>Current Balance</h3>
          <p className={styles.balanceAmount}>${currentBalance.toFixed(2)}</p>
          <button className={styles.requestPayoutBtn}>Request Payout</button>
        </div>
        
        <div className={styles.balanceCard}>
          <h3>Pending Amount</h3>
          <p className={styles.balanceAmount}>${pendingAmount.toFixed(2)}</p>
          <p className={styles.balanceDesc}>Will be available on Oct 1, 2025</p>
        </div>
        
        <div className={styles.balanceCard}>
          <h3>Lifetime Earnings</h3>
          <p className={styles.balanceAmount}>${lifetimeEarnings.toFixed(2)}</p>
          <p className={styles.balanceDesc}>Total earnings to date</p>
        </div>
      </div>

      <div className={styles.paymentSettings}>
        <h3>Payment Settings</h3>
        <div className={styles.paymentForm}>
          <div className={styles.formGroup}>
            <label>Preferred Payment Method</label>
            <select 
              value={paymentMethod} 
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="paypal">PayPal</option>
              <option value="bank">Bank Transfer</option>
              <option value="check">Check</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Payment Details</label>
            <input
              type="text"
              value={paymentMethod === 'paypal' 
                ? paymentDetails.paypal 
                : paymentDetails.bank}
              onChange={(e) => {
                if (paymentMethod === 'paypal') {
                  setPaymentDetails({...paymentDetails, paypal: e.target.value});
                } else {
                  setPaymentDetails({...paymentDetails, bank: e.target.value});
                }
              }}
              placeholder={paymentMethod === 'paypal' 
                ? 'Enter PayPal email' 
                : 'Enter bank account details'}
            />
          </div>

          <div className={styles.formActions}>
            <button className={styles.saveBtn}>Update Payment Info</button>
          </div>
        </div>
      </div>

      <div className={styles.transactionHistory}>
        <h3>Transaction History</h3>
        <div className={styles.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(transaction => (
                <tr key={transaction.id}>
                  <td>{transaction.date}</td>
                  <td>{transaction.description}</td>
                  <td className={styles.amountPositive}>{transaction.amount}</td>
                  <td>
                    <span className={`${styles.status} ${styles[transaction.status.toLowerCase()]}`}>
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

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
