// CategoriesList.js
import React, { useState } from 'react';
import categoriesData from './categoriesData.json';
import ExpandableDropdown from './ExpandableDropdown';
import SearchBar from './SearchBar';

const CategoriesList = () => {
  const [filteredCategories, setFilteredCategories] = useState(categoriesData.categories);

  const handleSearch = (filteredCategories) => {
    setFilteredCategories(filteredCategories);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Categories</h2>
      <SearchBar categories={categoriesData.categories} onSearch={handleSearch} />
      {filteredCategories.map(category => (
        <ExpandableDropdown key={category.id} category={category} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '15px',
  },
  heading: {
    color: '#333',
  },
};

export default CategoriesList;
