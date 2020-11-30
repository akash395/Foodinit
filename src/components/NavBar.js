import React from 'react'
import './../App.css'
import './../App2.css'
import {Link} from 'react-router-dom'

function NavBar() {
    // return (
    //     <nav className = "nav">
    //         <h3 style = {{color: 'cyan'}}>Foodinit</h3>
    //         <ul className ="topnav" id="dropdownClick">
    //             <Link to = '/home'>
    //                 <li>HOME</li>
    //             </Link>
    //             <Link to = "/about">
    //                 <li>ABOUT</li>
    //             </Link>
    //             <Link to = "/contact">
    //                 <li>CONTACT</li>
    //             </Link>
    //             <Link to = "/menu">
    //                 <li>MENU</li>
    //             </Link>
    //             <Link to = "/signup">
    //                 <li className="topnav-right">SIGN UP</li>
    //             </Link>
    //             <Link to = '/signin'>
    //                 <li className="topnav-right">SIGN IN</li>
    //             </Link>
    //             <Link to = "&#9776;">
    //                 <li className="dropdownIcon">&#9776;</li>
    //             </Link>  

    //         </ul>
    //     </nav>
    // )

    return (
        <nav>
            <ul className="topnav " id="dropdownClick">
            
                <li><a href="#home">Home</a></li>
                <li><a href="#News">MENU</a></li>
                <li><a href="#Contact">Contact</a></li>
                <li><a href="#About">About</a></li>

                <li className="topnav-right"><a href="#Sign Up">Sign Up</a></li>
                <li className="topnav-right"><a href="#Sign In">Sign In</a></li>

                <li className="dropdownIcon">&#9776;</li>

            </ul>

        </nav>
    )
        
}

export default NavBar


