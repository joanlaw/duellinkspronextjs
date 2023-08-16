import React from "react";
import { useState, useEffect } from "react";
import Cardlist from "./Cardlist";
import Link from "next/link";
import Script from 'next/script';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { parse } from 'cookie';

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
        console.log("Response headers:", response.headers);
        return response.json();
      })
      .then((data) => {
        console.log("User info response:", data);
        setUserImage(data.authenticated ? data.image : null);
      })
      .catch((error) => {
        console.error("Error fetching user info:", error);
      });
  }, []);

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <Link href="/" className="navbar-brand">
              <img
                src="https://res.cloudinary.com/dqofcbeaq/image/upload/q_auto/v1663790369/iconos%20dlp/ico-d01_kui7ic.png"
                height="70"
                alt="Logo"
              />
          </Link>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </div>
        <nav ref={navRef}>
          <Link href="/cards">CARTAS</Link>
          <Link href="/decks-meta">TIER</Link>
          <Link href="/mazos">DECKS</Link>
          <Link href="/torneos">TORNEOS</Link>
          <Link href="/blogs">BLOG</Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <div className="login-button-container">
          {userImage ? (
            <Link href="/user">
                <img
                  src={userImage}
                  alt="User"
                  className="user-image"
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                  }}
                />
            </Link>
          ) : (
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
