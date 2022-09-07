import React from 'react'
import { logo } from '../utils/constans'

import '../styles/components/NavBar.css'
import { SearchBar } from './index'

const NavBar = () => (
    <header className='navbar'>
      <section className="navbar_container">
      <a href="/"><img src={logo} alt="logo" /></a>
      </section>
      <SearchBar />
    </header>
)

export default NavBar