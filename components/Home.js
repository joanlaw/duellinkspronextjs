import React, { useState, useEffect } from 'react'
import Link from 'next/link'
//import Card from './Card.js'
//import axios from 'axios'
//import { Pagination } from '../pages/cartas/#/Pagination.js'
import Header from './Header.js'
import Clusters from './Clusters'
import Footer from './Footer'
import Eventos from './Eventos'
//import styles from '../styles/Home.module.css'
import NavbarCustom from './NavbarCustom.js'
import FooterCustom from './FooterCustom.js'

import stageoftrickstar from "../assets/stageoftrickstar.webp";


export default function Home(){



    return(
      <>
      <NavbarCustom />
      <div className='flex flex-col min-h-screen'>
            

        <Clusters /> 
       
        <FooterCustom />
      </div>
      </>
    )
}