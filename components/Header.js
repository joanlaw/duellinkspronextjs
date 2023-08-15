import React from "react";
import { useState, useEffect } from "react";
import Cardlist from "./Cardlist";
import Link from "next/link";
import Script from 'next/script';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { parse } from 'cookie'; // Importa parse de la librería 'cookie'


function Header() {

	const [userImage, setUserImage] = useState(null);

	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	const handleLogin = () => {
		window.location.href = "https://api.duellinks.pro/login";
	  };

	  useEffect(() => {
		const cookies = parse(document.cookie);
		console.log("Cookies:", cookies);
	  
		fetch("https://api.duellinks.pro/get-user-info/", {
			credentials: 'include'
		})
		  .then((response) => {
			console.log("Response headers:", response.headers); // Verificar los headers de la respuesta
			return response.json();
		  })
		  .then((data) => {
			console.log("User info response:", data); // Verificar la respuesta del servidor
			setUserImage(data.authenticated ? data.image : null);
		  })
		  .catch((error) => {
			console.error("Error fetching user info:", error); // Verificar si hay errores en la llamada fetch
		  });
	  }, []);
	  
  
	  return (
<header>
  <div className="container">
    <div className="header-content">
      <Link href="/" className="navbar-brand">
        <a>
          <img
            src="https://res.cloudinary.com/dqofcbeaq/image/upload/q_auto/v1663790369/iconos%20dlp/ico-d01_kui7ic.png"
            height="70"
            alt="Logo"
          />
        </a>
      </Link>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
    <nav ref={navRef}>
      <Link href="/cards"><a>CARTAS</a></Link>
      <Link href="/decks-meta"><a>TIER</a></Link>
      <Link href="/mazos"><a>DECKS</a></Link>
      <Link href="/torneos"><a>TORNEOS</a></Link>
      <Link href="/blogs"><a>BLOG</a></Link>
      <button className="nav-btn nav-close-btn" onClick={showNavbar}>
        <FaTimes />
      </button>
    </nav>
    {/* Mueve user-image dentro del nav */}
    <nav className="d-none d-md-block">
      {userImage ? (
        <Link href="/user">
          <a>
            <img
              src={userImage}
              alt="User"
              className="user-image"
            />
          </a>
        </Link>
      ) : null}
    </nav>
    {/* Agrega el botón de inicio de sesión fuera del menú */}
    <div className="login-button-container">
      {userImage ? null : (
        <button className="login-button" onClick={handleLogin}>
          LOGIN
        </button>
      )}
    </div>
  </div>
</header>

	  );
}

export default Header;

