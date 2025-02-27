import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <nav className={styles.footer}>
      <div className={styles.logoContainer}>
       <p>MEDICENTRAL</p>
       <p>2025</p>
      </div>
    </nav>
  );
};

export default Footer;