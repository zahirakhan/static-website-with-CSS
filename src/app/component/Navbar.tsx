"use client";
import React from "react";
import Link from "next/link";
import "../../styles/navbar.css";


const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link href="/">
          <img src="/images/logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="line-container">
        <hr className="line" />
      </div>
      <nav className="menu">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Aboutme">About</Link>
          </li>
          <li>
            <Link href="/Mygallery">Gallery</Link>
          </li>
          <li>
            <Link href="/Team">Team</Link>
          </li>
          <li>
            <Link href="/ContactMe">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
