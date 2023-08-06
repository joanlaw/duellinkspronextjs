import { useState, useEffect } from "react"
import Header from "../../components/Header"
import axios from "axios"
import Footer from "../../components/Footer"
import Link from "next/link"
import Image from "next/image"
import moment from 'moment';
import { useRouter } from 'next/router'

export default function Index() {

  const [cardList, setCardList] = useState([]);
  const [search, setSearch] = useState("");
  const [recordForEdit, setrecordForEdit] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(36);
  const [groupedDecks, setGroupedDecks] = useState({});
  const [archetypes, setArchetypes] = useState([]);

  const [resultsToShow, setResultsToShow] = useState(10);

  const router = useRouter();

  useEffect(() => {
    refreshCardList();
    getArchetypes();
  }, []);

  const getArchetypes = () => {
    const baseUrl = "https://backend-dlp-neuronube.koyeb.app/arquetipos/";
    const allArchetypes = [];
  
    const fetchPage = (url) => {
      return axios.get(url)
        .then((res) => {
          const archetypesData = res.data.arquetipos;
          allArchetypes.push(...archetypesData);
  
          if (res.data.next) {
            // Si hay una próxima página, hacer una nueva solicitud
            return fetchPage(res.data.next);
          } else {
            // Si no hay más páginas, devuelve los resultados acumulados
            setArchetypes(allArchetypes);
          }
        })
        .catch((err) => console.log(err));
    };
  
    fetchPage(baseUrl);
  };
  
    // Función para manejar el evento de clic del botón "Mostrar Más"
    const handleShowMore = () => {
      // Aumentar el número de resultados a mostrar en 10
      setResultsToShow(prevResults => prevResults + 10);
    };
  

  const decksApi = (url = "https://backend-dlp-neuronube.koyeb.app/mazos/") => {
    return {
      fetchAll: () => axios.get(url),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
      delete: (id) => axios.delete(url + id),
    };
  };
  const searcher = (e) => {
    setSearch(e.target.value);
  };
  
  const results = !search
    ? cardList
    : cardList.filter((data) =>
        data.arquetipo.toLowerCase().includes(search.toLowerCase())
      );
  
  function refreshCardList() {
    decksApi()
      .fetchAll()
      .then((res) => setCardList(res.data))
      .catch((err) => console.log(err));
  }
  
  const addOrEdit = (formData, onSuccess) => {
    decksApi()
      .create(formData)
      .then((res) => {
        onSuccess();
        refreshCardList();
      })
      .catch((err) => console.log(err));
  };
  

  const ImageCard = ({ data, archetypes }) => {
    const arquetipo = data?.arquetipo || "";
    const defaultImage = ''; // Coloca aquí la URL de la imagen predeterminada
    const [imageArquetipo, setImageArquetipo] = useState(defaultImage);
  
    useEffect(() => {
      if (archetypes && Array.isArray(archetypes) && archetypes.length > 0) {
        const arquetipoData = archetypes.find(
          arquetipoItem => arquetipoItem.nombre_arquetipo === arquetipo
        );
        if (arquetipoData) {
          setImageArquetipo(arquetipoData.image_arquetipo || defaultImage);
        } else {
          setImageArquetipo(defaultImage);
        }
      } else {
        setImageArquetipo(defaultImage);
      }
    }, [arquetipo, archetypes]);
  
    return (
      <div>
        <img
          src={imageArquetipo}
          className='arquetipo-image'
          alt={arquetipo}
          onError={(e) => { e.target.onerror = null; e.target.src = defaultImage; }}
        />
      </div>
    );
  };
  


  const currentPost = results.slice(-30);
  

   //FECHA
const fechaActual = moment();
const fechaFormateada = fechaActual.format('YYYY-MM-DD');

//FILTRADO 2
const [filtro, setFiltro] = useState({
  createdAt: '',
  habilidad: '',
  arquetipo: '',
  top: ''
  
});

function handleFiltroChange(event) {
  const { name, value } = event.target;
  setFiltro(prevFiltro => ({
    ...prevFiltro,
    [name]: value
  }));
}

const elementosFiltrados = results.filter(currentPost => {
  let fechaLimite;
  switch (filtro.createdAt) {
    case 'ultimos7dias':
      fechaLimite = moment().subtract(7, 'days');
      break;
    case 'ultimas2semanas':
      fechaLimite = moment().subtract(2, 'weeks');
      break;
    case 'ultimas4semanas':
      fechaLimite = moment().subtract(4, 'weeks');
      break;
    case 'ultimas8semanas':
      fechaLimite = moment().subtract(8, 'weeks');
      break;
      case 'ultimodia':
        fechaLimite = moment().startOf('day');
        break;
    default:
      fechaLimite = moment('1970-01-01');
  }

  const fechaCreacion = moment(currentPost.createdAt);
  return (fechaCreacion >= fechaLimite) &&
         (!filtro.habilidad || currentPost.habilidad === filtro.habilidad) &&
         (!filtro.arquetipo || currentPost.arquetipo === filtro.arquetipo) &&
         (!filtro.top || currentPost.top === filtro.top);
});

function refreshCardList() {
  decksApi()
    .fetchAll()
    .then((res) => {
      setCardList(res.data);
      
      // Agrupa los mazos por arquetipo
      let decks = res.data;
      let groups = {};
      decks.forEach(deck => {
        let createdAt = moment(deck.createdAt);
        let fourWeeksAgo = moment().subtract(4, 'weeks');
        if (createdAt >= fourWeeksAgo) {  // Solo considera los mazos de las últimas 4 semanas
          if (!groups[deck.arquetipo]) {
            groups[deck.arquetipo] = 0;
          }
          groups[deck.arquetipo]++;  // Incrementa la cuenta para este arquetipo
        }
      });
      setGroupedDecks(groups);
    })
    .catch((err) => console.log(err));
}

// Este componente genera los botones
function DeckButtons({ filteredDecks }) {
  const buttons = [];

  let groupedDecks = {}; // Agrupa los mazos filtrados por arquetipo
  filteredDecks.forEach(deck => {
    if (!groupedDecks[deck.arquetipo]) {
      groupedDecks[deck.arquetipo] = 0;
    }
    groupedDecks[deck.arquetipo]++;  // Incrementa la cuenta para este arquetipo
  });

  // Crear un array desde los objetos groupedDecks y ordenar por la cantidad de mazos
  const sortedDeckGroups = Object.entries(groupedDecks).sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < sortedDeckGroups.length; i++) {
    const archetype = sortedDeckGroups[i][0];
    const isDeckToday = filteredDecks.some(deck => deck.arquetipo === archetype && moment(deck.createdAt).isSame(moment(), 'day'));
    buttons.push(
      <button className={`deck-button ${isDeckToday ? 'with-icon' : ''}`} key={archetype} onClick={() => setFiltro({ ...filtro, arquetipo: archetype })}>
        
        <div className="arquetipo-image">
          <ImageCard data={{ arquetipo: archetype }} archetypes={archetypes} />
        </div>
       
        {archetype} ({groupedDecks[archetype]})
    {/* {isDeckToday && <img src="https://res.cloudinary.com/dqofcbeaq/image/upload/v1691297195/iconos%20dlp/new_icon_vkkkix.png" alt="Icono Deck Hoy" className="deck-icon-new" />} */}   
      </button>
    );
  }

  return (
    <div className="deck-buttons-container">
      {buttons}
    </div>
  );
}

  return (
    <div>
       <Header /> 
       <h2>Lista de Decks</h2>
       <div className="container">
        <label className="label-fecha">Fecha</label>
        <select name="createdAt" defaultValue="ultimas4semanas" onChange={handleFiltroChange}>
  <option value="">Todos los tiempos</option>
  <option value="ultimodia">{`Hoy (${moment().format('DD/MM/YYYY')})`}</option>
  <option value="ultimos7dias">{`Últimos 7 días (${moment().subtract(7, 'days').format('DD/MM/YYYY')} - ${moment().format('DD/MM/YYYY')})`}</option>
  <option value="ultimas2semanas">{`Últimas 2 semanas (${moment().subtract(14, 'days').format('DD/MM/YYYY')} - ${moment().format('DD/MM/YYYY')})`}</option>
  <option value="ultimas4semanas">{`Últimas 4 semanas (${moment().subtract(28, 'days').format('DD/MM/YYYY')} - ${moment().format('DD/MM/YYYY')})`}</option>
  <option value="ultimas8semanas">{`Últimas 8 semanas (${moment().subtract(56, 'days').format('DD/MM/YYYY')} - ${moment().format('DD/MM/YYYY')})`}</option>
</select>




         {/*               <label>Habilidad</label>
    <select type="text" name="habilidad" value={filtro.habilidad} onChange={handleFiltroChange}>
                                        <option value=""></option>
                                        <option value="Salamangrande">Robo del destino</option>
                                        <option value="serafin estelar">serafin estelar</option>
                                        <option value="heroes">héroes</option>
                                        <option value="">telcaballero</option>
                                        <option value="">mago oscuro</option>
                                        <option value="">shiranui</option>
                                        <option value="">meklord</option>
                                        <option value="Buster blader">buster blader</option>
                                        <option value="">Infernity</option>
                                        
                        </select>
*/} 
       {/*                 <label>Arquetipo</label>
    <select type="text" name="arquetipo" value={filtro.arquetipo} onChange={handleFiltroChange}>
                                        <option value="">Todos los arquetipos</option>
                                        <option value="Salamangrande">salamangrande</option>
                                        <option value="serafin estelar">serafin estelar</option>
                                        <option value="heroes">héroes</option>
                                        <option value="telcaballero">telcaballero</option>
                                        <option value="mago oscuro">mago oscuro</option>
                                        <option value="shiranui">shiranui</option>
                                        <option value="meklord">meklord</option>
                                        <option value="buster blader">buster blader</option>
                                        <option value="infernity">Infernity</option>
                                        <option value="orcust">Orcust</option>
                                        <option value="fuerza-s">Fuerza-s</option>
                                        <option value="velociroid">Velociroid</option>
                                        
</select>  */}
  
                        <label className="label-top">Top</label>
                        <select className="" type="text" name="top" value={filtro.top} onChange={handleFiltroChange}>
                                        <option value=""></option>
                                        <option value="Rey de duelos">Rey de duelos</option>
                                        <option value="Ensalada">Ensalada</option>
                                        <option value="Fun">Fun</option>
                                        <option value="Fun">Farmeo</option>
                                        
                        </select>

  </div>
    <div className='container'>
      
       <div className="" >
      
      <input
      value={search}
      onChange={searcher}
      className="mb-2 form-control "
      type="search"
      placeholder="Busca tu deck o arquetipo favorito"
      aria-label="Search"
     
    />
    </div>
    <div className="decksbuttons">
    <DeckButtons filteredDecks={elementosFiltrados} />
      </div>
    

<div>
  <p>Cantidad de decks: {elementosFiltrados.length}</p>
</div>
<table className="deck-table deck-table-mobile">
          <thead>
            <tr>
              <th>Arquetipo</th>
              <th>Habilidad</th>
              <th>Top</th>
              <th>Jugador</th>
              <th>Motor</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
  {elementosFiltrados
    .slice(elementosFiltrados.length - resultsToShow, elementosFiltrados.length)
    .map((element) => (
      <tr
        key={element._id}
        onClick={() => router.push(`/mazos/${element._id}`)}
        style={{
          cursor: "pointer",
          transition: "background-color 0.3s ease"
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5093bc")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
      >
        <td>
          <div className="arquetipo-image">
            <ImageCard data={element} archetypes={archetypes} />
          </div>
        </td>
        <td>{element.habilidad}</td>
        <td>{element.top}</td>
        <td>{element.jugador}</td>
        <td>{element.engine}</td>
        <td>{moment(element.createdAt).format("MMM DD, YYYY")}</td>
      </tr>
    ))
    .reverse()}
</tbody>
        </table>
{resultsToShow < elementosFiltrados.length && (
                 <div className="show-more-container">
                 <button className="show-more-button" onClick={handleShowMore}>
                   Mostrar Más
                 </button>
               </div>
        )}
     <br />
     
    </div>
    <Footer />
    </div>
  )
}