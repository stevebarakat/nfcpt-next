import { useState } from 'react';
import styles from '../styles/MainMenu.module.css'
import { FaCaretDown, FaBars, FaTimes } from 'react-icons/fa';

const MainMenu = () => {
  const [toggle, setToggle] = useState(false);
  function handleKeyDown(e) {
    switch (e.code) {
      case "Space":
        setToggle(!toggle)
    }
  }
  console.log(toggle)
  return (
    <>
      <a className={styles.hamburger} href="#navbar" aria-label="Open main menu">
        <span className={styles.hidden}>Open main menu</span>
        <FaBars />
      </a>
      <nav className={styles.nav} id="navbar">
        <ul>
          <li><a href="#"> Home</a></li>
          <li className={styles.dropdown}>
            {/* <a href="#" className={styles.active}>About
              <i aria-hidden="true" className={styles.mobileHidden}>
                <FaCaretDown />
              </i></a> */}
            <a href="#">About <FaCaretDown /></a>
            <ul className={styles.dropdownMenu}>
              <li><a href="#">Belle</a></li>
              <li><a href="#">Bubbles</a></li>
              <li><a href="#">Dolores</a></li>
              <li><a href="#">Fred</a></li>
            </ul>
          </li>
          <li className={styles.dropdown}>
            {/* <a href="#" className={styles.active}>About
              <i aria-hidden="true" className={styles.mobileHidden}>
                <FaCaretDown />
              </i></a> */}
            <a href="#" onKeyDown={handleKeyDown}>About <FaCaretDown /></a>
            <ul style={!toggle ? { display: "none" } : { display: "block" }} className={styles.dropdownMenu}>
              <li><a href="#">Belle</a></li>
              <li><a href="#">Bubbles</a></li>
              <li><a href="#">Dolores</a></li>
              <li><a href="#">Fred</a></li>
            </ul>
          </li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Connect</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <a className={styles.close} href="#" aria-label="Close main menu">
          <span className={styles.hidden}>Close main menu</span>
          <FaTimes />
        </a>
      </nav>
    </>
  )
}

export default MainMenu;