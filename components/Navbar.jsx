"use client";

import Image from "next/image";
import logo from "../public/logo.png";
import hamburger from "../public/hamburger.png";
import close from "../public/close.png";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";

const Navbar = () => {
  const showSettings = (event) => {
    event.preventDefault();
    // Your logic for handling settings goes here
  };

  return (
    <div className="flex justify-between px-8 ">
      <div>
        <Image
          className="bleve-logo"
          src={logo}
          alt="Logo"
          width={100}
          height={0}
        />
      </div>

      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="nav-toggle"
        />
        <label htmlFor="nav-toggle" className="navigation__button">
          <span
            className="navigation__icon"
            aria-label="toggle navigation menu"
          ></span>
        </label>
        <div className="navigation__background"></div>

        <nav className="navigation__nav" role="navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>01</span>Sobre
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>02</span>Habilidades
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>03</span>Trabalhos
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>04</span>Eventos
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>05</span>Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
