"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/assets/scss/components/main-navbar.module.scss";
import Image from "next/image";
import Logo from "@/assets/images/logo-white.png";

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [innerWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth > 768 && setIsOpen(false);
      setInnerWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMobileLinkClick = () => {
    if (innerWidth <= 768) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <nav
      className={styles.navbar_wrapper}
      style={isOpen ? { background: "#161617" } : {}}
    >
      <div
        className={`${styles.navbar_container} ${
          isOpen ? styles.navbar_container_open : ""
        }`}
      >
        <div className={styles.logo}>
          <Link href="/">
            <Image src={Logo} alt="Site logo white" width={100} height={100} />
          </Link>
        </div>
        <div
          className={`${styles.menu_burger} ${
            isOpen ? styles.menu_burger_open : ""
          }`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
          <li>
            <Link onClick={handleMobileLinkClick} href="/development-skills">
              Development Skills
            </Link>
          </li>
          <li>
            <Link onClick={handleMobileLinkClick} href="/about-me">
              About Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNavbar;
