import React, { useState } from 'react';
import styles from './SignInForm.module.css';

const SignInForm = ({ onSignIn, onSwitchToSignUp, onForgotPassword }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleSignin = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setLoginError('Please enter your email and password');
            return;
        }

        // Mock validation
        const validCredentials = [
            { email: 'user@example.com', password: 'password123' },
            { email: 'admin@example.com', password: 'admin123' },
        ];

        const isValid = validCredentials.some(cred => cred.email === email && cred.password === password);

        if (isValid) {
            localStorage.setItem("isAuthenticated", "true");
            onSignIn();
        } else {
            setLoginError('Invalid email or password');
        }
    };

    return (
        <form onSubmit={handleSignin} className={styles.form}>
            <h2>Sign In</h2>
            {loginError && <div className={styles.errorMessage}>{loginError}</div>}
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
                    placeholder="Enter your password"
                    required
                />
            </div>
            <button type="submit" className={styles.submitButton}>SIGN IN</button>
            <button type="button" onClick={onForgotPassword} className={styles.forgotPasswordLink}>
                Forgot Password?
            </button>
            <div className={styles.switchFormLink}>
                Don't have an account? <button type="button" onClick={onSwitchToSignUp}>Sign Up</button>
            </div>
        </form>
    );
};

export default SignInForm;
