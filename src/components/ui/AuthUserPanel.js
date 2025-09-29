import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiGrid, FiLogOut, FiSettings, FiSliders } from 'react-icons/fi';
import styles from './AuthUserPanel.module.css';
import animStyles from './AuthUserPanelAnimations.module.css';


const AuthUserPanel = ({ onClose, isOpen, username, onManageAccount }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.setItem("isAuthenticated", "false");
        onClose();
        navigate('/');
    };

    const handleDashboardClick = () => {
        onClose();
        navigate('/advertiser');
    };

    return (
        <div className={styles.panelContent}>
            <p className={`${styles.welcomeMessage} ${isOpen ? `${animStyles.animateIn} ${animStyles.delay1}` : ''}`}>
                Welcome, {username}!
            </p>
            <div className={styles.buttonGroup}>
                <button 
                    onClick={handleDashboardClick}
                    className={`${styles.dashboardButton} ${isOpen ? `${animStyles.animateIn} ${animStyles.delay2}` : ''}`}>
                    <FiGrid className={styles.icon} />
                    DASHBOARD
                </button>
                <button 
                    onClick={handleLogout} 
                    className={`${styles.logoutButton} ${isOpen ? `${animStyles.animateIn} ${animStyles.delay3}` : ''}`}>
                    <FiLogOut className={styles.icon} />
                    LOGOUT
                </button>
            </div>

            <hr className={styles.divider} />

            <button onClick={onManageAccount} className={styles.settingsButton}>
                <FiSettings className={styles.icon} />
                Manage Account
            </button>
            <button className={styles.settingsButton}>
                <FiSliders className={styles.icon} />
                Settings
            </button>
        </div>
    );
};

export default AuthUserPanel;
