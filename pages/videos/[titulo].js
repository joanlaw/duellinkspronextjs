import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import YouTube from 'react-youtube';

function VideoDeck() {
  const router = useRouter();
  const { titulo } = router.query;
  const [deckData, setDeckData] = useState(null);
  const [mainDeckData, setMainDeckData] = useState([]);
  const [extraDeckData, setExtraDeckData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [videoData, setVideoData] = useState(null);

  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);


  useEffect(() => {
    const checkDeviceType = () => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isTablet = /iPad|Android|Tablet|PlayBook|KFAPWI|Kindle|Silk.*Mobile|Mobile.*Firefox|Mobile/i.test(navigator.userAgent);
      setIsMobileOrTablet(isMobile || isTablet);
    };
  
    checkDeviceType();
  }, []);
  


  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleClosePopup = () => {
    setSelectedCard(null);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.duellinks.pro/videos/${encodeURIComponent(titulo)}`);
        let data = response.data;
    
        console.log('Response data:', data);  // Aquí se agregó un nuevo console.log
    
        if (data) {
          setVideoData(data);  // Aquí se hizo el cambio
        }

        if (data.deck) {
          const deckResponse = await axios.get(`https://api.duellinks.pro/mazos/${data.deck}`);
          const deckData = deckResponse.data;
          setDeckData(deckData);
          const mainDeckCards = deckData.mainDeck;
          const extraDeckCards = deckData.extraDeck;

          const mainDeckPromises = mainDeckCards.map((card) =>
            axios.get(`https://api.duellinks.pro/cards/${card.cardId}`)
          );

          const extraDeckPromises = extraDeckCards.map((card) =>
            axios.get(`https://api.duellinks.pro/cards/${card.cardId}`)
          );

          const mainDeckResponses = await Promise.all(mainDeckPromises);
          const extraDeckResponses = await Promise.all(extraDeckPromises);

          const mainDeckData = mainDeckResponses.flatMap((response, index) =>
            Array(mainDeckCards[index].quantity).fill(response.data)
          );
          const extraDeckData = extraDeckResponses.flatMap((response, index) =>
            Array(extraDeckCards[index].quantity).fill(response.data)
          );

          setMainDeckData(mainDeckData);
          setExtraDeckData(extraDeckData);
        }
      } catch (error) {
        console.error('Error fetching video info:', error);
      }
    };

    if (titulo) {
      fetchData();
    }
  }, [titulo]);

  useEffect(() => {
    if (videoData) {
      console.log("videoData:", videoData); 
      console.log("Titulo: ", videoData.titulo);
      console.log("URL del video: ", videoData.link_video);
    }
  }, [videoData]);



  function renderRarityImage(card) {
    if (!card.rareza) return null;
    const src = card.rareza === "ur"
      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106735/iconos%20dlp/UR_rpfhm2.png"
      : card.rareza === "sr"
      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106742/iconos%20dlp/SR_lwpagj.png"
      : card.rareza === "r"
      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106750/iconos%20dlp/R_btrot4.png"
      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106746/iconos%20dlp/N_lofrdg.png";
    return <img src={src} className="rareza" alt="" />;
  }

  function renderLimitationImage(card) {
    if (card.limitacion === 0) return null;
    const src = card.limitacion === 1
      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107074/iconos%20dlp/limited-1-dlp_b2mgxg.svg"
      : card.limitacion === 2
      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107082/iconos%20dlp/limited-2-dlp_yf3ttg.svg"
      : card.limitacion === 3
      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107087/iconos%20dlp/limited-3-dlp_aq3dv8.svg"
      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1665724325/iconos%20dlp/prihibidas_itbkvb.svg";
    return <img src={src} className="limitacion" alt="" />;
  }

  return (
    <>
      <Header />
      <h1>
      {videoData ? videoData.titulo : 'Cargando...'}
    </h1>


      <div>

        {deckData && (
          <div>
            <h2>Deck: {deckData.arquetipo}</h2>

            <div className="box-grid container">
              <div className='gridhabilidad' >
                <h3>{deckData.jugador}</h3>
                <span className='habilidadtexto'> <img src='https://res.cloudinary.com/dqofcbeaq/image/upload/v1665971318/iconos%20dlp/descarga_5_s7lpmt.webp' className='spanhabilidad' /> {deckData.habilidad}</span>
              </div>
              <div className="deck-grid">
                {mainDeckData.map((card, index) => (
                  <div key={index} className={`container-item item${index + 1}`} onClick={() => handleCardClick(card)}>
                    {renderRarityImage(card)}
                    {renderLimitationImage(card)}
                    <img className={index === 0 ? 'cartatop item1' : 'cartatop'} src={card.image.secure_url} alt="" />
                  </div>
                ))}
              </div>

              <div className="extra-grid">
                {extraDeckData.map((card, index) => (
                  <div key={index} className={`container-extra extra${index + 1}`} onClick={() => handleCardClick(card)}>
                    {renderRarityImage(card)}
                    {renderLimitationImage(card)}
                    <img className={'cartatop'} src={card.image.secure_url} alt="" />
                  </div>
                ))}
              </div>

            
            </div>
            <div className={`video-container ${isMobileOrTablet ? 'mobile-or-tablet' : ''}`}>

      {videoData && (
        <YouTube
          videoId={videoData.link_video}
          opts={{
            height: '390',
            width: '640',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 0,
            },
          }}
          className="video-player" // Aplica la clase CSS para centrar el cuadro de reproducción
        />
      )}
    </div>

            {selectedCard && (
              <div className="popup" onClick={handleClosePopup}>
                <div className="popup-content" onClick={(event) => event.stopPropagation()}>
                  <div className="popup-image">
                    {renderRarityImage(selectedCard)}
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

      <Footer />
    </>
  );
}

export default VideoDeck;
