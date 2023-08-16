import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import { AcmeLogo } from "./AcmeLogo";
import Link from 'next/link';
import { parse } from 'cookie';

export default function NavbarCustom() {
  const [userImage, setUserImage] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

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
        <NavbarContent justify="start">
          <NavbarBrand className="mr-4">
            <AcmeLogo />
            <Link href="/">
            <p className="font-bold text-inherit">DUEL LINKS PRO</p>
            </Link>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-3">
            <NavbarItem>
              <Link href="/mazos">
                <p className="text-foreground">Decks</p>
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="/torneos">
                <p className="text-foreground">Torneos</p>
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/cards">
                <p className="text-foreground">Cartas</p>
              </Link>
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>

        <NavbarContent as="div" className="items-center" justify="end">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder=""
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
          />
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
    <p className="font-semibold">Logged in as</p>
    <p className="font-semibold">{username}</p>
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
