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

import stageoftrickstar from "../assets/stageoftrickstar.webp";


export default function Home(){

    const eventos = [
        {
          id: 1,
          title: "Stage of Trickstar",
          image: stageoftrickstar,
          url: "/noticias/stage-of-trickstar",
     //    text: "Stage of Trickstar"
        }
     //   {
    //      id: 2,
     //     title: "Tier 1",
     //  //   image: image2,
     //     url: "/decks-cominidad",
     //     text: <Link to={"/salamangrande"}>Salamangrande</Link>
    //    },
    //    {
    //      id: 3,
    //      title: "Tier 2",
      //    image: image3,
     //     url: "/noticias",
    //      text: "noticias"
  //      },
   //     {
    //      id: 4,
    //      title: "Tier 3",
        //  image: image3,
   //       url: "/noticias",
    //      text: "noticias"
   //     }, 
      ];
      


    return(
      <div>
            <Header />
      <br />
      <div className="">
        <Clusters />
        <div>
            <br />
        <h2>Noticias y eventos</h2>
        <br />
        <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {eventos.map(({ title, image, url, id, text }) => (
          <div className="col-md-6" key={id}>
     <Link href={url} ><a><Eventos imageSource={image} title={title} /></a></Link>
          </div>
        ))}
      </div>
    </div>
     </div>
        <div className='footermargin' ></div>
        <br />
      </div>
        <Footer />
      </div>
    )
}