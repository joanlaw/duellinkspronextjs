import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../../contexts/UserContext';

function TournamentUserPanel({ onClose, leagueId }) {
  const { discordId, token } = useUser();
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageFiles, setImageFiles] = useState({
    main_deck: null,
    extra_deck: null,
    side_deck: null,
    especial_deck: null,
  });

  const [playerDeck, setPlayerDeck] = useState(null);

  useEffect(() => {
    const fetchTournaments = async () => {
        try {
          const response = await fetch(`https://api.duellinks.pro/leagues/${leagueId}/tournaments`);
          
          if (response.ok) {
            const data = await response.json();
            setTournaments(data);
          } else {
            // Manejo de errores en caso de respuesta no exitosa (por ejemplo, 404)
            console.error('Error al recuperar los torneos:', response.statusText);
          }
        } catch (err) {
          console.error('Error al recuperar los torneos:', err);
        } finally {
          setLoading(false);
        }
      };

    const fetchPlayerDeck = async () => {
      try {
        const response = await axios.get(
          `https://api.duellinks.pro/leagues/${leagueId}/playerdecks`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              discordId: discordId,
            },
          }
        );
        if (response.data) {
          setPlayerDeck(response.data);
        }
      } catch (error) {
        console.error('Error al obtener el mazo del jugador:', error);
      }
    };

    fetchTournaments();
    fetchPlayerDeck();

  }, [leagueId, discordId, token]);

  const handleImageChange = (event) => {
    const { name, files } = event.target;
    if (files.length > 0) {
      setImageFiles((prevState) => ({ ...prevState, [name]: files[0] }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    for (const deckType in imageFiles) {
      if (imageFiles[deckType]) {
        formData.append(deckType, imageFiles[deckType]);
      }
    }

    try {
      const response = await axios.post(
        `https://api.duellinks.pro/leagues/${leagueId}/playerdecks`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
          params: {
            discordId: discordId,
          },
        }
      );

      console.log('Imágenes subidas:', response.data);
    } catch (error) {
      console.error('Error al subir las imágenes:', error);
    }
  };

  //obtener las imagenes preview
  const getImagePreview = (deckType) => {
    if (imageFiles[deckType]) {
      return URL.createObjectURL(imageFiles[deckType]);
    }
  
    if (playerDeck && playerDeck[deckType] && playerDeck[deckType].url) {
      return playerDeck[deckType].url;
    }
  
    return null;
  };
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75 overflow-y-auto">
    <div className="bg-white p-6 w-3/4 max-w-3xl rounded-md shadow-lg text-black">
      <h2 className="text-xl font-semibold mb-4">Deck del torneo</h2>
      {loading ? (
        <p>Cargando torneos...</p>
      ) : (
        <>
          <ul className="list-disc pl-6 mb-4">
            {tournaments.map((tournament) => (
              <li key={tournament._id}>{tournament.league_name}</li>
            ))}
          </ul>
          
          {playerDeck ? (
            <div>
  <h3>Previsualización de tu mazo:</h3>
  {["main_deck", "extra_deck", "side_deck", "especial_deck"].map(deckType => (
    <div className="mb-4" key={deckType}>
      <label className="block mb-2">{deckType.replace("_", " ").toUpperCase()}:</label>
      {getImagePreview(deckType) && (
        <img src={getImagePreview(deckType)} alt="Preview" className="mb-2 w-1/4 h-auto" />
      )}
    </div>
  ))}
</div>
          ) : (
            <form onSubmit={handleSubmit}>
              {["main_deck", "extra_deck", "side_deck", "especial_deck"].map(deckType => (
                <div className="mb-4" key={deckType}>
                  <label htmlFor={deckType} className="block mb-2">{deckType.replace("_", " ").toUpperCase()}:</label>
                  {getImagePreview(deckType) && (
                    <img src={getImagePreview(deckType)} alt="Preview" className="mb-2 w-1/4 h-auto" />
                  )}
                  <input type="file" name={deckType} onChange={handleImageChange} />
                </div>
              ))}
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Subir Imágenes
              </button>
            </form>
          )}
          
          <button
            className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
            onClick={onClose}
          >
            Cerrar
          </button>
        </>
      )}
    </div>
  </div>
  );
}

export default TournamentUserPanel;