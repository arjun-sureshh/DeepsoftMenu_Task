import React, { useState } from 'react';
import styles from './NavBar.module.css';

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.menuToggle} onClick={toggleMenu}>
        ☰
      </div>
      <div
        className={`${styles.navItems} ${menuOpen ? styles.active : ''}`}
      >
        <div className={styles.navitem}>Home</div>
        <div className={styles.navmenu}>Menu</div>
        <div className={styles.navitem}>Make a Reservation</div>
        <div className={styles.navitem}>Contact Us</div>
      </div>
    </div>
  );
};

export default NavBar;
