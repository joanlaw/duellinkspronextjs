import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import axios from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image'
import Link from 'next/link';
import Footer from '../../components/Footer';
import Head from 'next/head';
import NavbarCustom from '../../components/NavbarCustom';
import { Text, Card, Row, Col, CardBody } from '@nextui-org/react';
import FooterCustom from '../../components/FooterCustom'
import DeckTableFiltered from '../../components/DeckTableFiltered';
import CardPopup from '../../components/reportes/CardPopup';


const DeckViewer = ({ initialDeckData }) => {
  const router = useRouter();
  const { _id } = router.query;
  const [deckData, setDeckData] = useState(initialDeckData);
  const [mainDeckData, setMainDeckData] = useState([]);
  const [extraDeckData, setExtraDeckData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null); // Estado para la carta seleccionada en el popup
  

  useEffect(() => {
      // Limpia el estado del deckData
  setDeckData(null);
    if (_id) {
      axios
        .get(`https://api.duellinks.pro/mazos/${_id}`)
        .then((response) => {
          console.log("Deck Data:", response.data);
          setDeckData(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [_id]);

  useEffect(() => {
      // Limpia los estados mainDeckData y extraDeckData
  setMainDeckData([]);
  setExtraDeckData([]);
    const fetchCardData = async () => {
      if (deckData) {
        const mainDeckCards = deckData.mainDeck;
        const extraDeckCards = deckData.extraDeck;

        const mainDeckPromises = mainDeckCards.map((card) =>
          axios.get(`https://api.duellinks.pro/cards/${card.cardId}`)
        );

        const extraDeckPromises = extraDeckCards.map((card) =>
          axios.get(`https://api.duellinks.pro/cards/${card.cardId}`)
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


  const cardStyles = {
    width: "",
    borderRadius: "0", // Anula el border-radius y hace los bordes cuadrados

  //  backgroundColor: "#010609" // Fondo translúcido (blanco con 80% de opacidad)
  };


  return (
    <>
<Head>
<title>Deck {deckData ? `${deckData.arquetipo} Top ${deckData.top} del jugador ${deckData.jugador}` : 'Cargando...'}</title>
  <meta
    name="description"
    content={`Mira el deck de ${deckData ? deckData.arquetipo : 'Cargando...'} en la comunidad de DuelLinks Pro`}
  />
  {deckData && <link rel="canonical" href={`https://duellinks.pro/mazos/${deckData._id}`} />}
  
  {/* Meta etiquetas para Facebook */}
  <meta property="og:title" content={`Deck ${deckData ? deckData.arquetipo : 'Cargando...'}`} />
  <meta property="og:description" content={`Mira el deck de ${deckData ? deckData.arquetipo : 'Cargando...'} en la comunidad de DuelLinks Pro`} />
  <meta property="og:url" content={`https://duellinks.pro/mazos/${deckData ? deckData._id : ''}`} />
  <meta property="og:image" content="URL_DE_LA_IMAGEN_PARA_COMPARTIR" />

  {/* Meta etiquetas para Twitter */}
  <meta name="twitter:title" content={`Deck ${deckData ? deckData.arquetipo : 'Cargando...'}`} />
  <meta name="twitter:description" content={`Mira el deck de ${deckData ? deckData.arquetipo : 'Cargando...'} en la comunidad de DuelLinks Pro`} />
  <meta name="twitter:image" content="URL_DE_LA_IMAGEN_PARA_COMPARTIR" />
</Head>
    <NavbarCustom />
  <div className="container mx-auto">
  {deckData && (
    <div>
      <div className="box-grid">
        
        <div className='info-grid'>
      <Card style={cardStyles}>
      <CardBody>
        <h2 style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold" }}>
          Deck: {deckData.arquetipo}
        </h2>
        <h3 style={{ textAlign: "center" }}>Top: {deckData.top}</h3>
        <div className="">
          <p style={{ textAlign: "center" }}>Jugador: {deckData.jugador}</p>
          <p style={{ textAlign: "center" }}>Habilidad: {deckData.habilidad}</p>
        </div>
      </CardBody>
    </Card>
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
                            {/* Agregar el botón bonito con enlace al deck */}
                            {deckData && (
        <div className="link_deck">
          <a
            href={deckData.link_deck}
            target="_blank"  // Esta línea hace que se abra en una nueva pestaña
            rel="noopener noreferrer"
            className="button-link"
          >
            Copiar Deck
          </a>
        </div>
      )}

{deckData && <DeckTableFiltered arquetipo={deckData.arquetipo} />}
{/*<h3>Otros decks</h3> */}
</div>
{selectedCard && <CardPopup selectedCard={selectedCard} handleClosePopup={handleClosePopup} />}


  </div>
  )}

</div>
<FooterCustom />

    </>
  );
};

export async function getServerSideProps(context) {
  const { _id } = context.query;

  let deckData = null;
  try {
    const res = await axios.get(`https://api.duellinks.pro/mazos/${_id}`);
    deckData = res.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      initialDeckData: deckData,
    },
  };
}

export default DeckViewer;
