import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import tierlist from '../data/tier/tierlist.json';
import {Divider} from "@nextui-org/react";

function ImageCard({ data, archetypes }) {
    const arquetipo = data?.arquetipo || '';
    const url = data?.url || '#';  // Añade esta línea para manejar la URL
    const defaultImage = '';
    const [imageArquetipo, setImageArquetipo] = useState(defaultImage);

  useEffect(() => {
    // Verifica si archetypes está disponible y no está vacío
    if (archetypes && Array.isArray(archetypes) && archetypes.length > 0) {
      const arquetipoData = archetypes.find(
        (arquetipoItem) => arquetipoItem.nombre_arquetipo === arquetipo
      );
      if (arquetipoData) {
        // Asegúrate de que la URL de la imagen sea válida
        const imageUrl = arquetipoData.image_arquetipo || defaultImage;
        setImageArquetipo(imageUrl);
      } else {
        setImageArquetipo(defaultImage);
      }
    } else {
      setImageArquetipo(defaultImage);
    }
  }, [arquetipo, archetypes]);

  return (
    <div className="relative mb-4">
      <div className="relative">
        <a href={url}> {/* Añade esta línea */}
          <img
            src={imageArquetipo}
            alt={arquetipo}
            className="w-40 h-40 object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = defaultImage;
            }}
          />
        </a> {/* Añade esta línea */}
        <div className="absolute bottom-0 left-0 w-full text-center bg-black bg-opacity-70 text-white text-sm py-1">
          {arquetipo}
        </div>
      </div>
    </div>
  );
}

function LocalDeckButtons() {
  const [localDecks, setLocalDecks] = useState([]); 
  const [archetypes, setArchetypes] = useState([]); 
  
  useEffect(() => {
    setLocalDecks(tierlist);
    getArchetypes();
  }, []);
  
  const getArchetypes = () => {
    const baseUrl = 'https://backend-dlp-neuronube.koyeb.app/arquetipos/';
    const allArchetypes = [];
  
    const fetchPage = (url) => {
      return axios
        .get(url)
        .then((res) => {
          const archetypesData = res.data.arquetipos;
          allArchetypes.push(...archetypesData);
  
          if (res.data.next) {
            return fetchPage(res.data.next);
          } else {
            setArchetypes(allArchetypes);
          }
        })
        .catch((err) => console.log(err));
    };
    fetchPage(baseUrl);
  };

  // Ordenar los decks por tier
  const sortedDecks = [...localDecks].sort((a, b) => parseInt(a.tier) - parseInt(b.tier));

  // Separar los arquetipos por tier
  const tier1Decks = sortedDecks.filter((deck) => deck.tier === 1);
  const tier2Decks = sortedDecks.filter((deck) => deck.tier === 2);
  const tier3Decks = sortedDecks.filter((deck) => deck.tier === 3);
  const tier4Decks = sortedDecks.filter((deck) => deck.tier === 4);

  return (
    <div className="local-deck-container">
  <div className="local-deck-intro mb-8">
    <h1 className="text-3xl font-bold mb-4">Tier List</h1>
    <p className="text-white-500">
      Bienvenidos a la Tier List definitiva de Yu-Gi-Oh! Duel Links en nuestra comunidad. Esta lista representa los mazos más competitivos y potentes utilizados en nuestros torneos. Se actualizará regularmente para reflejar las nuevas tendencias y estrategias que emergen con cada torneo, así que asegúrate de volver a consultar para mantenerte al día.
    </p>
  </div>
  <div className="container mx-auto my-4 p-4 bg-yellow-100 border-l-4 border-yellow-400 text-yellow-700">
  <p className="font-medium">
    <i className="fas fa-info-circle mr-2"></i>
    Actualmente hubo una Ban List en el juego por lo que esta Tier List no es válida, se está a la espera de los resultados de los torneos para actualizarla.
  </p>
</div>
    <div className="local-deck-buttons-container">
      <div>
        <h2 className="text-xl font-bold mb-2">Tier 1</h2>
       
        {tier1Decks.map((deck, index) => (
          <button key={index} className="local-deck-button">
            <ImageCard data={{ arquetipo: deck.arquetipo, url: deck.url }} archetypes={archetypes} />
          </button>
        ))}
      </div>
      <Divider orientation="horizontal" />
      <div>
        <h2 className="text-xl font-bold mb-2">Tier 2</h2>
        {tier2Decks.map((deck, index) => (
          <button key={index} className="local-deck-button">
            <ImageCard data={{ arquetipo: deck.arquetipo, url: deck.url }} archetypes={archetypes} />
          </button>
        ))}
      </div>
      <Divider orientation="horizontal" />
      <div>
        <h2 className="text-xl font-bold mb-2">Tier 3</h2>
        {tier3Decks.map((deck, index) => (
          <button key={index} className="local-deck-button">
            <ImageCard data={{ arquetipo: deck.arquetipo, url: deck.url }} archetypes={archetypes} />
          </button>
        ))}
      </div>
      <Divider orientation="horizontal" />
      <div>
        <h2 className="text-xl font-bold mb-2">Tier 4 Rogue</h2>
        {tier4Decks.map((deck, index) => (
          <button key={index} className="local-deck-button">
            <ImageCard data={{ arquetipo: deck.arquetipo, url: deck.url }} archetypes={archetypes} />
          </button>
        ))}
      </div>
    </div>
    </div>
  );
}

export default LocalDeckButtons;
