"use client";
import { useState, useEffect } from "react";
import logo from "../public/logo.png";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to close the menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Attach event listeners to links and menu items when the component mounts
  useEffect(() => {
    const links = document.querySelectorAll(".navigation__link");
    links.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // Cleanup: Remove event listeners when the component unmounts
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", closeMenu);
      });
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Toggle menu open/closed state
  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between px-8">
      <div>
        <Link href="/">
          <Image
            className="bleve-logo md:w-16"
            src={logo}
            alt="Logo"
            width={100}
            height={0}
          />
        </Link>
      </div>

      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="nav-toggle"
          checked={isMenuOpen}
          onChange={handleMenuToggle}
        />
        <label htmlFor="nav-toggle" className="navigation__button">
          <span
            className="navigation__icon"
            aria-label="toggle navigation menu"
          >
            {isMenuOpen ? (
              // Replace this with your custom close icon or font icon
              <i className="custom-close-icon"></i>
            ) : (
              // Replace this with your custom hamburger icon or font icon
              <i className="custom-hamburger-icon"></i>
            )}
          </span>
        </label>
        <div className="navigation__background"></div>

        <nav className="navigation__nav" role="navigation">
          <ul className="navigation__list">
            <li id="nav-item-one" className="navigation__item">
              <Link href="/" className="navigation__link">
                <span>01</span>Home
              </Link>
            </li>
            <li className="navigation__item">
              <Link href="/#services" className="navigation__link">
                <span>02</span>Services
              </Link>
            </li>
            <li className="navigation__item">
              <Link href="/#partner" className="navigation__link">
                <span>03</span>Partner
              </Link>
            </li>
            <li className="navigation__item">
              <Link href="/#why-us" className="navigation__link">
                <span>04</span>Why Us?
              </Link>
            </li>
            <li className="navigation__item">
              <Link href="/contact" className="navigation__link">
                <span>05</span>Contact
              </Link>
            </li>

            {/* ... (other menu items without any onClick event) */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
