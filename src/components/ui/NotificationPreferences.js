import React, { useState } from 'react';
import styles from './NotificationPreferences.module.css';

const NotificationPreferences = () => {
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [pushNotifications, setPushNotifications] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.preference}>
                <span className={styles.label}>Email Notifications</span>
                <label className={styles.switch}>
                    <input 
                        type="checkbox" 
                        checked={emailNotifications}
                        onChange={() => setEmailNotifications(!emailNotifications)}
                    />
                    <span className={styles.slider}></span>
                </label>
            </div>
            <div className={styles.preference}>
                <span className={styles.label}>Push Notifications</span>
                <label className={styles.switch}>
                    <input 
                        type="checkbox" 
                        checked={pushNotifications}
                        onChange={() => setPushNotifications(!pushNotifications)}
                    />
                    <span className={styles.slider}></span>
                </label>
            </div>
        </div>
    );
};

export default NotificationPreferences;
