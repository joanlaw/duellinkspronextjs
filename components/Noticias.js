import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Link from 'next/link';
import Eventos from './Eventos';

import stageoftrickstar from "../assets/stageoftrickstar.webp";
function Noticias() {


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
  return (
    <div>
        <Header />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {eventos.map(({ title, image, url, id, text }) => (
          <div className="col-md-6" key={id}>
     <Link href={url} >      <a> <Eventos imageSource={image} title={title} /> </a> </Link>
          </div>
        ))}
      </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
        <Footer />
    </div>
   
  )
}

export default Noticias