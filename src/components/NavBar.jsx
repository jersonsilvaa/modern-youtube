import React from "react"
import "../styles/components/NavBar.css"
import Logo from "./Logo"
import { Link } from "react-router-dom"

import SearchBar from "./SearchBar"
import SideBar from "./SideBar";

const NavBar = () => (
  <div>
       <nav className="navigation">
  <div className="navigation__menu">
      <button className="navigation__button navigation__menu__button">
          <svg style={{ fill: '#fff' }} viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></g></svg>
      </button>
      <Link to='/'>
        <Logo  />
      </Link>
  </div>
    <SearchBar />
  <div className="navigation__options">
      <button className="navigation__button">
          <svg style={{ fill: '#fff' }} viewBox="0 0 24 24" className="navigation__icon"><g><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z" ></path></g></svg>
      </button>
      <button className="navigation__button">
          <svg style={{ fill: '#fff' }} viewBox="0 0 24 24" className="navigation__icon"><g><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></g></svg>
      </button>
      <button style={{ fill: '#fff' }} className="navigation__button">
          <svg viewBox="0 0 24 24" className="navigation__icon"><g><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path></g></svg>
      </button>
      <div className="navigation__avatar">
        <img src="https://pps.whatsapp.net/v/t61.24694-24/291483763_3316118818675085_5448892912731441282_n.jpg?ccb=11-4&oh=01_AVyHVH83cl-eo1aEB6X9RO_-xlET65dIw4Vj2tCJRIVmKw&oe=632A4B05" alt="" />
      </div>
  </div>
  <SideBar />
</nav>
  </div>
)

export default NavBar