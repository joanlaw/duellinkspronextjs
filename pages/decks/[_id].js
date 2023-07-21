import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import axios from 'axios';
import { useRouter } from 'next/router';

const DeckViewer = () => {
  const router = useRouter();
  const { _id } = router.query;
  const [deckData, setDeckData] = useState(null);
  const [mainDeckData, setMainDeckData] = useState([]);
  const [extraDeckData, setExtraDeckData] = useState([]);

  useEffect(() => {
    if (_id) {
      axios
        .get(`https://back-render-cloud-dlp.onrender.com/mazos/${_id}`)
        .then((response) => {
          console.log("Deck Data:", response.data);
          setDeckData(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [_id]);

  useEffect(() => {
    if (deckData) {
      const mainDeckIds = Object.keys(deckData.mainDeck);
      const extraDeckIds = Object.keys(deckData.extraDeck);

      const fetchMainDeckData = axios.all(
        mainDeckIds.map((cardId) =>
          axios.get(`https://back-render-cloud-dlp.onrender.com/mazos/${cardId}`)
        )
      );

      const fetchExtraDeckData = axios.all(
        extraDeckIds.map((cardId) =>
          axios.get(`https://back-render-cloud-dlp.onrender.com/mazos/${cardId}`)
        )
      );

      axios
        .all([fetchMainDeckData, fetchExtraDeckData])
        .then(
          axios.spread((mainDeckResponse, extraDeckResponse) => {
            console.log("Main Deck Data:", mainDeckResponse.data);
            console.log("Extra Deck Data:", extraDeckResponse.data);
            setMainDeckData(mainDeckResponse.data);
            setExtraDeckData(extraDeckResponse.data);
          })
        )
        .catch((error) => console.log(error));
    }
  }, [deckData]);

  console.log("Deck ID:", _id);

  return (
    <div className="box-grid container">
      {deckData && (
        <div className="deck-viewer">
          <div className="deck-info">
            <h2>Deck: {deckData.arquetipo}</h2>
            <h3>Jugador: {deckData.jugador}</h3>
            <h3>Habilidad: {deckData.habilidad}</h3>
            <h3>Top: {deckData.top}</h3>
          </div>

          <div className="decks-wrapper">
            <div className="main-deck">
              <h4>Main Deck:</h4>
              <div className="deck-grid">
                {mainDeckData.map((card) => (
                  <div key={card._id} className="card">
                    <img src={card.image.secure_url} alt={card.nombre} />
                  </div>
                ))}
              </div>
            </div>

            <div className="extra-deck">
              <h4>Extra Deck:</h4>
              <div className="deck-grid">
                {extraDeckData.map((card) => (
                  <div key={card._id} className="card">
                    <img src={card.image.secure_url} alt={card.nombre} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeckViewer;
