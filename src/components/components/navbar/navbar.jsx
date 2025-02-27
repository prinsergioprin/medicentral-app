import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src="/location-pin.svg"  /*THIS IS PLACEHOLDER CODE need to get logo svg*/ alt="Medicentral Logo" className={styles.logo} />
        <span className={styles.logoText}>MEDICENTRAL</span>
      </div>
    </nav>
  );
};

export default Navbar;