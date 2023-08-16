import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  Avatar,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
  NavbarMenu,
  NavbarMenuToggle,
  useToasts,
} from '@nextui-org/react';
import { SearchIcon } from "./SearchIcon";
import { AcmeLogo } from "./AcmeLogo";
import Link from 'next/link';
import { parse } from 'cookie';

export default function NavbarCustom() {
  const [userImage, setUserImage] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);


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
        setAuthenticated(data.authenticated);
      })
      .catch((error) => {
        console.error("Error fetching user info:", error);
      });
  }, []);

  const handleLogin = () => {
    window.location.href = "https://api.duellinks.pro/login";
  };

  return (
    <Navbar isBordered className="bg-[#0a141d]">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label="Open Menu"
          active={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand className="mr-4">
          <AcmeLogo />
          <Link href="/">
            <p className="font-bold text-inherit">DUEL LINKS PRO</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarMenu active={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <NavbarItem>
          <Link href="/mazos">
            Decks
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/torneos">
            Torneos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/cards">
            Cartas
          </Link>
        </NavbarItem>
      </NavbarMenu>

      <NavbarContent className="hidden sm:flex flex-grow gap-4 justify-between">
        <NavbarBrand className="mr-4">
          <AcmeLogo />
          <Link href="/">
            <p className="font-bold text-inherit">DUEL LINKS PRO</p>
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Link href="/mazos">
            Decks
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/torneos">
            Torneos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/cards">
            Cartas
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        {/*...otros elementos del Navbar...*/}

        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            {authenticated ? (
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="User"
                size="sm"
                src={userImage}
              />
            ) : (
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            )}
          </DropdownTrigger>

          {authenticated ? (
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">{userImage ? "Logged in as" : "Login"}</p>
                  <p className="font-semibold">{userImage ? userImage : "Login"}</p>
              </DropdownItem>
              {/*... otros elementos del menú ... */}
            </DropdownMenu>
          ) : (
            <DropdownMenu aria-label="Login" variant="flat">
              <DropdownItem key="login" onClick={handleLogin}>
                Login
              </DropdownItem>
            </DropdownMenu>
          )}
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
