import React, { useState } from 'react';
import FirstButton from '../common/FirstButton/FirstButton';

function Search(){
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
      };

      const handleSearch = () => {
        console.log('Searching for:', searchTerm);
        // add logic in the backend
      };

      return(
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="חפש רשת אופנה"
            />
            <FirstButton onClick={handleSearch} disabled={false}>🔍</FirstButton>
        </div>
      )
}

export default Search;