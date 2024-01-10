"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/assets/scss/components/main-navbar.module.scss";

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth > 768 && setIsOpen(false);
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
          <Link href="/">Logo</Link>
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
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Work</Link>
          </li>
          <li>
            <Link href="/">Services</Link>
          </li>
          <li>
            <Link href="/">About Me</Link>
          </li>
          {/* Add more menu items as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default MainNavbar;
