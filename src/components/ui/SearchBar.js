import React from 'react';
import { FiSearch } from 'react-icons/fi';
import styles from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <div className={styles.searchContainer}>
            <FiSearch className={styles.searchIcon} />
            <input 
                type="text" 
                placeholder="Search for help..." 
                className={styles.searchInput}
            />
        </div>
    );
};

export default SearchBar;
