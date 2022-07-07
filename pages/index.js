import React from 'react';
import Sidebar from '../components/Sidebar';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <Sidebar />
    </div>
  );
}

export default Home;
