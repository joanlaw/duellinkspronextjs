import React, { useState, useEffect } from 'react';
import CreateTournamentForm from '../../components/torneos/CreateTournamentForm';
import NavbarCustom from '../../components/NavbarCustom';
import FooterCustom from '../../components/FooterCustom';
import UserLeagues from '../../components/torneos/UserLeagues';

function index() {
  return (
    <div className="flex flex-col min-h-screen">
<NavbarCustom />
        <div className='container mx-auto'>
        <h1 className="font-bold text-3xl">Crea un torneo</h1>
        <CreateTournamentForm />
        </div>
        <UserLeagues />
        <FooterCustom />
    </div>
  )
}

export default index