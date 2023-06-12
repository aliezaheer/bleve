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
    <div className="flex justify-between px-8 my-6">
      <div>
        <Image
          className="bleve-logo"
          src={logo}
          alt="Logo"
          width={80}
          height={100}
        />
      </div>
      <Menu
        right
        width={"100%"}
        customBurgerIcon={
          <Image className="ham-menu" src={hamburger} width={30} height={30} />
        }
        customCrossIcon={<Image src={close} width={20} height={40} />}
      >
        <Image
          className="menu-logo"
          src={logo}
          alt="Logo"
          width={80}
          height={100}
        />
        <Link className="menu-item" href="/">
          Home
        </Link>
        <Link className="menu-item" href="/">
          Mentorship program
        </Link>
        <Link className="menu-item" href="/">
          Get Mentorship
        </Link>
        <Link className="menu-item" href="/">
          Services
        </Link>
        <Link className="menu-item" href="/">
          Big Projects
        </Link>
        <Link className="menu-item" href="/">
          Contact
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
