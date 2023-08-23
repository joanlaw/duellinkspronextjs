import React, { useState, useEffect } from 'react';
import TournamentAdminPanel from '../../components/torneos/TournamentAdminPanel';
import NavbarCustom from '../../components/NavbarCustom';
import FooterCustom from '../../components/FooterCustom';
import UserLeagues from '../../components/torneos/UserLeagues'; 

function index() {
  return (
    <div className="flex flex-col min-h-screen">
<NavbarCustom />
        <div className='container mx-auto'>
        <h1 className="font-bold text-3xl">Panel de organizador</h1>
        <UserLeagues />
        </div>
        <FooterCustom />
    </div>
  )
}

export default index