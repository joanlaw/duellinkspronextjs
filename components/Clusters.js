import React, { useState, useEffect } from "react";
import Cluster from "./Cluster";
import Link from "next/link";

import image1 from "../assets/Pick_Tierlist.png";
import image2 from "../assets/Pick_Comunidad.png";
import image3 from "../assets/Pick_Noticias.png";

const clusters = [
  {
    id: 1,
    title: "Tier List",
    image: image1,
    url: "/decks-meta",
    text: "los mejores decks meta",
  },
  {
    id: 2,
    title: "Decks de la comunidad",
    image: image2,
    url: "/mazos",
    text: "decks de la comunidad",
  },
  {
    id: 3,
    title: "Torneos",
    image: image3,
    url: "/torneos",
    text: "torneos",
  },
];

function Clusters() {
  const [videos, setVideos] = useState([]);

  const [resultsToShow, setResultsToShow] = useState(6);

  // Función para manejar el evento de clic del botón "Mostrar Más"
  const handleShowMore = () => {
    setResultsToShow(prevResults => prevResults + 6);
  };

  // Función para obtener la lista de videos desde la API
  const fetchVideos = async () => {
    try {
      const response = await fetch("https://backend-dlp-neuronube.koyeb.app/videos");
      const data = await response.json();
      console.log("Data from API:", data);
      setVideos(data.docs); // Actualizar el estado con data.docs en lugar de data.data
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  console.log("Videos state:", videos);

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
          {clusters.map(({ title, image, url, id, text }) => (
            <div className="col-md-4" key={id}>
              <Link href={url}>
                <a>
                  <Cluster imageSource={image} title={title} />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <h2>Últimos articulos y videos</h2>
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
        {videos
    .slice(-resultsToShow)
    .reverse()
    .map(({ titulo, banner_video, _id }) => (
      <div className="col-md-4" key={_id}>
        <Link href={`/videos/${encodeURIComponent(titulo)}`}>
          <a>
            <div className="card text-center bg-dark animate__animated animate__fadeInUp">
              <div className="overflow">
                <img src={banner_video} alt="a wallpaper" className="card-img-top" />
              </div>
              <div className="">
                <h4 className="card-title">{titulo}</h4>
                <p className="badge-container">
                  {/*<span className="badge bg-danger">{link_video}</span>*/}
                </p>
              </div>
            </div>
          </a>
        </Link>
      </div>
    ))}
        </div>
      </div>
      {/* Botón "Mostrar Más" */}
      {resultsToShow < videos?.length && (
        <div className="show-more-container">
          <button className="show-more-button" onClick={handleShowMore}>
            Mostrar Más
          </button>
        </div>
      )}
    </>
  );
}

export default Clusters;
