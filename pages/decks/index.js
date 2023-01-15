import { useState, useEffect } from "react"
import Header from "../../components/Header"
import axios from "axios"
import Footer from "../../components/Footer"
import Link from "next/link"
import Image from "next/image"

export default function Index() {

    const [cardList, setCardList] = useState([]);
    const [search, setSearch] = useState("");
    const [recordForEdit, setrecordForEdit] = useState("");
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(36);
  
    const [rarezacards, setRarezacards] = useState("");
  
    useEffect(() => {
      refreshCardList();
    }, []);
  
    const cardsApi = (url = "https://api.duellinks.pro/decks/") => {
      return {
        fetchAll: () => axios.get(url),
        create: (newRecord) => axios.post(url, newRecord),
        update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
        delete: (id) => axios.delete(url + id),
      };
    };
  
    //Funcion de búsqueda
  
    const searcher = (e) => {
      setSearch(e.target.value);
      //console.log(e.target.value);
    };
  
    //metodo de filtrado 1
  
    // let results = []
    // if (!search) {
    //   results = cardList
    //  } else {
    //    results = cardList.filter( (dato) =>
    //    dato.nombre.toLowerCase().includes(search.toLocaleLowerCase()))
    //  }
  
    //Metodo filtrado 2
  
    const results = !search
      ? cardList
      : cardList.filter((data) =>
          data.arquetipo.toLowerCase().includes(search.toLowerCase())
        );
  
    //const results = search? Cardlist : cardList.filter((dato)=>dato.nombre.toLowerCase().includes(search?.toLowerCase()))
  
    //const results = !search ? cardList : cardList.filter((dato)=> dato.nombre.toLowerCase().includes(search?.toLocaleLowerCase()))
  
    function refreshCardList() {
      cardsApi()
        .fetchAll()
        .then((res) => setCardList(res.data))
        .catch((err) => console.log(err));
    }
  
    const addOrEdit = (formData, onSuccess) => {
      //  if (FormData.get('_id') == "0")
      cardsApi()
        .create(formData)
        .then((res) => {
          onSuccess();
          refreshCardList();
        })
        .catch((err) => console.log(err));
      //   else
      //    cardsApi().update(FormData.get('_id'),FormData)
      //   .then(res => {
      //      onSuccess();
      //      refreshCardList();
      //  })
      // .catch(err => console.log(err))
    };
  
    //  const showRecordDetails = data => {
    //  setrecordForEdit(data)
    //  }
  




    //Solicitar a la api los datos de cartas para mostrar
  

    const ImageCard = ({data})=>{
          //OBTNER IMAGNES DE ARQUETIPOS

    const UrlImageArquetipo = {
      Salamangrande: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1665726153/imagenes%20arquetipos/image_r5nz4a.webp",
      "Buster blader": "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666074601/imagenes%20arquetipos/buster_blader__the_dragon_destroyer_swordsman_by_omgitsjohannes_dbt3eth-fullview_ywyylf.jpg",
      "Serafin estelar": "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666071109/imagenes%20arquetipos/tumblr_72189f00d45466bbaed867d46c875b3a_dff1f5cc_640_xti00b.jpg",
      "Mago oscuro": "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666064732/imagenes%20arquetipos/Foto_mago_oscuro_ldozix.jpg",
      "Héroes": "https://res.cloudinary.com/dqofcbeaq/image/upload/v1665797061/imagenes%20arquetipos/E.H._Stratos_vef3ns.png",
      "Shiranui": "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666064774/imagenes%20arquetipos/Shiranui_svasvr.png",
      "Inférnicos": "https://res.cloudinary.com/dqofcbeaq/image/upload/v1667696211/imagenes%20arquetipos/Foto_archidemonio_inf_3Frnico_1_bymuoi.webp",
      "Mekk-caballeros": "https://res.cloudinary.com/dqofcbeaq/image/upload/v1673761355/imagenes%20arquetipos/mekk_icono_jdd0xz.webp"
    }

    const ImagenArquetipos = data.arquetipo

    const ImageArquetipoDefault = ""

    const ImageArquetipo = UrlImageArquetipo[ImagenArquetipos]  || ImageArquetipoDefault

    return (
      <div>
        <img src={ImageArquetipo} className='decksimage'></img>
      </div>
    )

    }
  
//    const ImageCard = ({ data }) => (
      
 //     <div >
 //       <img src={data.arquetipo_image} className='decksimage' ></img>{/*<span className='nombresdecks' >{data.arquetipo}</span> */}
 //       
 //     </div>
 //   );
  
    //Solicitar a la api datos funcion para limitacion
  
    //    function imageCard(data){
    //     const imageCard = data()
    //     return (
    //    <div className='card'>
    //     <div><img src={data.rareza} className='rareza'  ></img></div>
    //    <img src={data.image.secure_url} className='card-img-top' height='200px' max-width='121.41px' ></img>
    //   </div>
    //     )
    // }
  
    // Mostrar numero de cartas actual en el post
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = results.slice(indexOfFirstPost, indexOfLastPost);
  
    //Cambio de pagina

  return (
    <div>
       <Header /> 
       <br />
    <div className=' container'>
      
       <div className="" >
      
      <input
      value={search}
      onChange={searcher}
      className="mb-2 form-control "
      type="search"
      placeholder="Buscar Deck"
      aria-label="Search"
     
    />
    </div>
       <div className="listcards ">
        {currentPost.map((element)=> (
          <Link key={element._id}  href={`/decks/${element._id}`}>
          <a><ImageCard data={element} /></a> 
          </Link>
        )).reverse()}
      </div>
   {/*   <Pagination
        postPerPage={postPerPage}
        totalPost={results.length}
        paginate={paginate}
        /> */}
     <br />
     
    </div>
    <Footer />
    </div>
  )
}
