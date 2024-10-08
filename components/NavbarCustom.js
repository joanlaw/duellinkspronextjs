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
  //import { parse } from 'cookie';
  import { useUser } from '../contexts/UserContext'



  export default function NavbarCustom() {
    const { userImage, authenticated, username, handleLogin } = useUser();

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
      
      <Navbar isBordered >
          
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
          <NavbarItem>
            <Link href="/leagues">
              Torneos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/cards">
              Cartas
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/rushes">
              Rush
            </Link>
          </NavbarItem>
          <NavbarItem>
          <Link href="/deck-calculator">
              Calculadora DLP
            </Link>
          </NavbarItem>
         {/*    <NavbarItem>
     <Link href="/clanes">
              Clanes
            </Link>  
          </NavbarItem>*/} 
        </NavbarMenu>

        <NavbarContent className="hidden sm:flex flex-grow gap-4 justify-between items-center" justify="start">
          <NavbarBrand >
            <AcmeLogo />
            <Link href="/">
            <p className="font-bold text-inherit" style={{ fontSize: "1.2rem" }}> DUEL LINKS PRO</p>  
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
          <NavbarItem>
            <Link href="/leagues">
              Torneos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/cards">
              Cartas
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/rushes">
              Rush
            </Link>
          </NavbarItem>
        <NavbarItem>
          <Link href="/deck-calculator">
              Calculadora DLP
            </Link>
          </NavbarItem>
     {/*       <NavbarItem>
       <Link href="/clanes">
              Clanes
            </Link>  
          </NavbarItem>     */} 
        </NavbarContent>
     

        <NavbarContent as="div" className="items-center" justify="end">
        <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder=""
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
                  color="success"
                  className="flex gap-4 items-center cursor-pointer"
                  src={userImage}
                />
                </div>
              ) : (
                <div className="flex gap-4 items-center cursor-pointer">
                <Avatar
                  
                  isBordered radius="full"
                  color="danger"
                  className="flex gap-4 items-center"
                  src="https://res.cloudinary.com/dqofcbeaq/image/upload/v1693376680/iconos%20dlp/403017_avatar_default_head_person_unknown_icon_grry7q.png"
                />
                </div>
              )}
            </DropdownTrigger>

            {authenticated ? (
              <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <Link href="/user-panel">
                <p className="font-semibold">{userImage ? "Logged in as" : "Login"}</p>
                <p className="font-semibold">{userImage ? username : "Login"}</p>
                </Link>
                </DropdownItem>
                
                                
                    <DropdownItem key="settings">
                  <Link href="/crear-torneo">
                    <p>Crear Torneo</p>
                  </Link>
                </DropdownItem>

                <DropdownItem key="team_settings">
                  <Link href="/organizer-dashboard">
                    <p>Administrar torneo</p>
                  </Link>
                </DropdownItem>

                <DropdownItem key="analytics">
                  <Link href="/crear-clan">
                    <p>Administrador de clan</p>
                  </Link>
                </DropdownItem>

                <DropdownItem key="system">
                  <Link href="/mis-torneos">
                    <p>Mis torneos</p>
                  </Link>
                </DropdownItem>

                <DropdownItem key="configurations">
                  <Link href="/#">
                    <p>Configuración</p>
                  </Link>
                </DropdownItem>

                <DropdownItem key="help_and_feedback">
                  <Link href="/#">
                    <p>Help & Feedback</p>
                  </Link>
                </DropdownItem>

                <DropdownItem key="logout" color="danger">
                  <Link href="/#">
                    <p>Log Out</p>
                  </Link>
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
