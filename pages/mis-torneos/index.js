import React from 'react'
import TournamentList from '../../components/torneos/TournamentList'
import NavbarCustom from '../../components/NavbarCustom'
import FooterCustom from '../../components/FooterCustom'

import { useUser } from "../../contexts/UserContext"; // Asegúrate de importar correctamente el hook 

function Index() {

    const { discordId } = useUser();

  return (
    <div>
        <NavbarCustom />
        <div>
        <TournamentList discordId={discordId} />
        </div>
        <FooterCustom />
    </div>
  )
}

export default Index