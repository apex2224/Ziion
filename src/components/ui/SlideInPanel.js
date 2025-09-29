import React, { useEffect } from 'react';
import styles from './SlideInPanel.module.css';

const SlideInPanel = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        const handleScroll = () => {
            if (isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener('scroll', handleScroll);
        } else {
            window.removeEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isOpen, onClose]);

    return (
        <div className={`${styles.panel} ${isOpen ? styles.open : ''}`}>
            <button onClick={onClose} className={styles.closeButton}>&times;</button>
            {React.Children.map(children, child => 
                React.cloneElement(child, { isOpen })
            )}
        </div>
    );
};

export default SlideInPanel;
