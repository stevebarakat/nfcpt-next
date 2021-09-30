import { useState, useEffect, useRef } from 'react';
import styles from '../styles/main-menu.module.css'
import { FaCaretDown, FaBars, FaTimes } from 'react-icons/fa';
import useOnClickOutside from '../hooks/useOnClickOutside';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../images/logo.svg';

const MainMenu = () => {
  const aboutEl = useRef();
  const servicesEl = useRef();
  const [mobile, setMobile] = useState(false);
  const [toggleAbout, setToggleAbout] = useState(false);
  const [toggleServices, setToggleServices] = useState(false);
  useOnClickOutside(aboutEl, () => setToggleAbout(false));
  useOnClickOutside(servicesEl, () => setToggleServices(false));

  function handlePointerDown(e) {
    console.log(e.currentTarget.id)
    console.log(aboutEl.current.id)
    console.log(servicesEl.current.id)
    if (e.currentTarget.id === aboutEl.current.id) {
      setTimeout(() => setToggleAbout(!toggleAbout), 250);
    }
    if (e.currentTarget.id === servicesEl.current.id) {
      setTimeout(() => setToggleServices(!toggleServices), 250);
    }
  }

  function handleResize() {
    console.log(window.innerWidth);
    if (window.innerWidth < 550) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }

  useEffect(() => {
    window.onload = handleResize;
    window.addEventListener("resize", handleResize)
  }, [])

  let navLink;
  if (!mobile) {
    navLink = `#`
  } else {
    navLink = `#navbar`
  }

  function handleKeyDown(e) {
    console.log(e.currentTarget.id)
    console.log(aboutEl.current.id)
    console.log(servicesEl.current.id)
    switch (e.code) {
      case "Space":
      case "Enter":
      case "NumpadEnter":
        if (e.currentTarget.id === aboutEl.current.id) {
          setToggleAbout(!toggleAbout)
        }
        if (e.currentTarget.id === servicesEl.current.id) {
          setToggleServices(!toggleServices);
        }
        break;
      case "Escape":
        if (e.currentTarget.id === aboutEl.current.id) {
          setToggleAbout(false)
        }
        if (e.currentTarget.id === servicesEl.current.id) {
          setToggleServices(false);
        }
        break;
      default:
        break;
    }
  }
  return (
    <div>

      <a style={{ position: "relative" }} className={styles.hamburger} href="#navbar" aria-label="Open main menu">
        <span className={styles.hidden}>Open main menu</span>
        <FaBars />
      </a>
      <nav className={styles.nav} id="navbar">
        <Image src={logo} alt="North Florida Chiropractic Physical Therapy" />
        <ul onKeyDown={handleKeyDown}>
          <li>
            <Link href="/"><a>Home</a></Link>
          </li>
          <li onKeyDown={handleKeyDown} onPointerDown={handlePointerDown} id="about" className={styles.dropdown} ref={aboutEl}>
            <a href={navLink}><div style={{ display: "flex" }}>About<FaCaretDown /></div></a>
            <ul onKeyDown={handleKeyDown}
              style={!toggleAbout ? { display: "none" } : { display: "block", width: "fit-content" }}
              className={styles.dropdownMenu}>
              <li>
                <Link href="/about"><a>About Us</a></Link>
              </li>
              <li><a href="/first-visit">First Visit</a></li>
              <li><a href="/plans">Plans</a></li>
            </ul>
          </li>
          <li onKeyDown={handleKeyDown} onPointerDown={handlePointerDown} id="services" className={styles.dropdown} ref={servicesEl}>
            <a href={navLink}>
              <div style={{ display: "flex" }}>Services<FaCaretDown /></div></a>
            <ul onKeyDown={handleKeyDown}
              style={!toggleServices ? { display: "none" } : { display: "block", width: "fit-content" }}
              className={styles.dropdownMenu}>
              <li><a href="/chiropractic">Chiropractic Services</a></li>
              <li><a href="/physical-therapy">Physical Therapy</a></li>
              <li><a href="/massage-therapy">Massage Therapy</a></li>
              <li><a href="/accident-rehabilitation">Accident Rehabilitation</a></li>
            </ul>
          </li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <a className={styles.close} href="#" aria-label="Close main menu">
          <span className={styles.hidden}>Close main menu</span>
          <FaTimes />
        </a>
      </nav>
    </div>
  )
}

export default MainMenu;