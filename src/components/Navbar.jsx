import React from 'react'
import {FiBell,FiPlus} from "react-icons/fi"
import {IoMdArrowDropdown} from "react-icons/io";
import {Link} from "react-router-dom";
import img1 from '../img/img1.png'
import img2 from '../img/logo.gif';
import Menu from './Menu';
import { useState } from 'react';
function Navbar() {
  const [showMenu,setShowMenu]=useState(false);
  return (
    <div>
      <nav className="navbar">
      {/* left*/}
      <div className="navLeft">
        <Link to="/">
        <img src={img1} alt="" />
        </Link>
        <div>
          <input type="text" placeholder='search or jump to'/>
        </div>
      </div>
      {/* center*/}

      <div className="navCenter">
        <h2>pulls</h2>
        <h2>issues</h2>
        <h2>marketplace</h2>
        <h2>explore</h2>
      </div>

      {/* right*/}
      <div className="navRight">

        <FiBell/>
        <div className="navRightIcons">
          <FiPlus/>
          <IoMdArrowDropdown/>
        </div>
        <div className="navRightIcons" onClick={()=>setShowMenu(!showMenu)}>
          <img src={img2} alt="" />
          <IoMdArrowDropdown/>
        </div>

      </div>
      {showMenu && <Menu/>}
      </nav>  
    </div>
  )
}

export default Navbar

