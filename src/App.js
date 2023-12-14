// App.js
import React from 'react';
import CategoriesList from './component/CategoriesList';

const App = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Shopping Website</h1>
      </header>
      <main style={styles.main}>
        <CategoriesList />
      </main>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  header: {
    background: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  },
  main: {
    marginTop: '20px',
  },
};

export default App;
