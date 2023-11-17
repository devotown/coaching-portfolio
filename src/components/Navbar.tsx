import React from "react";
import logo from "../xfactorlogo.png";
import "./Navbar.css"; // Import your CSS file
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// REACT FONT AWESOME IMPORT


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
      <a
        className="navbar-brand"
        href="https://tanks-alot.co.uk/military-vehicles-for-sale/"
        target="_blank"
      >
        <img className="logo" src={logo} alt="logo..." />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
             <a className="nav-text" href="/">Home<span className="sr-only"></span></a>
          </li>
          <li className="nav-item">
             <a className="nav-text" href="/train">Train</a>
          </li>
          <li className="nav-item">
             <a className="nav-text" href="/staff">Staff</a>
          </li>
          <li className="nav-item">
             <a className="nav-text" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
