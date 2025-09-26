import React, { useState } from "react";
import styles from "./Publisher.module.css";
import { 
  FaSearch, 
  FaFilter, 
  FaEdit, 
  FaEye, 
  FaTrash, 
  FaCheck, 
  FaTimes 
} from "react-icons/fa";

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

export default ManagePlacements;