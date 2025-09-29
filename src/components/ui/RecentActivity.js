import React from 'react';
import { FiLogIn, FiUser, FiGrid } from 'react-icons/fi';
import styles from './RecentActivity.module.css';

const mockActivity = [
    {
        icon: <FiLogIn />,
        text: 'You logged in',
    },
    {
        icon: <FiUser />,
        text: 'You viewed your profile',
    },
    {
        icon: <FiGrid />,
        text: 'You viewed the dashboard',
    },
];

const RecentActivity = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Recent Activity</h3>
            <ul className={styles.activityList}>
                {mockActivity.map((item, index) => (
                    <li key={index} className={styles.activityItem}>
                        <span className={styles.activityIcon}>{item.icon}</span>
                        <span>{item.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecentActivity;
