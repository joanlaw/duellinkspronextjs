import React, { useState, useEffect } from "react";
import axios from "axios";
import Carta from "../../components/Carta";

const ListaCartas = () => {
  const [cartas, setCartas] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deck, setDeck] = useState([]);
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
      console.log(deck)
    }
  };

  const handleQuitarCarta = (index) => {
    const newDeck = [...deck];
    newDeck.splice(index, 1);
    setDeck(newDeck);
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
const cartasPorPagina = 42;
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
//
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://api.duellinks.pro/decks", {
        mainuno: deck[0] ? deck[0].id : null,
        maindos: deck[1] ? deck[1].id : null,
        maintres: deck[2] ? deck[2].id : null,
        maincuatro: deck[3] ? deck[2].id : null,
        maincinco: deck[4] ? deck[2].id : null,
        mainseis: deck[5] ? deck[2].id : null,
        mainsiete: deck[6] ? deck[2].id : null,
        mainocho: deck[7] ? deck[2].id : null,
        mainnueve: deck[8] ? deck[2].id : null,
        maindiez: deck[9] ? deck[2].id : null,
        mainonce: deck[10] ? deck[2].id : null,
        maindoce: deck[11] ? deck[2].id : null,
        
        sidediez: deck[29] ? deck[29].id : null,
      })
      .then((response) => {
        alert("Deck creado exitosamente");
        setDeck([]);
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

/*  //BUSQUEDA
  const handleBuscarCarta = (e) => {
    const busqueda = e.target.value;
    setBusqueda(busqueda);
  };


  const cartasFiltradas = cartas.filter((carta) =>
    carta.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  //BUSQUEDA2
      //Funcion de búsqueda

 /*     const searcher = (e) => {
        setSearch(e.target.value)
      }
  const results = !search ? cartasPaginadas : cartasPaginadas.filter((carta)=> carta.nombre.toLowerCase().includes(search.toLowerCase()) )

  buscarPorNombre = event => {
    this.setState({ filtroNombre: event.target.value });
  }  */


  return (
    <div>
      <h2>Cartas</h2>
      <div className="buscar">
      <input type="text" id="buscar" placeholder="Buscar por nombre" onChange={searcher}  value={search}  />
      </div>
      <br /> 
      <div className="lista-cartas">
        {cartasPaginadas.map((carta) => (
          <Carta key={carta.id} carta={carta} onClick={() => handleAgregarCarta(carta)} />
          
        ))}
      </div>
      <div className="paginacion">{botonesPaginacion}</div>
      <h2>Deck</h2>
      <div className="deck">
        {deck.map((carta, index) => (
          <div key={index} onClick={() => handleQuitarCarta(index)}>
            <img src={carta.image.secure_url} alt={carta.nombre} />
            
          </div>
        ))}
      </div>
      <button onClick={handleSubmit}>Crear deck</button>
    </div>
  );
};

export default ListaCartas;
