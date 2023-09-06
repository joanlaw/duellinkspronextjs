import React, { useState, useEffect } from "react";
import Cluster from "./Cluster";
import Link from "next/link";

import image1 from "../assets/Pick_Tierlist.png";
import image2 from "../assets/Pick_Comunidad.png";
import image3 from "../assets/Pick_Noticias.png";
import image4 from "../assets/tieractual.png";

const clusters = [
  {
    id: 1,
    title: "Tier List",
    image: image4,
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
    url: "/leagues",
    text: "torneos",
  },
];

function Clusters() {
  const [videos, setVideos] = useState([]);
  const [resultsToShow, setResultsToShow] = useState(6);

  const [reportes, setReportes] = useState([]);

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
      setVideos(data.docs);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  console.log("Videos state:", videos);

  
  // Función para obtener la lista de reportes desde la API
  const fetchReportes = async () => {
    try {
      const response = await fetch("https://backend-dlp-neuronube.koyeb.app/torneos");
      const data = await response.json();
      console.log("Data from API:", data);
      setReportes(data.docs);
    } catch (error) {
      console.error("Error fetching reportes:", error);
    }
  };

  useEffect(() => {
    fetchReportes();
  }, []);

  console.log("Reportes state:", reportes);

  return (
    <>
<div className="min-h-screen bg-black-900 text-white">
  <div className="container mx-auto py-10">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {clusters.map(({ title, image, url, id }) => (
        <div className="col-span-1" key={id}>
          <Link href={url}>
            <Cluster imageSource={image} title={title} />
          </Link>
        </div>
      ))}
    </div>
  </div>
  <h2 className="text-2xl font-bold mt-8 mx-auto text-center">
    Reportes de torneos
  </h2>
  <div className="container mx-auto py-6">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {reportes
      .slice(-resultsToShow)
      .reverse()
      .map(({ nombre, banner, _id }) => (
        <div className="col-span-1 relative" key={_id}>
          <Link href={`/torneos/${encodeURIComponent(nombre)}`}>
            <div className="flex flex-col items-center justify-center bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out animate__animated animate__fadeInUp">
              <img
                src={banner}
                alt="a wallpaper"
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-semibold px-2 py-1">
                Torneos
              </div>
              <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-75">
                <h4 className="text-white font-semibold text-center">{nombre}</h4>
              </div>
            </div>
          </Link>
        </div>
      ))}
  </div>
</div>






  {resultsToShow < reportes?.length && (
    <div className="text-center mt-6">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleShowMore}
      >
        Mostrar Más
      </button>
    </div>
  )}
</div>
</>
  );
}

export default Clusters;
