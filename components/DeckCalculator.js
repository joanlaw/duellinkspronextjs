import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pagination, Input } from "@nextui-org/react";

const baseUrlRareza = "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106735/iconos%20dlp/";
const rarityUrls = {
    ur: baseUrlRareza + "UR_rpfhm2.png",
    sr: baseUrlRareza + "SR_lwpagj.png",
    r: baseUrlRareza + "R_btrot4.png",
    n: baseUrlRareza + "N_lofrdg.png"
};

const baseUrlLimitation = "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107074/iconos%20dlp/";
const limitationUrls = {
    1: baseUrlLimitation + "limited-1-dlp_b2mgxg.svg",
    2: baseUrlLimitation + "limited-2-dlp_yf3ttg.svg",
    3: baseUrlLimitation + "limited-3-dlp_aq3dv8.svg",
    4: baseUrlLimitation + "prihibidas_itbkvb.svg"
};

function DeckCalculator() {
    const [cardList, setCardList] = useState([]);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
        // Estados para mantener el deck principal y el deck extra
        const [mainDeck, setMainDeck] = useState([]);
        const [extraDeck, setExtraDeck] = useState([]);

        // Estado para mantener el costo total del deck
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        refreshCardList();
    }, [currentPage, search]);

    const cardsApi = (url = "https://api.duellinks.pro/cards/") => {
        return {
            fetchAll: (searchTerm, page) =>
                axios.get(url, {
                    params: {
                        search: searchTerm,
                        page: page,
                    }
                }),
        };
    };

    const searcher = (e) => {
        setSearch(e.target.value);
        setCurrentPage(1);
    };

    function refreshCardList() {
        cardsApi()
            .fetchAll(search, currentPage)
            .then((res) => {
                setCardList(res.data.docs);
                setTotalPages(res.data.totalPages);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const ImageCard = ({ data, onClick }) => (
        <div className="listacards" onClick={onClick}>
            <img src={rarityUrls[data.rareza] || data.rareza} className="rareza" />
            <img src={limitationUrls[data.limitacion]} className={(data.limitacion === "") ? "ocultarinfoall" : "limitacion"} />
            <div className="grid-list-card">
                <img src={data.image.secure_url} className="cartatop" alt={data.nombre} />
            </div>
        </div>
    );

    const handleAgregarCarta = (card) => {
        setMainDeck([...mainDeck, card]);
      };
    
      const handleAgregarCartaDeckExtra = (card) => {
        setExtraDeck([...extraDeck, card]);
      };
    
      const handleQuitarCarta  = (index) => {
        const newDeck = [...mainDeck];
        newDeck.splice(index, 1);
        setMainDeck(newDeck);
      };
    
      const handleQuitarCartaExtra = (index) => {
        const newDeck = [...extraDeck];
        newDeck.splice(index, 1);
        setExtraDeck(newDeck);
      };
    
      const onClick = (carta) => {
        if (
            carta.tipo_de_carta === "Fusion" ||
            carta.tipo_de_carta === "Sincronía" ||
            carta.tipo_de_carta === "Xyz" ||
            carta.tipo_de_carta === "Sincronía / Cantante" ||
            carta.tipo_de_carta === "Xyz / Péndulo" ||
            carta.tipo_de_carta === "Link"  ||
            carta.tipo_de_carta === "Link Monster" ||
            carta.tipo_de_carta === "Fusion Monster" ||
            carta.tipo_de_carta === "XYZ Monster" ||
            carta.tipo_de_carta === "XYZ Péndulo Monster" ||
            carta.tipo_de_carta === "XYZ Pendulum Effect Monster" ||
            carta.tipo_de_carta === "Synchro Monster" ||
            carta.tipo_de_carta === "Synchro Tuner Monster"
        ) {
          handleAgregarCartaDeckExtra(carta);
        } else {
          handleAgregarCarta(carta);
        }
      };

//COSTOS DE DECKS 
const fetchTotalCost = async () => {
    const allCards = [...mainDeck, ...extraDeck]; // Asume que mainDeck y extraDeck son tus estados para las cartas
    const ids = allCards.map(carta => carta._id).join(',');

    if (!ids) {
        console.log("No hay IDs de cartas para consultar.");
        setTotalCost(0);  // Puedes setear el costo a 0 si no hay cartas
        return;
    }

    const url = `https://api.duellinks.pro/cards/${ids}/costo`;
    console.log("URL completa para el costo:", url);

    try {
        const response = await axios.get(url);
        setTotalCost(response.data.totalEstimatedCost);  // Aquí se actualiza para coincidir con la estructura real de la respuesta
    } catch (error) {
        console.error('Error al obtener el costo total del deck:', error);
    }
};


useEffect(() => {
    fetchTotalCost();
}, [mainDeck, extraDeck]);  
     

  return (

    <div className='container-grids'>
      {/* Primer contenedor */}
      <div className="box-grid-creator">
        <div className="deck">
          <div className="info-grid">
            {/* Contenido de la información */}
          </div>
          <div>
                        <Input
                            className='w-full lg:w-1/3'
                            type='text'
                            placeholder='Buscar Carta..'
                            value={search}
                            onChange={searcher}
                        />
                    </div>
                    <br />
          <div className="deck-grid-creator">
          {cardList.map((element) => (
                            <ImageCard 
                                key={element._id} 
                                data={element}
                                onClick={() => onClick(element)} // Aquí se pasa la función onClick como prop
                            />
                        ))}
                    </div>
                    <div className="text-center mx-auto">
                        <Pagination
                            className="inline-block"
                            isCompact
                            showControls
                            total={totalPages}
                            initialPage={1}
                            onChange={(newPage) => setCurrentPage(newPage)}
                        />
                    </div>
          {/* Grid para el extra deck */}

        </div>
      </div>

      {/* Segundo contenedor */}
      
      <div className="box-grid2-creator">
        <div className="deck">
          <div className="info-grid">
            {/* Contenido de la información */}
          </div>
          {/* Grid para el main deck */}
          <div>Costo total del Deck: {totalCost} Gemas</div>
          <div className="deck-grid2">
                        {mainDeck.map((carta, index) => (
                            <ImageCard 
                                key={index} 
                                data={carta}
                                onClick={() => handleQuitarCarta(index)}
                            />
                        ))}
                    </div>
          {/* Grid para el extra deck */}
          <div className="extra-grid2">
                        {extraDeck.map((carta, index) => (
                            <ImageCard 
                                key={index} 
                                data={carta}
                                onClick={() => handleQuitarCartaExtra(index)}
                            />
                        ))}
                    </div>
                    
        </div>
      </div>
    </div>

  )
}

export default DeckCalculator