import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu,setMenu] = useState("about");
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className='logo'/>
        <ul className='navbar-menu'>
            <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
            <li onClick={()=>setMenu("about")} className={menu==="about"?"active":""}>About</li>
            <li onClick={()=>setMenu("contact")} className={menu==="contact"?"active":""}>Contact</li>
            <li onClick={()=>setMenu("digital")} className={menu==="digital"?"active":""}>QuickBite digital</li>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt=''/>
            <div className='navbar-search-icon'>
                <Link to={"/cart"}>
                <img  src={assets.basket_icon} alt="" />
                </Link>
                <div className='dot'></div>
            </div>
        <button >Login</button>
        </div>

    </div>
  )
}

export default Navbar