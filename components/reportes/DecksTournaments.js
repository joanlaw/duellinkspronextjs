import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Divider, CardBody, Spacer } from '@nextui-org/react';

export const DecksTournaments = ({ tournamentName }) => {
    const [decksData, setDecksData] = useState([]);
    const [cardsData, setCardsData] = useState({});
    const [selectedCard, setSelectedCard] = useState(null);

    

  
    useEffect(() => {
      if (tournamentName) {
        const encodedTournamentName = encodeURIComponent(tournamentName);
        axios.get(`https://api.duellinks.pro/torneos/nombre/${encodedTournamentName}`)
          .then(response => {
            const tournamentData = response.data;
            const allDeckIds = [
              tournamentData.top1, 
              tournamentData.top2, 
              tournamentData.top4_1, 
              tournamentData.top4_2, 
              tournamentData.top8_1, 
              tournamentData.top8_2, 
              tournamentData.top8_3, 
              tournamentData.top8_4,
            ].filter(id => id); // Eliminar null o strings vacíos
    
            const fetchDecksData = async () => {
              const deckPromises = allDeckIds.map(deckId => 
                axios.get(`https://api.duellinks.pro/mazos/${deckId}`)
              );
    
              const decksResponse = await Promise.all(deckPromises);
    
              setDecksData(decksResponse.map(response => response.data));
            };
    
            fetchDecksData();
          })
          .catch(error => console.error(error));
      }
    }, [tournamentName]);
    
  
    useEffect(() => {
      if (decksData.length > 0) {
        const fetchAllCardData = async () => {
          const newCardsData = {};
          
          for (const deck of decksData) {
            const mainDeckCards = deck.mainDeck;
            const extraDeckCards = deck.extraDeck;
  
            const mainDeckPromises = mainDeckCards.map((card) =>
              axios.get(`https://api.duellinks.pro/cards/${card.cardId}`)
            );
  
            const extraDeckPromises = extraDeckCards.map((card) =>
              axios.get(`https://api.duellinks.pro/cards/${card.cardId}`)
            );
  
            const [mainDeckResponse, extraDeckResponse] = await Promise.all([
                Promise.all(mainDeckPromises),
                Promise.all(extraDeckPromises)
              ]);
              
         //     console.log('Main Deck Response:', mainDeckResponse);
         //     console.log('Extra Deck Response:', extraDeckResponse);
              
              newCardsData[deck._id] = {
                mainDeck: mainDeckResponse.map((response, i) => {
                  return {
                    ...response.data,
                    quantity: mainDeckCards[i].quantity  // Añadir la "quantity" aquí
                  };
                }),
                extraDeck: extraDeckResponse.map((response, i) => {
                  return {
                    ...response.data,
                    quantity: extraDeckCards[i].quantity  // Añadir la "quantity" aquí
                  };
                }),
              };
              
              
          }
          
          setCardsData(newCardsData);
        };
  
        fetchAllCardData();
      }
    }, [decksData]);
  
    // Función para manejar el click en una carta
    const handleCardClick = (card) => {
      setSelectedCard(card);
  };

  // Función para cerrar el popup
  const handleClosePopup = () => {
      setSelectedCard(null);
  };


  const rarityUrls = {
    ur: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106735/iconos%20dlp/UR_rpfhm2.png",
    sr: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106742/iconos%20dlp/SR_lwpagj.png",
    r: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106750/iconos%20dlp/R_btrot4.png",
    n: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106746/iconos%20dlp/N_lofrdg.png"
  };
  
  const limitationUrls = {
    1: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107074/iconos%20dlp/limited-1-dlp_b2mgxg.svg",
    2: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107082/iconos%20dlp/limited-2-dlp_yf3ttg.svg",
    3: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107087/iconos%20dlp/limited-3-dlp_aq3dv8.svg",
    4: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1665724325/iconos%20dlp/prihibidas_itbkvb.svg"
  };

  const cardStyles = {
    width: "",
    borderRadius: "0", 
};


  return (
<div className='box-grid'>
    {decksData.map((deck, deckIndex) => {
      const currentDeckData = cardsData[deck._id];
      let gridIndex = 0;  // Contador para el índice del grid
      return (
        <div key={deck._id} className="deck">
                                  <div className='info-grid'>
                            <Card style={cardStyles}>
                                <CardBody>
                                    <h2 style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold" }}>
                                         {deck.puesto}
                                    </h2>
                                    <h3 style={{ textAlign: "center" }}>Top: {deck.top}</h3>
                                    <div className="">
                                        <p style={{ textAlign: "center" }}>Jugador: {deck.jugador}</p>
                                        <p style={{ textAlign: "center" }}>Habilidad: {deck.habilidad}</p>
                                    </div>
                                </CardBody>
                            </Card>
                            </div>
          
          <div className="deck-grid">
            {currentDeckData && currentDeckData.mainDeck.map((card) => {
              return Array.from({ length: card.quantity || 0 }).map((_, subIndex) => {
                gridIndex++;  // Incrementar el contador del índice del grid
                return (
                  <div key={`${card._id}-${gridIndex}`} className={`container-item item${gridIndex}`} onClick={() => handleCardClick(card)}>
        {card && card.rareza && (
          <img src={rarityUrls[card.rareza]} className="rareza" alt="" />
        )}
        {card && card.limitacion !== 0 && card.limitacion <= 4 && (
          <img src={limitationUrls[card.limitacion]} alt="" className="limitacion" />
        )}
        {card && card.image && card.image.secure_url && (
          <img className={subIndex === 0 ? 'cartatop item1' : 'cartatop'} src={card.image.secure_url} alt="" />
        )}
      </div>
    );
  });
})}

            </div>
            <div className="extra-grid">
            {currentDeckData && currentDeckData.extraDeck.map((card, index) => {
 
  return Array.from({ length: card.quantity || 0 }).map((_, subIndex) => {
    return (
      <div key={`${card._id}-${index}-${subIndex}`} className={`container-extra extra${index + 1}`} onClick={() => handleCardClick(card)}>
        {card && card.rareza && (
          <img src={rarityUrls[card.rareza]} className="rareza" alt="" />
        )}
        {card && card.limitacion !== 0 && card.limitacion <= 4 && (
          <img src={limitationUrls[card.limitacion]} alt="" className="limitacion" />
        )}
        {card && card.image && card.image.secure_url && (
          <img className={'cartatop'} src={card.image.secure_url} alt="" />
        )}          
      </div>
      
    );
  });
})}

            </div>
            <div style={{ 
    width: '100%', 
    height: '1px', 
    background: 'linear-gradient(to right, #aaa, #fff, #aaa)', 
    margin: '20px auto' 
}} />

          </div>
          
        );
      })}

{selectedCard && (
    <div className="popup" onClick={handleClosePopup}>
        <div className="popup-content" onClick={(event) => event.stopPropagation()}>
            <div className="popup-image">
          {/*      {selectedCard.rareza && (
                    <img src={rarityUrls[selectedCard.rareza]} className="rareza" alt="" />
                )} */} 
             {/*  {selectedCard.limitacion !== 0 && selectedCard.limitacion <= 4 && (
                    <img src={limitationUrls[selectedCard.limitacion]} alt="" className="limitacion" />
                )}  */} 
                {selectedCard.image && selectedCard.image.secure_url && (
                    <img src={selectedCard.image.secure_url} alt={selectedCard.nombre} />
                )}
            </div>
            <div className="popup-info">
                <h2>{selectedCard.nombre}</h2>
                <p>{selectedCard.descripcion}</p>
                <p>Tipo: {selectedCard.tipo}</p>
                <p>Atributo: {selectedCard.atributo}</p>
                <p>Nivel/Rango: {selectedCard.nivel_rango_link}</p>
                <p>ATK: {selectedCard.atk}</p>
                <p>DEF: {selectedCard.def}</p>
            </div>
            <button className="close-button" onClick={(event) => { event.preventDefault(); handleClosePopup(); }}>
                x
            </button>
            <a href={`/cards/${selectedCard.name_english}`} className="more-info-button">Más información</a>
        </div>
    </div>
)}

    </div>
           

    
  
  );
};
