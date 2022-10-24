import React from "react";
import Cardlist from "./Cardlist";
import Link from "next/link";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function Header() {

    return(
<header id='header' className='fixed-top  ' >
<div className='container d-flex align-items-center' >
<Link href='/' className="navbar-brand"  ><a><img src='https://res.cloudinary.com/dqofcbeaq/image/upload/q_auto/v1663790369/iconos%20dlp/ico-d01_kui7ic.png' height="70" ></img></a></Link>  
<nav className='nav-menu d-none d-lg-block' >
<ul>
  <li className='active' href='#' ></li>
  <li><Link href="/cartas" ><a>Cartas</a></Link></li>
  
  
  <li><Link href="/decks-meta" ><a>TIER LIST</a></Link></li>
  <li><Link href="/decks"><a>DECKS COMUNIDAD</a></Link></li>
  <li><Link href="/noticias"><a>NOTICIAS</a></Link></li>
</ul>

</nav>
<button className="btn loginheader ">LOGIN</button>

</div>

</header>

    )
    
}

export default Header;

