import React, { useState } from 'react';
import styles from './Search.module.css';

function Search(){
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
      };

      const handleSearch = () => {
        console.log('Searching for:', searchTerm);
        // add logic in the backend
        setSearchTerm(''); // clear the search box after searching
      };

      return(
        <div className={styles.search}>
            <input
                className={styles.input}
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="    חפש רשת אופנה" 
            />
            <span name={styles.btn} onClick={handleSearch}>🔍|</span>
        </div>
      )
}

export default Search;