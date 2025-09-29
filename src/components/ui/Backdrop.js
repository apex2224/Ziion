import React from 'react';
import styles from './Backdrop.module.css';

const Backdrop = ({ isOpen, onClick }) => {
    return (
        <div 
            className={`${styles.backdrop} ${isOpen ? styles.open : ''}`}
            onClick={onClick}
        />
    );
};

export default Backdrop;
