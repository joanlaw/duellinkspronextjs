import React from "react";
import Clustermeta from "./Clustermeta";

import image1 from "../assets/image1.jpg";
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import Link from "next/link";

const clustersmeta = [
  {
    id: 1,
    title: "Tier 0",
  //  image: image1,
    url: "/decks-meta/salamgrande",
    text: <Link href={"decks-meta/salamangrande"}><a>Salamangrande</a></Link>
  },
  {
    id: 2,
    title: "Tier 1",
  //  image: image2,
    url: "/decks-cominidad",
    text: ""
  },
  {
    id: 3,
    title: "Tier 2",
  //  image: image3,
    url: "/noticias",
    text: <Link href={"/ojos-anomalos"}><a>Ojos Anómalos</a></Link>
  },
  {
    id: 4,
    title: "Tier 3",
  //  image: image3,
    url: "/noticias",
    text: <Link href={"/d-d-d"}><a>D/D/D</a></Link> ,
    text2: <Link href={"/abismo-ardiente"}><a>Abismo Ardiente</a></Link>,
    text3: <Link href={"/heroes"}><a>Héroes</a></Link>
  },
];

function Clustersmeta() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {clustersmeta.map(({ title, image, url, id, text, text2, text3 }) => (
          <div className="col-md-12" key={id}>
            <Clustermeta  title={title}  text={text} text2={text2} text3={text3} />
           {/* <Clustermeta imageSource={image} title={title}  text={text} />*/} 
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clustersmeta;