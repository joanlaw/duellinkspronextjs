import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../../contexts/UserContext';
import { Button } from '@nextui-org/react';

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

  const [playerDecks, setPlayerDecks] = useState({});
  const [enlargedImage, setEnlargedImage] = useState(null);

  // Agregamos el estado para la alerta
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState(null); // puede ser "success", "error", etc.


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
            setPlayerDecks(prevDecks => ({...prevDecks, [leagueId]: response.data}));
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
      const file = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file); // convertir el archivo en Data URL
      reader.onloadend = function (e) {
        setImageFiles((prevState) => ({
          ...prevState,
          [name]: { file: files[0], preview: reader.result },
        }));
      };
    }
  };

  const removeImage = (deckType) => {
    setImageFiles((prevState) => {
      const newState = { ...prevState };
      newState[deckType] = null;
      return newState;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
  
    // Añadir solo las imágenes que existen al FormData
    for (const deckType in imageFiles) {
      if (imageFiles[deckType] && imageFiles[deckType].file) {
        formData.append(deckType, imageFiles[deckType].file);
      }
    }
  
    // Verificar si hay al menos una imagen para enviar
    let atLeastOneImage = formData.getAll('main_deck').length > 0 ||
                          formData.getAll('extra_deck').length > 0 ||
                          formData.getAll('side_deck').length > 0 ||
                          formData.getAll('especial_deck').length > 0;
  
    if (!atLeastOneImage) {
      setAlertMessage('Por favor, suba al menos una imagen.');
      setAlertType('error');
      return;
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
    
      if (response.status === 200 || response.status === 201) {
        setAlertMessage('Imágenes subidas con éxito.');
        setAlertType('success');
      } else {
        setAlertMessage(`No se pudo subir las imágenes. Código de estado: ${response.status}`);
        setAlertType('error');
      }
    
    } catch (error) {
      console.error('Error al subir las imágenes:', error);
      const errorMessage = error.response?.data?.error || 'Error al subir las imágenes. Verifique su conexión y vuelva a intentar.';
      setAlertMessage(errorMessage);
      setAlertType('error');
    }
  };
  

  //obtener las imagenes preview
  const getImagePreview = (deckType, leagueId) => {
    const currentDeck = playerDecks[leagueId];
    if (currentDeck && currentDeck[deckType] && currentDeck[deckType].url) {
      return currentDeck[deckType].url;
    }
    return null;
  };

  const handleImageClick = (imageSrc) => {
    setEnlargedImage(imageSrc);
  };
  
  const closeEnlargedImage = () => {
    setEnlargedImage(null);
  };
  
  
  
  return (
    <>
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75 overflow-y-auto">
      <div className="bg-white p-6 w-4/5 max-w-4xl h-auto max-h-[80vh] overflow-y-auto rounded-md shadow-lg text-black">
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
            
            {playerDecks[leagueId] ? (
              <div>
                <h3>Previsualización de tu mazo:</h3>
                {["main_deck", "extra_deck", "side_deck", "especial_deck"].map((deckType) => (
                  <div className="mb-4" key={deckType}>
                    <label className="block mb-2">{deckType.replace("_", " ").toUpperCase()}:</label>
                    {getImagePreview(deckType, leagueId) && (
                      <img
                        src={getImagePreview(deckType, leagueId)}
                        alt="Preview"
                        className="mb-2 w-1/4 h-auto cursor-pointer"
                        onClick={() => handleImageClick(getImagePreview(deckType, leagueId))}
                      />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {["main_deck", "extra_deck", "side_deck", "especial_deck"].map((deckType) => (
                  <div className="mb-4" key={deckType}>
                    <label htmlFor={deckType} className="block mb-2">
                      {deckType.replace("_", " ").toUpperCase()}:
                    </label>
                    <input
                      type="file"
                      name={deckType}
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                    {imageFiles[deckType] && imageFiles[deckType].preview && (
                      <div className="image-preview">
                        <img
                          src={imageFiles[deckType].preview}
                          alt={`${deckType} Preview`}
                          className="mb-2 w-1/4 h-auto cursor-pointer"
                          onClick={() => handleImageClick(imageFiles[deckType].preview)}
                        />
                        <button onClick={() => removeImage(deckType)}>
                          Eliminar
                        </button>
                      </div>
                    )}
                  </div>
                ))}
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Subir Imágenes
                </button>
              </form>
            )}
                            {alertMessage && (
  <div className={`p-4 rounded ${alertType === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
    {alertMessage}
  </div>
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

    {enlargedImage && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75" onClick={closeEnlargedImage}>
        <img src={enlargedImage} alt="Enlarged" />
      </div>
    )}
  </>
  );
}

export default TournamentUserPanel;