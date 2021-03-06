import { useState, useEffect, useRef } from "react";
import { gql, useQuery } from "@apollo/client";
import { client } from "../lib/apollo";
import Hamburger from "hamburger-react";
import {
  FaCaretDown,
  FaChevronRight,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import useOnClickOutside from "../hooks/useOnClickOutside";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import logo from "../images/logo.svg";
import mobileLogo from "../images/mobile-logo.svg";

const PRIMARY_MENU = gql`
  query GetPrimaryMenu {
    menus(where: { slug: "primary" }) {
      nodes {
        menuItems(where: { location: PRIMARY, parentId: "null" }) {
          nodes {
            path
            label
            childItems {
              nodes {
                path
                label
              }
            }
          }
        }
      }
    }
  }
`;

const Header = () => {
  const { loading, error, data } = useQuery(PRIMARY_MENU);
  const aboutEl = useRef();
  const servicesEl = useRef();
  const [mobile, setMobile] = useState(false);
  const [toggleAbout, setToggleAbout] = useState(false);
  const [toggleServices, setToggleServices] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(true);
  useOnClickOutside(aboutEl, () => setToggleAbout(false));
  useOnClickOutside(servicesEl, () => setToggleServices(false));

  function handlePointerDown(e) {
    if (e.currentTarget.id === aboutEl.current.id) {
      setTimeout(() => setToggleAbout(!toggleAbout), 250);
    }
    if (e.currentTarget.id === servicesEl.current.id) {
      setTimeout(() => setToggleServices(!toggleServices), 250);
    }
    setToggleMenu((toggleMenu) => !toggleMenu);
  }

  function handleKeyDown(e) {
    switch (e.code) {
      case "Space":
      case "Enter":
      case "NumpadEnter":
        if (e.currentTarget.id === aboutEl.current.id) {
          setToggleAbout(!toggleAbout);
        }
        if (e.currentTarget.id === servicesEl.current.id) {
          setToggleServices(!toggleServices);
        }
        break;
      case "Escape":
        if (e.currentTarget.id === aboutEl.current.id) {
          setToggleAbout(false);
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
    <div className="flex">
      <span className={styles.mobileLogo}>
        <Image
          src={mobileLogo}
          width="350px"
          quality="100"
          alt="North Florida Chiropractic Physical Therapy"
        />
      </span>
      <a
        onClick={() => setToggleMenu((toggleMenu) => !toggleMenu)}
        className={styles.hamburger}
        href={toggleMenu === false ? "#navbar" : "#"}
        aria-label="Open main menu"
      >
        <span className={styles.hidden}>Open main menu</span>
        <Hamburger
          className={styles.hamburger}
          size={20}
          onClick={() => setToggleMenu((toggleMenu) => !toggleMenu)}
        />
      </a>
      <nav className={styles.nav} id="navbar">
        <div className={styles.container}>
          <div className={styles.menu}>
            <Link href="/" passHref>
              <a className={styles.logo}>
                <Image
                  layout="fixed"
                  width="200"
                  src={logo}
                  quality="100"
                  alt="North Florida Chiropractic Physical Therapy"
                />
              </a>
            </Link>
            <ul onKeyDown={handleKeyDown}>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li
                onKeyDown={handleKeyDown}
                onPointerDown={handlePointerDown}
                id="about"
                className={styles.dropdown}
                ref={aboutEl}
              >
                <button className={styles.link}>
                  <div style={{ display: "flex" }}>
                    About
                    <FaCaretDown />
                  </div>
                </button>
                <ul
                  onKeyDown={handleKeyDown}
                  style={
                    !toggleAbout
                      ? { display: "none" }
                      : { display: "block" }
                  }
                  className={styles.dropdownMenu}
                >
                  <li>
                    <Link href="/about-us">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/first-visit">
                      <a>First Visit</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing-plans">
                      <a>Plans</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                onKeyDown={handleKeyDown}
                onPointerDown={handlePointerDown}
                id="services"
                className={styles.dropdown}
                ref={servicesEl}
              >
                <button className={styles.link}>
                  <div style={{ display: "flex" }}>
                    Services
                    <FaCaretDown />
                  </div>
                </button>
                <ul
                  onKeyDown={handleKeyDown}
                  style={
                    !toggleServices
                      ? { display: "none" }
                      : { display: "block" }
                  }
                  className={styles.dropdownMenu}
                >
                  <li>
                    <Link href="/chiropractic-services">
                      <a>Chiropractic Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/physical-therapy">
                      <a>Physical Therapy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/massage-therapy">
                      <a>Massage Therapy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/accident-rehabilitation">
                      <a>Accident Rehabilitation</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
            <span className={styles.tel}>
              <a className="bold" href="tel:904-272-4329">
                (904) 272-4329
              </a>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
