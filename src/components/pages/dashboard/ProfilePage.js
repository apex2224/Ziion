import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProfilePage.module.css';

const ProfilePage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Check authentication status on component mount
        const status = localStorage.getItem("isAuthenticated") === "true";
        setIsAuthenticated(status);
    }, []);

    const handleLogout = () => {
        // Clear the authentication status
        localStorage.setItem("isAuthenticated", "false");
        setIsAuthenticated(false);
        // Redirect the user to the home page
        navigate('/');
    };

    const handleSignin = (e) => {
        e.preventDefault();
        
        // Simple validation
        if (!email && !username) {
            setLoginError('Please enter your email or username');
            return;
        }
        if (!password) {
            setLoginError('Please enter your password');
            return;
        }

        // In a real application, you would validate credentials against an API
        // For this example, we'll check against some mock data
        // (This is just for demonstration - credentials would normally be verified server-side)
        const validCredentials = [
            { email: 'user@example.com', username: 'user', password: 'password123' },
            { email: 'admin@example.com', username: 'admin', password: 'admin123' },
        ];

        const isValid = validCredentials.some(cred => 
            (cred.email === email || cred.username === username) && cred.password === password
        );

        if (isValid) {
            // Set authentication status
            localStorage.setItem("isAuthenticated", "true");
            setIsAuthenticated(true);
            setLoginError('');
        } else {
            setLoginError('Invalid email/username or password');
        }
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();
        // In a real application, you would implement password reset functionality
        alert(`Password reset instructions sent to: ${email || username}`);
        setShowForgotPassword(false);
    };

    const toggleForgotPassword = () => {
        setShowForgotPassword(!showForgotPassword);
    };

    return (
        <div className={styles.container}>
            <h1>Profile Page</h1>
            {isAuthenticated ? (
                <div className={styles.authenticatedSection}>
                    <p>Welcome! You are currently logged in.</p>
                    <div className={styles.buttonGroup}>
                        <button 
                            onClick={() => navigate('/advertiser')}
                            className={styles.dashboardButton}
                        >
                            DASHBOARD
                        </button>
                        <button 
                            onClick={handleLogout} 
                            className={styles.logoutButton}
                        >
                            LOGOUT
                        </button>
                    </div>
                </div>
            ) : showForgotPassword ? (
                <div className={styles.loginSection}>
                    <h2>Reset Your Password</h2>
                    <form onSubmit={handleForgotPassword} className={styles.forgotPasswordForm}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="forgot-email">Email or Username</label>
                            <input
                                type="text"
                                id="forgot-email"
                                value={email || username}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setUsername(e.target.value);
                                }}
                                className={styles.inputField}
                                placeholder="Enter your email or username"
                                required
                            />
                        </div>
                        {loginError && <div className={styles.errorMessage}>{loginError}</div>}
                        <button type="submit" className={styles.submitButton}>
                            RESET PASSWORD
                        </button>
                        <button 
                            type="button" 
                            onClick={() => setShowForgotPassword(false)}
                            className={styles.cancelButton}
                        >
                            CANCEL
                        </button>
                    </form>
                </div>
            ) : (
                <div className={styles.loginSection}>
                    <h2>Sign In to Your Account</h2>
                    <form onSubmit={handleSignin} className={styles.loginForm}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="username-email">Email or Username</label>
                            <input
                                type="text"
                                id="username-email"
                                value={email || username}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    // Check if input looks like an email
                                    if (value.includes('@')) {
                                        setEmail(value);
                                        setUsername(''); // Clear username if email is entered
                                    } else {
                                        setUsername(value);
                                        setEmail(''); // Clear email if username is entered
                                    }
                                }}
                                className={styles.inputField}
                                placeholder="Enter your email or username"
                                required
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={styles.inputField}
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        {loginError && <div className={styles.errorMessage}>{loginError}</div>}
                        <button type="submit" className={styles.submitButton}>
                            SIGN IN
                        </button>
                        <button 
                            type="button" 
                            onClick={toggleForgotPassword}
                            className={styles.forgotPasswordLink}
                        >
                            Forgot Password?
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;