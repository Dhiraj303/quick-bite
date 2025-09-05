import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const Navbar = () => {
    const [menu,setMenu] = useState("about");
    const {cartItems} = useContext(StoreContext);
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className='logo'/>
        <ul className='navbar-menu'>
         <Link to='/'> <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li> </Link>  
         <Link to='/about'>   <li onClick={()=>setMenu("about")} className={menu==="about"?"active":""}>About</li> </Link>
         <Link to='/contact'>  <li onClick={()=>setMenu("contact")} className={menu==="contact"?"active":""}>Contact</li> </Link>
         <Link>   <li onClick={()=>setMenu("digital")} className={menu==="digital"?"active":""}>QuickBite digital</li></Link>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt=''/>
            <div className='navbar-search-icon'>
                <Link to={"/cart"}>
                <img  src={assets.basket_icon} alt="" />
                </Link>
                <div className={`dot ${Object.values(cartItems).some(qty => qty > 0) ? 'dot-green' : ''}`}></div>
            </div>
        <button >Login</button>
        </div>

    </div>
  )
}

export default Navbar