import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <Sidebar />
      <Navbar />
    </div>
  );
}

export default Home;
