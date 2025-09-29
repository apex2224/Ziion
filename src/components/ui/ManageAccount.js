import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import styles from './ManageAccount.module.css';
import EditProfileForm from './EditProfileForm';
import ChangePasswordForm from './ChangePasswordForm';
import NotificationPreferences from './NotificationPreferences';

const ManageAccount = ({ onBack, username, email }) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <button onClick={onBack} className={styles.backButton}>
                    <FiArrowLeft />
                </button>
                <h3 className={styles.title}>Manage Account</h3>
            </div>

            <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Edit Profile</h4>
                <EditProfileForm username={username} email={email} />
            </div>

            <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Change Password</h4>
                <ChangePasswordForm />
            </div>

            <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Notification Preferences</h4>
                <NotificationPreferences />
            </div>
        </div>
    );
};

export default ManageAccount;
