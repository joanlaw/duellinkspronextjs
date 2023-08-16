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
      setVideos(data.docs);
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
    Últimos artículos y videos
  </h2>
  <div className="container mx-auto py-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {videos
        .slice(-resultsToShow)
        .reverse()
        .map(({ titulo, banner_video, _id }) => (
          <div className="col-span-1" key={_id}>
            <Link href={`/videos/${encodeURIComponent(titulo)}`}>
              <div className="bg-gray-800 animate__animated animate__fadeInUp p-4 rounded-lg">
                <div className="overflow-hidden">
                  <img
                    src={banner_video}
                    alt="a wallpaper"
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-4">
                  <h4 className="text-xl font-semibold">{titulo}</h4>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  </div>
  {resultsToShow < videos?.length && (
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
