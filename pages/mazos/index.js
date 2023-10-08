import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import NavbarCustom from "../../components/NavbarCustom";
import DeckTable from "../../components/CustomTable";
import { SearchIcon } from "../../components/SearchIcon";
import { Input, Badge, Button, Select, SelectItem  } from "@nextui-org/react";
import FooterCustom from "../../components/FooterCustom";
import Head from 'next/head';


export default function Index() {
  const [cardList, setCardList] = useState([]);
  const [search, setSearch] = useState("");
  const [archetypes, setArchetypes] = useState([]);
  const [resultsToShow, setResultsToShow] = useState(10);
  const [filtro, setFiltro] = useState({
    createdAt: "ultimas8semanas",
    habilidad: "",
    arquetipo: "",
    top: "",
  });


  useEffect(() => {
    refreshCardList();
    getArchetypes();
    console.log('useEffect se ha ejecutado');
  }, []);
  

  const getArchetypes = () => {
    const baseUrl = "https://backend-dlp-neuronube.koyeb.app/arquetipos/";
    const allArchetypes = [];

    const fetchPage = (url) => {
      return axios
        .get(url)
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
    setResultsToShow((prevResults) => prevResults + 10);
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
    : cardList.filter((data) => {
        const arquetipoMatches = data.arquetipo
          .toLowerCase()
          .includes(search.toLowerCase());
        const mainDeckMatches = data.mainDeck.some((card) =>
          card.name_english.toLowerCase().includes(search.toLowerCase())
        );
        const extraDeckMatches = data.extraDeck.some((card) =>
          card.name_english.toLowerCase().includes(search.toLowerCase())
        );
        return arquetipoMatches || mainDeckMatches || extraDeckMatches;
      });

      function refreshCardList() {
        decksApi()
          .fetchAll()
          .then((res) => {
            setCardList(res.data);
            console.log('Lista de Cartas Recibida: ', res.data);
          })
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
    const defaultImage = ""; // Coloca aquí la URL de la imagen predeterminada
    const [imageArquetipo, setImageArquetipo] = useState(defaultImage);

    useEffect(() => {
      if (archetypes && Array.isArray(archetypes) && archetypes.length > 0) {
        const arquetipoData = archetypes.find(
          (arquetipoItem) => arquetipoItem.nombre_arquetipo === arquetipo
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
          className="arquetipo-image"
          alt={arquetipo}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = defaultImage;
          }}
        />
      </div>
    );
  };

  const currentPost = results.slice(-30);

  //FECHA
  const fechaActual = moment();
  const fechaFormateada = fechaActual.format("YYYY-MM-DD");


  function handleFiltroChange(name, value) {
    setFiltro(prevFiltro => ({
      ...prevFiltro,
      [name]: value,
    }));
    console.log(`Filtro ${name} actualizado a ${value}`); // Ahora debería imprimir el valor correcto
  }
  
  
  

  const elementosFiltrados = results.filter((currentPost) => {
   
    let fechaLimite;
    switch (filtro.createdAt) {
      case "ultimos7dias":
        fechaLimite = moment().subtract(7, "days");
        break;
      case "ultimas2semanas":
        fechaLimite = moment().subtract(2, "weeks");
        break;
      case "ultimas4semanas":
        fechaLimite = moment().subtract(4, "weeks");
        break;
      case "ultimas8semanas":
        fechaLimite = moment().subtract(8, "weeks");
        break;
      case "ultimodia":
        fechaLimite = moment().startOf("day");
        break;
      default:
        fechaLimite = moment("1970-01-01");
    }

    const fechaCreacion = moment(currentPost.createdAt);
    return (
      fechaCreacion >= fechaLimite &&
      (!filtro.habilidad || currentPost.habilidad === filtro.habilidad) &&
      (!filtro.arquetipo || currentPost.arquetipo === filtro.arquetipo) &&
      (!filtro.top || currentPost.top === filtro.top)
    );
  });

  function refreshCardList() {
    decksApi()
      .fetchAll()
      .then((res) => {
        setCardList(res.data);

        // Agrupa los mazos por arquetipo
        let decks = res.data;
        let groups = {};
        decks.forEach((deck) => {
          let createdAt = moment(deck.createdAt);
          let fourWeeksAgo = moment().subtract(4, "weeks");
          if (createdAt >= fourWeeksAgo) {
            // Solo considera los mazos de las últimas 4 semanas
            if (!groups[deck.arquetipo]) {
              groups[deck.arquetipo] = 0;
            }
            groups[deck.arquetipo]++; // Incrementa la cuenta para este arquetipo
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
    filteredDecks.forEach((deck) => {
      if (!groupedDecks[deck.arquetipo]) {
        groupedDecks[deck.arquetipo] = 0;
      }
      groupedDecks[deck.arquetipo]++; // Incrementa la cuenta para este arquetipo
    });

    // Crear un array desde los objetos groupedDecks y ordenar por la cantidad de mazos
    const sortedDeckGroups = Object.entries(groupedDecks).sort(
      (a, b) => b[1] - a[1]
    );

    for (let i = 0; i < sortedDeckGroups.length; i++) {
      const archetype = sortedDeckGroups[i][0];
      const isDeckToday = filteredDecks.some(
        (deck) =>
            deck.arquetipo === archetype &&
            moment(deck.createdAt).isSameOrAfter(moment().subtract(7, 'days'), "day")
    );
    
      buttons.push(
        <button
          className={`deck-button ${isDeckToday ? "with-icon" : ""}`}
          key={archetype}
          onClick={() => setFiltro({ ...filtro, arquetipo: archetype })}
        >
          {isDeckToday && <div className="new-deck">New</div>}

          <div className="arquetipo-image">
            <ImageCard
              data={{ arquetipo: archetype }}
              archetypes={archetypes}
            />
          </div>

          <div>{archetype}</div>
          {groupedDecks[archetype] > 0 && (
                   <div className="badge-position"> <Badge content={groupedDecks[archetype]}color="default"
                      >
                      {/* Puedes poner aquí cualquier otro componente si lo necesitas, 
                          pero en este caso, simplemente envolvemos el Badge alrededor 
                          del contenido numérico para mostrar el número como un Badge. */}
                    </Badge></div>  
          )}
        </button>
      );
    }

    return <div className="deck-buttons-container">{buttons}</div>;
  }

  return (
    <div>
            <Head>
        <title>Lista de Decks - Duel Links</title>
        <meta name="description" content="Explora y busca decks en Duel Links. Encuentra tu arquetipo y cartas favoritas." />
        <meta property="og:title" content="Lista de Decks - Duel Links" />
        <meta property="og:description" content="Explora y busca decks en Duel Links. Encuentra tu arquetipo y cartas favoritas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tu-sitio-web.com/ruta-de-la-pagina" />
        <meta property="og:image" content="https://tu-sitio-web.com/imagen-previa.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <NavbarCustom />
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-4xl font-semibold mb-8">Lista de Decks</h2>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-end mb-4">
          <div className="relative w-full md:w-1/2 lg:w-1/3">
            <label htmlFor="createdAt" className="block text-sm font-medium mb-1">
              Fecha
            </label>
    {/* Se ha reemplazado el elemento select estándar con el componente Select de NextUI */}
<select
    name="createdAt"
    onChange={(e) => {
        console.log(e.target.value); // Imprime el valor seleccionado
        handleFiltroChange('createdAt', e.target.value); // Accede a e.target.value
    }}
    defaultValue="ultimas8semanas"
    className="block w-full px-4 py-2 no-border rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:ring-opacity-50"
>
    <option value="">Todos los tiempos</option>
    <option value="ultimodia">{`Hoy (${moment().format("DD/MM/YYYY")})`}</option>
    <option value="ultimos7dias">{`Últimos 7 días (${moment().subtract(7, "days").format("DD/MM/YYYY")} - ${moment().format("DD/MM/YYYY")})`}</option>
    <option value="ultimas2semanas">{`Últimas 2 semanas (${moment().subtract(14, "days").format("DD/MM/YYYY")} - ${moment().format("DD/MM/YYYY")})`}</option>
    <option value="ultimas4semanas">{`Últimas 4 semanas (${moment().subtract(28, "days").format("DD/MM/YYYY")} - ${moment().format("DD/MM/YYYY")})`}</option>
    <option value="ultimas8semanas">{`Últimas 8 semanas (${moment().subtract(56, "days").format("DD/MM/YYYY")} - ${moment().format("DD/MM/YYYY")})`}</option>
</select>

        </div>
        <div className="relative w-full md:w-1/2 lg:w-1/3">
            <label htmlFor="top" className="block text-sm font-medium mb-1">
              Top
            </label>
<select
    name="top"
    onChange={(e) => {
        console.log(e.target.value); // Imprime el valor seleccionado
        handleFiltroChange('top', e.target.value); // Accede a e.target.value
    }}
    value={filtro.top}
    className="block w-full px-4 py-2 no-border rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:ring-opacity-50"
>
    <option value="">Seleccione una opción</option>
    <option value="Rey de duelos">Rey de duelos</option>
    <option value="Ensalada">Ensalada</option>
    <option value="Fun">Fun</option>
    <option value="Farmeo">Farmeo</option>
</select>

      </div>
      </div>
</div>
<div className="container mx-auto px-4 py-6">
  <div className="mb-6">
    <Input
      className='w-full md:w-1/2 lg:w-1/3'
      type='text'
      startContent={<SearchIcon size={18} />}
      placeholder='Busca tu deck, carta o arquetipo favorito'
      value={search}
      onChange={searcher}
    />
        </div>
        <div className="container mx-2" >
        <div className="decksbuttons">
          <DeckButtons filteredDecks={elementosFiltrados} />
        </div>
</div>
        <div>
          <p>Cantidad de decks: {elementosFiltrados.length}</p>
        </div>
        <DeckTable data={elementosFiltrados} archetypes={archetypes} resultsToShow={resultsToShow} />
        {resultsToShow < elementosFiltrados.length && (
          <div className="show-more-container">
      <Button color="primary" onClick={handleShowMore}>
        Mostrar más
      </Button> 
          </div>
        )}
        <br />
      </div>
      <FooterCustom />
    </div>
  );
}
