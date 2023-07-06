import React from "react";
import Cardlist from "./Cardlist";
import Link from "next/link";
import Script from 'next/script';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function Header() {

	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
  
    return(
      <header>
     <div className='container' >
			<Link href='/' className="navbar-brand"  ><a><img src='https://res.cloudinary.com/dqofcbeaq/image/upload/q_auto/v1663790369/iconos%20dlp/ico-d01_kui7ic.png' height="70" ></img></a></Link>
      <div className="container d-flex align-items-center">
			<nav ref={navRef}>
      <Link href="/cartas" ><a>CARTAS</a></Link>
      <Link href="/decks-meta" ><a>TIER LIST</a></Link>
      <Link href="/decks"><a>DECKS COMUNIDAD</a></Link>
      <Link href="/torneos"><a>TORNEOS</a></Link>
	  <Link href="/articulos"><a>ARTÍCULOS</a></Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
      </div>
      </div>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>

    )
    
}

export default Header;

