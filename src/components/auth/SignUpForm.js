import React, { useState } from 'react';
import styles from './SignUpForm.module.css';

const SignUpForm = ({ onSignUp, onSwitchToSignIn }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signUpError, setSignUpError] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        if (!username || !email || !password) {
            setSignUpError('Please fill in all fields');
            return;
        }
        // In a real app, you'd have more robust validation and an API call
        console.log('Signing up with:', { username, email, password });
        // Mock successful sign up
        localStorage.setItem("isAuthenticated", "true");
        onSignUp();
    };

    return (
        <form onSubmit={handleSignUp} className={styles.form}>
            <h2>Sign Up</h2>
            {signUpError && <div className={styles.errorMessage}>{signUpError}</div>}
            <div className={styles.inputGroup}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={styles.inputField}
                    placeholder="Choose a username"
                    required
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
                    placeholder="Enter your email"
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
                    placeholder="Create a password"
                    required
                />
            </div>
            <button type="submit" className={styles.submitButton}>SIGN UP</button>
            <div className={styles.switchFormLink}>
                Already have an account? <button type="button" onClick={onSwitchToSignIn}>Sign In</button>
            </div>
        </form>
    );
};

export default SignUpForm;
