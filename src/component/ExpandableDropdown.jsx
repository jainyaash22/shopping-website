// ExpandableDropdown.js
import React, { useState } from 'react';

const ExpandableDropdown = ({ category }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <div
      style={styles.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={styles.category}>{category.name}</div>
      {isExpanded && (
        <div style={styles.subcategories}>
          {category.subcategories && (
            <ul>
              {category.subcategories.map(subcategory => (
                <li key={subcategory.id}>{subcategory.name}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    margin: '10px 0',
    border: '1px solid #ddd',
    borderRadius: '5px',
    transition: 'background 0.3s',
    position: 'relative',
    overflow: 'visible', // Allow subcategories to overflow
  },
  category: {
    cursor: 'pointer',
    padding: '10px',
    background: '#f0f0f0',
  },
  subcategories: {
    position: 'absolute',
    top: '100%',
    left: '0',
    background: '#fff',
    zIndex: '1',
    border: '1px solid #ddd',
    borderRadius: '0 0 5px 5px',
    padding: '10px',
    minWidth: '150px', // Adjust as needed
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'opacity 0.3s, visibility 0.3s',
    opacity: 1,
    visibility: 'visible',
  },
};

export default ExpandableDropdown;
