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
  
  const [rarezacards, setRarezacards] = useState("");

  const [groupedDecks, setGroupedDecks] = useState({});
  
  const router = useRouter();

  useEffect(() => {
    refreshCardList();
  }, []);
  
  const decksApi = (url = "https://api.duellinks.pro/mazos/") => {
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
  
  const UrlImageArquetipo = {
    "Salamangreat": "https://res.cloudinary.com/dqofcbeaq/image/upload/v1665726153/imagenes%20arquetipos/image_r5nz4a.webp",
    "Buster blader": "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666074601/imagenes%20arquetipos/buster_blader__the_dragon_destroyer_swordsman_by_omgitsjohannes_dbt3eth-fullview_ywyylf.jpg",
    "Serafin estelar": "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666071109/imagenes%20arquetipos/tumblr_72189f00d45466bbaed867d46c875b3a_dff1f5cc_640_xti00b.jpg",
    "mago oscuro": "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666064732/imagenes%20arquetipos/Foto_mago_oscuro_ldozix.jpg",
    "shiranui": "https://res.cloudinary.com/dqofcbeaq/image/upload/v1688146561/imagenes%20arquetipos/59843383_snj3jw.jpg",
    "Infernity": "https://res.cloudinary.com/dqofcbeaq/image/upload/v1667696211/imagenes%20arquetipos/Foto_archidemonio_inf_3Frnico_1_bymuoi.webp",
    "Mekk-caballeros": "https://res.cloudinary.com/dqofcbeaq/image/upload/v1673761355/imagenes%20arquetipos/mekk_icono_jdd0xz.webp",
    "Orcust": "https://res.cloudinary.com/dqofcbeaq/image/upload/v1683839693/imagenes%20arquetipos/dingirsu__the_orcust_of_the_evening_star_b0lf7x.jpg",
    "fuerza-s": "https://res.cloudinary.com/dqofcbeaq/image/upload/v1687821946/imagenes%20arquetipos/22180094_vy8kgu.jpg",
    "cristron": "https://res.cloudinary.com/dqofcbeaq/image/upload/v1687823488/imagenes%20arquetipos/13455674_1_lef0vr.jpg",
    "Rokket": "https://res.cloudinary.com/dqofcbeaq/image/upload/v1687831723/imagenes%20arquetipos/68464358_1_vffatp.jpg",
    "gandora": "https://res.cloudinary.com/dqofcbeaq/image/upload/v1687974314/imagenes%20arquetipos/58330108_1_dvhgsv.jpg",
    "héroes del destino": "https://res.cloudinary.com/dqofcbeaq/image/upload/v1688146455/imagenes%20arquetipos/63362460_qy2mpp.jpg",
    "héroes elementales": "https://res.cloudinary.com/dqofcbeaq/image/upload/v1688150912/imagenes%20arquetipos/40044918_x1m1us.jpg",
    "héroes": "https://res.cloudinary.com/dqofcbeaq/image/upload/v1665797061/imagenes%20arquetipos/E.H._Stratos_vef3ns.png",
    "speedroid": "https://res.cloudinary.com/dqofcbeaq/image/upload/v1688151038/imagenes%20arquetipos/5772618_1_cpzzdx.jpg",
    "sablelemento": "https://res.cloudinary.com/dqofcbeaq/image/upload/v1688151038/imagenes%20arquetipos/45702014_hl0dd2.jpg",
    "invoked": "https://res.cloudinary.com/dqofcbeaq/image/upload/v1688151223/imagenes%20arquetipos/86120751_1_yra1cn.jpg",
    "Odd-Eyes": "https://res.cloudinary.com/dqofcbeaq/image/upload/v1688598295/imagenes%20arquetipos/16178681_1_h4uupe.jpg",
    "Destiny Hero": "https://images.ygoprodeck.com/images/cards_cropped/63362460.jpg",
    "Gouki": "https://images.ygoprodeck.com/images/cards_cropped/24073068.jpg",
    "Nekroz": "https://images.ygoprodeck.com/images/cards_cropped/26674724.jpg",
    "Blackwing": "https://images.ygoprodeck.com/images/cards_cropped/91351370.jpg",
    "Lunalight": "https://images.ygoprodeck.com/images/cards_cropped/24550676.jpg",
    "Yubel": "https://images.ygoprodeck.com/images/cards_cropped/78371393.jpg",
    "Fur Hire": "https://images.ygoprodeck.com/images/cards_cropped/93850652.jpg"
  };
  
  const ImageCard = ({ data }) => {
    const arquetipo = data?.arquetipo || "";
    const imageArquetipo = UrlImageArquetipo[arquetipo] || "";
  
    return (
      <div>
        <img src={imageArquetipo} className='arquetipo-image' alt={arquetipo} />
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
    buttons.push(
      <button className="deck-button" key={archetype} onClick={() => setFiltro({ ...filtro, arquetipo: archetype })}>
        <div className="arquetipo-image">
          <ImageCard data={{ arquetipo: archetype }} />
        </div>
        {archetype} ({groupedDecks[archetype]})
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
        <label>Fecha</label>
       <select name="createdAt" defaultValue="" onChange={handleFiltroChange}>
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
  
                        <label className="">Top</label>
                        <select className="" type="text" name="top" value={filtro.top} onChange={handleFiltroChange}>
                                        <option value=""></option>
                                        <option value="Rey de duelos">Rey de duelos</option>
                                        <option value="Ensalada">Ensalada</option>
                                        <option value="Fun">Fun</option>
                                        
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
      <th>Racha</th>
      <th>Fecha</th>
    </tr>
  </thead>
  <tbody>
  {elementosFiltrados.map((element) => (
        <tr 
          key={element._id} 
          onClick={() => router.push(`/mazos/${element._id}`)}
          style={{ 
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5093bc'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
        >
          <td>
            <div className="arquetipo-image">
              <ImageCard data={element} />
            </div>
          </td>
          <td>{element.habilidad}</td>
          <td>{element.top}</td>
          <td>{element.jugador}</td>
          <td>{element.racha}</td>
          <td>{moment(element.createdAt).format("MMM DD, YYYY")}</td>
        </tr>
      )).reverse()}
  </tbody>
</table>

     <br />
     
    </div>
    <Footer />
    </div>
  )
}