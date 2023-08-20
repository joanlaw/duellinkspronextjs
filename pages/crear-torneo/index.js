import React, { useState, useEffect } from 'react';
import CreateTournamentForm from '../../components/torneos/CreateTournamentForm';
import NavbarCustom from '../../components/NavbarCustom';
import FooterCustom from '../../components/FooterCustom';

function index() {
  return (
    <div className="flex flex-col min-h-screen">
<NavbarCustom />
        <div className='container mx-auto'>
        <h1>Xrea un torneo</h1>
        <CreateTournamentForm />
        </div>
        <FooterCustom />
    </div>
  )
}

export default index