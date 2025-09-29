import React from 'react';
import { FiArrowLeft, FiMessageSquare, FiAlertCircle } from 'react-icons/fi';
import styles from './HelpAndSupport.module.css';

const HelpAndSupport = ({ onBack }) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <button onClick={onBack} className={styles.backButton}>
                    <FiArrowLeft />
                </button>
                <h3 className={styles.title}>Help & Support</h3>
            </div>

            <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Search Help</h4>
                {/* SearchBar component will go here */}
            </div>

            <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Frequently Asked Questions</h4>
                {/* FAQ component will go here */}
            </div>

            <div className={styles.section}>
                <div className={styles.contactButtons}>
                    <button className={styles.contactButton}>
                        <FiMessageSquare className={styles.contactIcon} />
                        Contact Support
                    </button>
                    <button className={styles.contactButton}>
                        <FiAlertCircle className={styles.contactIcon} />
                        Report a Bug
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HelpAndSupport;
