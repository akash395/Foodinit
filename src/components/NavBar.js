import React from 'react'
import './../App.css'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <nav className = "nav">
            <ul className ="topnav" id="dropdownClick">
                <Link to = '/home'>
                   <li><a href="#home">Home</a></li>
                </Link>
                <Link to = "/menu">
                    <li><a href="/menu">MENU</a></li>
                </Link>
                <Link to = "/about">
                 <li><a href="#About">About</a></li>
                </Link>
                <Link to = "/contact">
                     <li><a href="#Contact">Contact</a></li>
                </Link>
               
                <Link to = "/cart">
                    <li className="topnav-right"><a href="http://localhost:3000/cart">Cart <span>0</span></a></li>
                </Link>
                <Link to = "/signup">
                    <li className="topnav-right"><a href="#Sign Up">Sign Up</a></li>
                </Link>
                <Link to = '/signin'>
                    <li className="topnav-right"><a href="#Sign In">Sign In</a></li>
                </Link>

                <Link to = '/admin'>
                    <li className="topnav-right"><a href="/admin">Admin</a></li>
                </Link>
                
                <Link to = "&#9776;">
                     <li class="dropdownIcon"><a href="javascript:void(0);"  onclick="dropdownMenu()" >&#9776;</a></li>
                </Link>  

            </ul>
        </nav>
    )

  
        
}

export default NavBar


