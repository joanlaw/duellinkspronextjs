import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import axios from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image'
import Link from 'next/link';

const DeckViewer = () => {
  const router = useRouter();
  const { _id } = router.query;
  const [deckData, setDeckData] = useState(null);
  const [mainDeckData, setMainDeckData] = useState([]);
  const [extraDeckData, setExtraDeckData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null); // Estado para la carta seleccionada en el popup
  

  useEffect(() => {
    if (_id) {
      axios
        .get(`https://backend-dlp-neuronube.koyeb.app/mazos/${_id}`)
        .then((response) => {
          console.log("Deck Data:", response.data);
          setDeckData(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [_id]);

  useEffect(() => {
    const fetchCardData = async () => {
      if (deckData) {
        const mainDeckCards = deckData.mainDeck;
        const extraDeckCards = deckData.extraDeck;

        const mainDeckPromises = mainDeckCards.map((card) =>
          axios.get(`https://backend-dlp-neuronube.koyeb.app/cards/${card.cardId}`)
        );

        const extraDeckPromises = extraDeckCards.map((card) =>
          axios.get(`https://backend-dlp-neuronube.koyeb.app/cards/${card.cardId}`)
        );

        const mainDeckResponse = await Promise.all(mainDeckPromises);
        const extraDeckResponse = await Promise.all(extraDeckPromises);

        const mainDeckData = mainDeckResponse.flatMap((response, index) =>
          Array(deckData.mainDeck[index].quantity).fill(response.data)
        );
        const extraDeckData = extraDeckResponse.flatMap((response, index) =>
          Array(deckData.extraDeck[index].quantity).fill(response.data)
        );

        setMainDeckData(mainDeckData);
        setExtraDeckData(extraDeckData);
      }
    };

    fetchCardData();
  }, [deckData]);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleClosePopup = () => {
    setSelectedCard(null);
  };

  console.log("Deck ID:", _id);

//URLS PARA OBTENER LAS IMAGENES DE RAREZA
const UrlLimitacion = {
  1: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107074/iconos%20dlp/limited-1-dlp_b2mgxg.svg",
  2: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107082/iconos%20dlp/limited-2-dlp_yf3ttg.svg",
  3: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107087/iconos%20dlp/limited-3-dlp_aq3dv8.svg",
  4: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1665724325/iconos%20dlp/prihibidas_itbkvb.svg"
};

const Limitacion = selectedCard ? selectedCard.limitacion : null;

const LimitacionDefault = "";

const Limitacioncard = UrlLimitacion[Limitacion] || LimitacionDefault;

const UrlRareza = {
  ur: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106735/iconos%20dlp/UR_rpfhm2.png",
  sr: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106742/iconos%20dlp/SR_lwpagj.png",
  r: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106750/iconos%20dlp/R_btrot4.png",
  n: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106746/iconos%20dlp/N_lofrdg.png"
};

const Rareza = selectedCard ? selectedCard.rareza : null;

const RarezaDefault = "";

const Rarezacard = UrlRareza[Rareza] || RarezaDefault;


  return (
    <>
    <Header />
  <div className="">
  {deckData && (
    <div>
      <h2>Deck: {deckData.arquetipo}</h2>
      <h3>Top: {deckData.top}</h3>

      <div className="box-grid container">
      <div className='gridhabilidad' >
          <h3>{deckData.jugador}</h3>
        <span className='habilidadtexto'> <img src='https://res.cloudinary.com/dqofcbeaq/image/upload/v1665971318/iconos%20dlp/descarga_5_s7lpmt.webp' className='spanhabilidad' /> {deckData.habilidad}</span>
        </div>
      <div className="deck-grid"> {/* Contenedor del grid */}
  {mainDeckData.map((card, index) => (
    <div key={card._id} className={`container-item item${index + 1}`} onClick={() => handleCardClick(card)}>
      {card.rareza && <img src={
  card.rareza === "ur"
  ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106735/iconos%20dlp/UR_rpfhm2.png"
  : card.rareza === "sr"
  ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106742/iconos%20dlp/SR_lwpagj.png"
  : card.rareza === "r" 
  ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106750/iconos%20dlp/R_btrot4.png"
  : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106746/iconos%20dlp/N_lofrdg.png"
} className="rareza" alt="" /> }  
      {card.limitacion === 0 ? null :
        card.limitacion === 1 ? <img src="https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107074/iconos%20dlp/limited-1-dlp_b2mgxg.svg" alt="" className="limitacion" /> :
        card.limitacion === 2 ? <img src="https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107082/iconos%20dlp/limited-2-dlp_yf3ttg.svg" alt="" className="limitacion" /> :
        card.limitacion === 3 ? <img src="https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107087/iconos%20dlp/limited-3-dlp_aq3dv8.svg" alt="" className="limitacion" /> :
        card.limitacion === 4 ? <img src="https://res.cloudinary.com/dqofcbeaq/image/upload/v1665724325/iconos%20dlp/prihibidas_itbkvb.svg" alt="" className="limitacion" /> :
        null
      }
      <img className={index === 0 ? 'cartatop item1' : 'cartatop'} src={card.image.secure_url} alt="" />
    </div>
  ))}
</div>

      <div className="extra-grid">
        {extraDeckData.map((card, index) => (
          <div key={card._id} className={`container-extra extra${index + 1}`} onClick={() => handleCardClick(card)}>
                  {card.rareza && <img src={
  card.rareza === "ur"
  ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106735/iconos%20dlp/UR_rpfhm2.png"
  : card.rareza === "sr"
  ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106742/iconos%20dlp/SR_lwpagj.png"
  : card.rareza === "r" 
  ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106750/iconos%20dlp/R_btrot4.png"
  : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106746/iconos%20dlp/N_lofrdg.png"
} className="rareza" alt="" /> }  
      {card.limitacion === 0 ? null :
        card.limitacion === 1 ? <img src="https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107074/iconos%20dlp/limited-1-dlp_b2mgxg.svg" alt="" className="limitacion" /> :
        card.limitacion === 2 ? <img src="https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107082/iconos%20dlp/limited-2-dlp_yf3ttg.svg" alt="" className="limitacion" /> :
        card.limitacion === 3 ? <img src="https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107087/iconos%20dlp/limited-3-dlp_aq3dv8.svg" alt="" className="limitacion" /> :
        card.limitacion === 4 ? <img src="https://res.cloudinary.com/dqofcbeaq/image/upload/v1665724325/iconos%20dlp/prihibidas_itbkvb.svg" alt="" className="limitacion" /> :
        null
      }
        
              <img className={'cartatop'} src={card.image.secure_url} alt="" />
            
          </div>
        ))}
      </div>

<h3>Otros decks</h3>

</div>




{selectedCard && (
  <div className="popup" onClick={handleClosePopup}>
    <div className="popup-content" onClick={(event) => event.stopPropagation()}>
      <div className="popup-image">
     {/*   {selectedCard.rareza && <img src={
          selectedCard.rareza === "ur"
          ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106735/iconos%20dlp/UR_rpfhm2.png"
          : selectedCard.rareza === "sr"
          ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106742/iconos%20dlp/SR_lwpagj.png"
          : selectedCard.rareza === "r" 
          ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106750/iconos%20dlp/R_btrot4.png"
          : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106746/iconos%20dlp/N_lofrdg.png"
        } alt="" className="card-rareza" width={200} height={100} layout={'responsive'} />} */}
        <img src={selectedCard.image.secure_url} alt={selectedCard.nombre} />
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
<Link href={`/cards/${selectedCard.name_english}`}>
                <a className="more-info-button">Más información</a>
              </Link>
    </div>
  </div>
)}


    </div>
  )}
</div>

    </>
  );
};

export default DeckViewer;
