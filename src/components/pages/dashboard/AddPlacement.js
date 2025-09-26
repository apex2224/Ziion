import React, { useState } from "react";
import styles from "./Publisher.module.css";
import { FaPlus } from "react-icons/fa";

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

export default AddPlacement;