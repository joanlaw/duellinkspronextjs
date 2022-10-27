import React from "react";
import Cluster from "./Cluster";
import Link from "next/link";

//import { Link } from "react-router-dom";

import image1 from "../assets/Pick_Tierlist.png";
import image2 from '../assets/Pick_Comunidad.png'
import image3 from '../assets/Pick_Noticias.png'

const clusters = [
  {
    id: 1,
    title: "Tier List",
    image: image1,
    url: "/decks-meta",
    text: "los mejores decks meta"
  },
  {
    id: 2,
    title: "Decks de la comunidad",
    image: image2,
    url: "/decks",
    text: "decks de la comunidad"
  },
  {
    id: 3,
    title: "Noticias",
    image: image3,
    url: "/noticias",
    text: "noticias"
  },
];

function Clusters() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {clusters.map(({ title, image, url, id, text }) => (
          <div className="col-md-4" key={id}>
        <Link href={url}><a><Cluster imageSource={image} title={title}  /></a></Link> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clusters;