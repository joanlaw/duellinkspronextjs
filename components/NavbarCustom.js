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
    Input
  } from '@nextui-org/react';
  import { SearchIcon } from "./SearchIcon";
  import { AcmeLogo } from "./AcmeLogo";
  import Link from 'next/link';
  import { parse } from 'cookie';

  export default function NavbarCustom() {
    const [userImage, setUserImage] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [username, setUsername] = useState(null);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
      // Extrae el token de la URL si está presente
      const urlParams = new URLSearchParams(window.location.search);
      const tokenFromUrl = urlParams.get('token');
      
      // Usa el token de la URL si está presente, de lo contrario, busca en el localStorage
      const token = tokenFromUrl || localStorage.getItem("token");
      
      if (tokenFromUrl) {
        localStorage.setItem("token", tokenFromUrl); // Almacena el token en el localStorage
      }
  
      if (token) {
        fetch("https://api.duellinks.pro/get-user-info/", {
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => response.json())
        .then((data) => {
          console.log("User info response:", data);
          setUserImage(data.authenticated ? data.image : null);
          setAuthenticated(data.authenticated);
          setUsername(data.username);
        })
        .catch((error) => {
          console.error("Error fetching user info:", error);
          localStorage.removeItem("token"); // Borra el token del localStorage
          setAuthenticated(false); // Actualiza el estado del usuario a no autenticado
        });
      } else {
        setAuthenticated(false); // Set user as unauthenticated if no token
      }
    }, []);
  
    const handleLogin = () => {
      window.location.href = "https://api.duellinks.pro/login";
    };

    return (
      <Navbar isBordered className="">
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
          <NavbarItem>
            <Link href="/decks-meta">
              Tier List
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
          <NavbarItem>
            <Link href="/decks-meta">
              Tier List
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
        <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
          />

          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              {authenticated ? (
                <div className="flex gap-4 items-center">
                <Avatar
                  isBordered radius="full"
                  className="flex gap-4 items-center cursor-pointer"
                  src={userImage}
                />
                </div>
              ) : (
                <div className="flex gap-4 items-center cursor-pointer">
                <Avatar
                  isBordered radius="full"
                  className="flex gap-4 items-center"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
                </div>
              )}
            </DropdownTrigger>

            {authenticated ? (
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">{userImage ? "Logged in as" : "Login"}</p>
                <p className="font-semibold">{userImage ? username : "Login"}</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
                </DropdownItem>
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
