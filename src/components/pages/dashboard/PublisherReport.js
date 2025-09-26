import React, { useState, useEffect } from "react";
import styles from "./Publisher.module.css";
import { 
  FaChartBar, FaCalendarAlt, FaFilter, FaDownload, 
  FaEye, FaArrowUp, FaArrowDown, FaUsers, 
  FaMoneyBillWave, FaMousePointer, FaClock,
  FaShareAlt, FaPrint, FaFilePdf, FaFileExcel
} from "react-icons/fa";

const PublisherReport = () => {
  const [reportData, setReportData] = useState(null);
  const [dateRange, setDateRange] = useState("last7days");
  const [loading, setLoading] = useState(true);

  // Mock report data
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockReportData = {
        summary: {
          impressions: 245678,
          clicks: 5432,
          conversions: 287,
          ctr: "2.21%",
          cvr: "5.28%",
          revenue: 1234.56,
          epc: 0.43,
          rpm: 0.50
        },
        dailyData: [
          { date: "2025-09-20", impressions: 32450, clicks: 890, conversions: 42, revenue: 180.50 },
          { date: "2025-09-21", impressions: 35670, clicks: 920, conversions: 38, revenue: 165.20 },
          { date: "2025-09-22", impressions: 29870, clicks: 780, conversions: 35, revenue: 150.75 },
          { date: "2025-09-23", impressions: 37890, clicks: 1020, conversions: 48, revenue: 205.40 },
          { date: "2025-09-24", impressions: 41230, clicks: 1150, conversions: 55, revenue: 235.80 },
          { date: "2025-09-25", impressions: 38560, clicks: 1200, conversions: 42, revenue: 180.60 },
          { date: "2025-09-26", impressions: 30008, clicks: 472, conversions: 27, revenue: 116.31 }
        ],
        topOffers: [
          { id: 1, name: "Premium App Install", conversions: 89, revenue: 356.75, cvr: "6.21%" },
          { id: 2, name: "E-commerce Offer", conversions: 76, revenue: 304.00, cvr: "5.87%" },
          { id: 3, name: "Lead Gen Campaign", conversions: 62, revenue: 248.00, cvr: "7.12%" },
          { id: 4, name: "Gaming App", conversions: 35, revenue: 140.00, cvr: "4.45%" },
          { id: 5, name: "Fitness Trial", conversions: 25, revenue: 100.00, cvr: "5.32%" }
        ],
        countries: [
          { name: "United States", conversions: 145, revenue: 580.00, percentage: 46.9 },
          { name: "United Kingdom", conversions: 45, revenue: 180.00, percentage: 14.6 },
          { name: "Canada", conversions: 38, revenue: 152.00, percentage: 12.3 },
          { name: "Australia", conversions: 29, revenue: 116.00, percentage: 9.4 },
          { name: "Germany", conversions: 30, revenue: 120.00, percentage: 9.7 }
        ]
      };

      setReportData(mockReportData);
      setLoading(false);
    }, 800);
  }, [dateRange]);

  const handleDateChange = (newRange) => {
    setDateRange(newRange);
    setLoading(true);
  };

  if (loading) {
    return (
      <div className={styles.reportSection}>
        <div className={styles.sectionHeader}>
          <h2>Publisher Report</h2>
        </div>
        <div className={styles.loadingSpinner}>
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  const { summary, dailyData, topOffers, countries } = reportData;

  return (
    <div className={styles.reportSection}>
      <div className={styles.sectionHeader}>
        <h2>Publisher Report</h2>
        <div className={styles.reportControls}>
          <div className={styles.filterGroup}>
            <FaCalendarAlt />
            <select 
              value={dateRange} 
              onChange={(e) => handleDateChange(e.target.value)}
            >
              <option value="today">Today</option>
              <option value="last7days">Last 7 Days</option>
              <option value="last30days">Last 30 Days</option>
              <option value="thisMonth">This Month</option>
              <option value="lastMonth">Last Month</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
          <div className={styles.filterGroup}>
            <FaFilter />
            <select>
              <option>All Offers</option>
              <option>Active Only</option>
              <option>Top Performing</option>
            </select>
          </div>
          <button className={styles.iconBtn}>
            <FaShareAlt />
          </button>
          <button className={styles.iconBtn}>
            <FaPrint />
          </button>
          <button className={styles.iconBtn}>
            <FaFilePdf />
          </button>
          <button className={styles.iconBtn}>
            <FaFileExcel />
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div>
            <p>Total Revenue</p>
            <h3>${summary.revenue.toFixed(2)}</h3>
            <div className={styles.trend}>
              <span className={styles.positiveTrend}>
                <FaArrowUp /> 12.5%
              </span>
              <span>vs last period</span>
            </div>
          </div>
          <div className={styles.statIcon}>
            <FaMoneyBillWave />
          </div>
        </div>
        
        <div className={styles.statCard}>
          <div>
            <p>Conversions</p>
            <h3>{summary.conversions}</h3>
            <div className={styles.trend}>
              <span className={styles.positiveTrend}>
                <FaArrowUp /> 8.2%
              </span>
              <span>vs last period</span>
            </div>
          </div>
          <div className={styles.statIcon}>
            <FaMousePointer />
          </div>
        </div>
        
        <div className={styles.statCard}>
          <div>
            <p>Clicks</p>
            <h3>{summary.clicks.toLocaleString()}</h3>
            <div className={styles.trend}>
              <span className={styles.negativeTrend}>
                <FaArrowDown /> 3.1%
              </span>
              <span>vs last period</span>
            </div>
          </div>
          <div className={styles.statIcon}>
            <FaUsers />
          </div>
        </div>
        
        <div className={styles.statCard}>
          <div>
            <p>CTR</p>
            <h3>{summary.ctr}</h3>
            <div className={styles.trend}>
              <span className={styles.positiveTrend}>
                <FaArrowUp /> 5.7%
              </span>
              <span>vs last period</span>
            </div>
          </div>
          <div className={styles.statIcon}>
            <FaChartBar />
          </div>
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className={styles.chartSection}>
        <div className={styles.sectionHeader}>
          <h3>Performance Overview</h3>
        </div>
        <div className={styles.chartPlaceholder}>
          <p>Daily Performance Chart</p>
          <div className={styles.chartLegend}>
            {dailyData.map((day, index) => (
              <div key={index} className={styles.chartLegendItem}>
                <div className={styles.legendColor} style={{ backgroundColor: `hsl(${index * 50}, 70%, 50%)` }}></div>
                <div>{day.date} - {day.conversions} conversions</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.reportsGrid}>
        {/* Top Offers */}
        <div className={styles.reportBlock}>
          <div className={styles.sectionHeader}>
            <h3>Top Performing Offers</h3>
          </div>
          <div className={styles.tableWrapper}>
            <table className={styles.reportsTable}>
              <thead>
                <tr>
                  <th>Offer Name</th>
                  <th>Conversions</th>
                  <th>Revenue</th>
                  <th>CVR</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {topOffers.map(offer => (
                  <tr key={offer.id}>
                    <td>{offer.name}</td>
                    <td>{offer.conversions}</td>
                    <td>${offer.revenue.toFixed(2)}</td>
                    <td>{offer.cvr}</td>
                    <td>
                      <button className={styles.iconBtn}>
                        <FaEye />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Geographic Performance */}
        <div className={styles.reportBlock}>
          <div className={styles.sectionHeader}>
            <h3>Geographic Performance</h3>
          </div>
          <div className={styles.tableWrapper}>
            <table className={styles.reportsTable}>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Conversions</th>
                  <th>Revenue</th>
                  <th>%</th>
                </tr>
              </thead>
              <tbody>
                {countries.map((country, index) => (
                  <tr key={index}>
                    <td>{country.name}</td>
                    <td>{country.conversions}</td>
                    <td>${country.revenue.toFixed(2)}</td>
                    <td>{country.percentage}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Additional Metrics */}
      <div className={styles.metricsGrid}>
        <div className={styles.metricCard}>
          <h4>EPC (Earnings Per Click)</h4>
          <p className={styles.metricValue}>${summary.epc.toFixed(2)}</p>
        </div>
        <div className={styles.metricCard}>
          <h4>RPM (Revenue Per Mille)</h4>
          <p className={styles.metricValue}>${summary.rpm.toFixed(2)}</p>
        </div>
        <div className={styles.metricCard}>
          <h4>Conversion Rate</h4>
          <p className={styles.metricValue}>{summary.cvr}</p>
        </div>
      </div>
    </div>
  );
};

export default PublisherReport;