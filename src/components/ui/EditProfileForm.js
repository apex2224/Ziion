import React, { useState } from 'react';
import styles from './EditProfileForm.module.css';

const EditProfileForm = ({ username: initialUsername, email: initialEmail }) => {
    const [username, setUsername] = useState(initialUsername);
    const [email, setEmail] = useState(initialEmail);

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you would make an API call to update the profile
        console.log('Updating profile with:', { username, email });
        alert('Profile updated successfully!');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={styles.inputField}
                />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.inputField}
                />
            </div>
            <button type="submit" className={styles.submitButton}>Save Changes</button>
        </form>
    );
};

export default EditProfileForm;
