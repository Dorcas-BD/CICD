"use client";

import React, { useState } from "react";
import "../../styles/styles.css";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  const toggleNavbar = () => {
    setNavbar(!navbar);
  };
  const handleMobileNavClick = () => {
    setNavbar(false);
  };
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link href="/">
          <h2 className="logo">Dorcas Bamisile</h2>
        </Link>
        <div className="nav-hamburger" onClick={toggleNavbar}>
          {navbar ? (
            <Image src="/close.svg" width={30} height={30} alt="close-nav" />
          ) : (
            <Image
              src="/hamburger.svg"
              width={30}
              height={30}
              alt="hamburger"
            />
          )}
        </div>
      </div>
      <div className="nav-list">
        <ul className="nav-menu">
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#contact">Contacts</Link>
          </li>
        </ul>
      </div>
      {navbar && (
        <div className="nav-mobile">
          <ul className="nav-menu">
            <li onClick={handleMobileNavClick}>
              <Link href="#home">Home</Link>
            </li>
            <li onClick={handleMobileNavClick}>
              <Link href="#about">About</Link>
            </li>
            <li onClick={handleMobileNavClick}>
              <Link href="#projects">Projects</Link>
            </li>
            <li onClick={handleMobileNavClick}>
              <Link href="#contact">Contacts</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
