import React, { useState, useEffect } from "react";
import styles from "./Publisher.module.css";
import { FaSearch, FaFilter, FaSort, FaEye, FaEdit, FaTrash, FaTag, FaMoneyBill, FaGlobe, FaChartLine, FaClock, FaCheck, FaTimes } from "react-icons/fa";

const Offers = () => {
  const [offers, setOffers] = useState([]);
  const [filteredOffers, setFilteredOffers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  // Mock data for offers
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockOffers = [
        {
          id: 1,
          name: "Premium App Install Campaign",
          advertiser: "TechCorp Inc.",
          payout: "$2.50",
          country: "US",
          category: "Apps",
          status: "Active",
          conversions: 1250,
          ctr: "3.2%",
          cpa: "$1.80",
          endDate: "2025-12-31",
          description: "High-quality app install campaign with strict quality guidelines"
        },
        {
          id: 2,
          name: "E-commerce Conversion Offer",
          advertiser: "ShopSmart Ltd.",
          payout: "$5.00",
          country: "Global",
          category: "E-commerce",
          status: "Paused",
          conversions: 890,
          ctr: "2.1%",
          cpa: "$3.20",
          endDate: "2025-11-15",
          description: "Drive sales for premium products with high conversion rate"
        },
        {
          id: 3,
          name: "Lead Generation Campaign",
          advertiser: "LeadGen Pro",
          payout: "$8.00",
          country: "US, CA",
          category: "Finance",
          status: "Active",
          conversions: 2100,
          ctr: "4.5%",
          cpa: "$6.20",
          endDate: "2025-10-30",
          description: "Generate high-quality leads for financial services"
        },
        {
          id: 4,
          name: "Gaming App Retention",
          advertiser: "GameOn Studios",
          payout: "$3.25",
          country: "Global",
          category: "Gaming",
          status: "Pending",
          conversions: 0,
          ctr: "0%",
          cpa: "$0.00",
          endDate: "2025-11-30",
          description: "Drive installs and 7-day retention for mobile game"
        },
        {
          id: 5,
          name: "Fitness App Trial",
          advertiser: "FitLife Co.",
          payout: "$4.75",
          country: "US, UK, CA",
          category: "Health & Fitness",
          status: "Active",
          conversions: 560,
          ctr: "2.8%",
          cpa: "$3.95",
          endDate: "2025-12-15",
          description: "Get trial signups for premium fitness app"
        },
        {
          id: 6,
          name: "Travel Booking Offer",
          advertiser: "TravelMore",
          payout: "$12.00",
          country: "US, EU",
          category: "Travel",
          status: "Completed",
          conversions: 3200,
          ctr: "1.9%",
          cpa: "$9.80",
          endDate: "2025-08-31",
          description: "Book travel and earn commission"
        }
      ];
      
      setOffers(mockOffers);
      setFilteredOffers(mockOffers);
      setLoading(false);
    }, 800);
  }, []);

  // Filter offers based on search term and filters
  useEffect(() => {
    let result = offers;
    
    if (searchTerm) {
      result = result.filter(offer => 
        offer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        offer.advertiser.toLowerCase().includes(searchTerm.toLowerCase()) ||
        offer.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (statusFilter !== "All") {
      result = result.filter(offer => offer.status === statusFilter);
    }
    
    if (categoryFilter !== "All") {
      result = result.filter(offer => offer.category === categoryFilter);
    }
    
    setFilteredOffers(result);
  }, [searchTerm, statusFilter, categoryFilter, offers]);

  const getStatusClass = (status) => {
    switch (status) {
      case "Active": return styles.active;
      case "Paused": return styles.paused;
      case "Pending": return styles.pending;
      case "Completed": return styles.completed;
      default: return "";
    }
  };

  const categories = [...new Set(offers.map(offer => offer.category))];
  const statuses = [...new Set(offers.map(offer => offer.status))];

  if (loading) {
    return (
      <div className={styles.offersSection}>
        <div className={styles.sectionHeader}>
          <h2>Offers</h2>
        </div>
        <div className={styles.loadingSpinner}>
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.offersSection}>
      <div className={styles.sectionHeader}>
        <h2>Offers</h2>
      </div>

      <div className={styles.tableControls}>
        <div className={styles.filterGroup}>
          <FaSearch />
          <input
            type="text"
            placeholder="Search offers..."
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
            {statuses.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>
        
        <div className={styles.filterGroup}>
          <FaTag />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="All">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.offersTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Offer Name</th>
              <th>Advertiser</th>
              <th>Payout</th>
              <th>Country</th>
              <th>Category</th>
              <th>Status</th>
              <th>Conversions</th>
              <th>CTR</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOffers.length > 0 ? (
              filteredOffers.map(offer => (
                <tr key={offer.id}>
                  <td>{offer.id}</td>
                  <td>
                    <div className={styles.offerInfo}>
                      <div className={styles.offerName}>{offer.name}</div>
                      <div className={styles.offerDescription}>{offer.description}</div>
                    </div>
                  </td>
                  <td>{offer.advertiser}</td>
                  <td>
                    <span className={styles.payout}>{offer.payout}</span>
                  </td>
                  <td>
                    <span className={styles.country}>{offer.country}</span>
                  </td>
                  <td>
                    <span className={styles.category}>{offer.category}</span>
                  </td>
                  <td>
                    <span className={`${styles.status} ${getStatusClass(offer.status)}`}>
                      {offer.status}
                    </span>
                  </td>
                  <td>{offer.conversions.toLocaleString()}</td>
                  <td>{offer.ctr}</td>
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
                <td colSpan="10" className={styles.noData}>
                  No offers found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className={styles.tableFooter}>
        <span>
          Showing {filteredOffers.length} of {offers.length} offers
        </span>
      </div>

      {/* Offers Stats Summary */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div>
            <p>Total Offers</p>
            <h3>{offers.length}</h3>
          </div>
          <div className={styles.statIcon}>
            <FaChartLine />
          </div>
        </div>
        
        <div className={styles.statCard}>
          <div>
            <p>Active Offers</p>
            <h3>{offers.filter(o => o.status === "Active").length}</h3>
          </div>
          <div className={styles.statIcon}>
            <FaCheck />
          </div>
        </div>
        
        <div className={styles.statCard}>
          <div>
            <p>Avg. Payout</p>
            <h3>${(offers.reduce((sum, offer) => sum + parseFloat(offer.payout.replace('$', '')), 0) / offers.length || 0).toFixed(2)}</h3>
          </div>
          <div className={styles.statIcon}>
            <FaMoneyBill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;