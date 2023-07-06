import React, { useState, useEffect } from "react";
import axios from "axios";
import Carta from "../../components/Carta";
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const ListaCartas = () => {
  const [cartas, setCartas] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deck, setDeck] = useState([]);
  const [deckextra, setDeckextra] = useState([]);
  const [infodeck, setInfoDeck] = useState([]);

  //ESTADO PARA CREAR EL ARRAY
 /* const [datos, setDatos] = useState(
   
  )
  //*/


  /*  this.state = {
      datos: [] // Inicializar con un array vacío
    };

    //...
*/

  //...
//

  const [paginaActual, setPaginaActual] = useState(1); // <-- agregado

//
//const [busqueda, setBusqueda] = useState('');

//BUSQUEDA 2

const [search, setSearch ] = useState("")

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.duellinks.pro/cartas?page=${page}&limit=10`)
      .then((response) => {
        setCartas(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [page]);

  const handleAgregarCarta = (carta) => {
    if (deck.length < 30) {
      setDeck([...deck, carta]);
    // console.log(deck)
    }
  };

  //AGREGAR CARTAS AL EXTRA DECK

  const handleAgregarCartaDeckExtra = (carta) => {
    if (deckextra.length < 8) {
      setDeckextra([...deckextra, carta]);
   //  console.log(deckextra)
    }
  };

  //AGREGAR INFO ADICIONAL DECK
  const handleAgregarInfo = (carta) => {
    setInfoDeck({...infodeck, carta})
  }

  //CONDICIONAL PARA PRINCIPAL O EXTRA DECK
  const onClick = (carta) => {
    if (carta.tipo_de_carta === "Fusion" || carta.tipo_de_carta === "Sincronía" || carta.tipo_de_carta === "Xyz" || carta.tipo_de_carta === "Sincronía / Cantante" || carta.tipo_de_carta === "Xyz / Péndulo" || carta.tipo_de_carta === "Link") {
      handleAgregarCartaDeckExtra(carta);
    } else {
      handleAgregarCarta(carta);
    }
  };

  const handleQuitarCarta = (index) => {
    const newDeck = [...deck];
    newDeck.splice(index, 1);
    setDeck(newDeck);
  };

  const handleQuitarCartaExtra = (index) => {
    const newDeckExtra = [...deckextra];
    newDeckExtra.splice(index, 1);
    setDeckextra(newDeckExtra);
  };

//BUSQUEDA
    //Metodo filtrado 2

    const results = !search
    ? cartas
    : cartas.filter((carta) =>
        carta.nombre.toLowerCase().includes(search.toLowerCase())
      );

        //Funcion de búsqueda

  const searcher = (e) => {
    setSearch(e.target.value);
    //console.log(e.target.value);
  };

//


//PAGINACION
const cartasPorPagina = 25;
  const paginaInicio = (paginaActual - 1) * cartasPorPagina;
  const paginaFinal = paginaInicio + cartasPorPagina;
  const cartasPaginadas = results.slice(paginaInicio, paginaFinal);
  const handleClickPagina = (numeroPagina) => {
    setPaginaActual(numeroPagina);
  };
//
const botonesPaginacion = [];
const numeroPaginas = Math.ceil(cartas.length / cartasPorPagina);
for (let i = 1; i <= numeroPaginas; i++) {
  botonesPaginacion.push(
    <button
      key={i}
      className={i === paginaActual ? "activo" : ""}
      onClick={() => handleClickPagina(i)}
    >
      {i}
    </button>
  );
}

//EVENTOS DEL FORMULARIO


const initialState = {
  jugador: "",
  habilidad: "",
  arquetipo: "",
  top: "",
  puesto: ""
};

const [formState, setFormState] = useState(initialState);

const handleReset = () => {
  setFormState(initialState);
};

 /* const [formState, setFormState] = useState({
  jugador: "",
  habilidad: "",
  arquetipo: "",
  arquetipo_image: "",
  engine: "",
  top: "",
  puesto: "",
});  */

const handleChange = (event) => {
  setFormState({ ...formState, [event.target.name]: event.target.value });
};

//
  const handleSubmit = (event) => {
    event.preventDefault();

    const jugador = formState.jugador;
    const habilidad = formState.habilidad;
    const arquetipo = formState.arquetipo;
    const arquetipo_image = formState.arquetipo_image;
    const engine = formState.engine;
    const top = formState.top;
    const puesto = formState.puesto;
    
    handleReset();
    axios
      .post("https://back-render-cloud-dlp.onrender.com/decks/",{
        jugador: jugador,
        habilidad: habilidad,
        arquetipo: arquetipo,
        arquetipo_image: arquetipo_image,
        engine: engine,
        top: top,
        puesto: puesto,
        mainuno: deck[0] ? deck[0]._id : "",
        maindos: deck[1] ? deck[1]._id : "",
        maintres: deck[2] ? deck[2]._id : "",
        maincuatro: deck[3] ? deck[3]._id : "",
        maincinco: deck[4] ? deck[4]._id : "",
        mainseis: deck[5] ? deck[5]._id : "",
        mainsiete: deck[6] ? deck[6]._id : "",
        mainocho: deck[7] ? deck[7]._id : "",
        mainnueve: deck[8] ? deck[8]._id : "",
        maindiez: deck[9] ? deck[9]._id : "",
        mainonce: deck[10] ? deck[10]._id : "",
        maindoce: deck[11] ? deck[11]._id : "",
        maintrece: deck[12] ? deck[12]._id : "",
        maincatorce: deck[13] ? deck[13]._id : "",
        mainquince: deck[14] ? deck[14]._id : "",
        maindieciseis: deck[15] ? deck[15]._id : "",
        maindiecisiete: deck[16] ? deck[16]._id : "",
        maindieciocho: deck[17] ? deck[17]._id : "",
        maindiecinueve: deck[18] ? deck[18]._id : "",
        mainveinte: deck[19] ? deck[19]._id : "",
        mainveintiuno: deck[20] ? deck[20]._id : "",
        mainveintidos: deck[21] ? deck[21]._id : "",
        mainveintitres: deck[22] ? deck[22]._id : "",
        mainveinticuatro: deck[23] ? deck[23]._id : "",
        mainveinticinco: deck[24] ? deck[24]._id : "",
        mainveintiseis: deck[25] ? deck[25]._id : "",
        mainveintisiete: deck[26] ? deck[26]._id : "",
        mainveintiocho: deck[27] ? deck[27]._id : "",
        mainveintinueve: deck[28] ? deck[28]._id : "",
        maintreinta: deck[29] ? deck[29]._id : "",
        extrauno: deckextra[0] ? deckextra[0]._id : "",
        extrados: deckextra[1] ? deckextra[1]._id : "",
        extratres: deckextra[2] ? deckextra[2]._id : "",
        extracuatro: deckextra[3] ? deckextra[3]._id : "",
        extracinco: deckextra[4] ? deckextra[4]._id : "",
        extraseis: deckextra[5] ? deckextra[5]._id : "",
        extrasiete: deckextra[6] ? deckextra[6]._id : "",
        extraocho: deckextra[7] ? deckextra[7]._id : "",
        extranueve: deckextra[8] ? deckextra[8]._id : "",
        extradiez: deckextra[9] ? deckextra[9]._id : "",
        sideuno: deckextra[40] ? deckextra[40]._id : "",
        sidedos: deckextra[41] ? deckextra[41]._id : "",
        sidetres: deckextra[42] ? deck[42]._id : "",
        sidecuatro: deckextra[43] ? deck[43]._id : "",
        sidecinco: deckextra[44] ? deck[44]._id : "",
        sideseis: deckextra[45] ? deck[45]._id : "",
        sidesiete: deckextra[46] ? deck[46]._id : "",
        sideocho: deckextra[47] ? deck[47]._id : "",
        sidenueve: deckextra[48] ? deck[48]._id : "",
        sidediez: deckextra[49] ? deck[49]._id : "",
      })
      .then((response) => {
        alert("Deck creado exitosamente");
        setDeck([]);
      })
      .then((response) => {
        
        setDeckextra([]);
      })
      .catch((error) => {
        alert("Hubo un error al crear el deck");
        console.error(error);
      });
  };

  if (loading) {
    return <p>Cargando cartas...</p>;
  }

  if (error) {
    return <p>Hubo un error al cargar las cartas</p>;
  }
  return (
    <>
    <Header />
    <div>
      <h1>Creador de decks DLP</h1>
    </div>
    <div className="container-creador"> 
    <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="jugador">Jugador:</label>
      <input type="text" name="jugador" value={formState.jugador} onChange={handleChange} />

      <label htmlFor="habilidad">Habilidad:</label>
      <input type="text" name="habilidad" value={formState.habilidad} onChange={handleChange} />

      <label htmlFor="arquetipo">Arquetipo:</label>
      <input type="text" name="arquetipo" value={formState.arquetipo} onChange={handleChange} />

      <label htmlFor="top">Top:</label>
      <input type="text" name="top" value={formState.top} onChange={handleChange} />

      <label htmlFor="puesto">Puesto:</label>
      <input type="text" name="puesto" value={formState.puesto} onChange={handleChange} />
    </form>
  </div>
{/*COMIENZA GRID*/}

  <div class="grid-container">
  <div class="block1">
  <h2>Cartas</h2>
  <p>{cartasPaginadas.length}</p>
  <div className="buscar">
    <input type="text" id="buscar" placeholder="Buscar por nombre" onChange={searcher}  value={search} />
  </div>

  <div className="lista-cartas-creador">
    {cartasPaginadas.map((carta) => (
      <Carta key={carta.id} carta={carta} onClick={() => onClick(carta)} />
    ))}
  </div>
  <div className="paginacion">{botonesPaginacion}</div>
  </div>
  <div class="block2">
  <h2>Deck</h2>
  <p>{deck.length}</p>
  <div className="deck-creador">
    {deck.map((carta, index) => (
      <div key={index} onClick={() => handleQuitarCarta(index)}>
        <img src={carta.image.secure_url} alt={carta.nombre} />
      </div>
    ))}
  </div>

  <h2>Extra Deck</h2>
  <p>{deckextra.length}</p>
  <div className="deck-creador">
    {deckextra.map((carta, index) => (
      <div key={index} onClick={() => handleQuitarCartaExtra(index)}>
        <img src={carta.image.secure_url} alt={carta.nombre} />
      </div>
    ))}
  </div>

  <div className="crear-deck-container">
    <button onClick={handleSubmit}>Crear deck</button>
  </div>
</div>
    <br />
  </div>
</div>
    <Footer />
    </>
  );
};

export default ListaCartas;
