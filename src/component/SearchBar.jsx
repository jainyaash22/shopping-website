// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ categories, onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (categories) {
      const filteredCategories = filterCategories(categories, query);
      onSearch(filteredCategories);
    }
  };

  const filterCategories = (categories, query) => {
    const filtered = categories.filter(category => {
      if (category.name.toLowerCase().includes(query.toLowerCase())) {
        return true;
      }

      if (category.subcategories && Array.isArray(category.subcategories)) {
        const subcategoryMatch = category.subcategories.some(subcategory =>
          subcategory.name.toLowerCase().includes(query.toLowerCase())
        );

        if (subcategoryMatch) {
          return true;
        }
      }

      return false;
    });

    return filtered;
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search within categories..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleSearch} style={styles.button}>
        Search
      </button>
    </div>
  );
};

const styles = {
  container: {
    marginBottom: '15px',
  },
  input: {
    padding: '8px',
    marginRight: '5px',
  },
  button: {
    padding: '8px',
    cursor: 'pointer',
  },
};

export default SearchBar;
