import React, { useState, useEffect } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import AuthUserPanel from '../ui/AuthUserPanel';
import ManageAccount from '../ui/ManageAccount';
import styles from './AuthManager.module.css';


const AuthManager = ({ onClose }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentView, setCurrentView] = useState('signIn'); // signIn, signUp, authenticated, manageAccount
    const [username, setUsername] = useState('DemoUser'); // Hardcoded for now
    const [email, setEmail] = useState('demo@example.com'); // Hardcoded for now
    

    useEffect(() => {
        const checkAuthStatus = () => {
            const status = localStorage.getItem("isAuthenticated") === "true";
            setIsAuthenticated(status);
            if (status) {
                setCurrentView('authenticated');
            }
        };
        checkAuthStatus();
        window.addEventListener('storage', checkAuthStatus);
        return () => window.removeEventListener('storage', checkAuthStatus);
    }, []);

    const handleSignIn = () => {
        setIsAuthenticated(true);
        setCurrentView('authenticated');
    };

    const handleSignUp = () => {
        setIsAuthenticated(true);
        setCurrentView('authenticated');
    };

    const handleManageAccount = () => {
        setCurrentView('manageAccount');
    };

    const handleBack = () => {
        setCurrentView('authenticated');
    };

    if (!isAuthenticated) {
        return (
            <div className={styles.container}>
                {currentView === 'signIn' && (
                    <SignInForm 
                        onSignIn={handleSignIn}
                        onSwitchToSignUp={() => setCurrentView('signUp')}
                        onForgotPassword={() => { /* Not implemented */ }}
                    />
                )}
                {currentView === 'signUp' && (
                    <SignUpForm 
                        onSignUp={handleSignUp}
                        onSwitchToSignIn={() => setCurrentView('signIn')}
                    />
                )}
            </div>
        );
    }

    return (
        <div className={styles.container}>
            {currentView === 'authenticated' && (
                <AuthUserPanel 
                    onClose={onClose} 
                    username={username} 
                    onManageAccount={handleManageAccount} 
                />
            )}
            {currentView === 'manageAccount' && (
                <ManageAccount 
                    onBack={handleBack} 
                    username={username} 
                    email={email} 
                />
            )}
        </div>
    );
};

export default AuthManager;
