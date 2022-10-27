import React, { useState, useEffect } from "react";
import Link from "next/link";
import Card from "../components/Card.js";
import axios from "axios";
//import { Pagination } from "./cartas/#/Pagination.js"
import Header from "../components/Header.js";
import Cardlist from "../components/Cardlist.js";
import Image from "next/image.js";

import Footer from "../components/Footer.js";
import Cardinfo from "../components/Cardinfo.js";


import Tooltipsdl from "../components/Tooltipsdl"

export default function Cartas() {
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

  const cardsApi = (url = "https://dlpro-backend.herokuapp.com/cartas/") => {
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
        data.nombre.toLowerCase().includes(search.toLowerCase())
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




//<Tooltipsdl  position="right"  content={`${data.nombre }  ${  data.descripcion}  `} animationDuration={600} > 
  const ImageCard = ({ data }) => (
    <div className="listacards">
      <div className="" >
        
        <img
          src={
            data.rareza === "ur"
              ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106735/iconos%20dlp/UR_rpfhm2.png"
              : data.rareza === "sr"
              ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106742/iconos%20dlp/SR_lwpagj.png"
              : data.rareza === "r" 
              ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106750/iconos%20dlp/R_btrot4.png" 
              : data.rareza === "n"
              ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106746/iconos%20dlp/N_lofrdg.png"
              : data.rareza
          }
          className="rareza"
        ></img>
       
      </div>
      <div>
        <img
          src={`${
            data.limitacion === 3
              ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107087/iconos%20dlp/limited-3-dlp_aq3dv8.svg"
              : ""
          } ${
            data.limitacion === 4
              ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1665724325/iconos%20dlp/prihibidas_itbkvb.svg"
              : ""
          } ${
            data.limitacion === 2
              ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107082/iconos%20dlp/limited-2-dlp_yf3ttg.svg"
              : ""
          } ${
            data.limitacion === 1
              ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107074/iconos%20dlp/limited-1-dlp_b2mgxg.svg"
              : ""
          }  `}
          className={
            (data.limitacion === "") & 0 ? "ocultarinfoall" : "limitacion"
          }
        ></img>
      </div>
     <div className="grid-list-card">
        {" "}
        <Tooltipsdl  position="right"  animationDuration={600} content={
        <div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{data.nombre}</span><img
                  src={
                    data.atributo === "AGUA"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663818431/iconos%20dlp/at-a_bgb8gi.png"
                      : data.atributo === "OSCURIDAD"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663818431/iconos%20dlp/at-o_mpvorg.png"
                      : data.atributo === "LUZ"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663818431/iconos%20dlp/at-l_qr3a8g.png"
                      : data.atributo === "FUEGO"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663818431/iconos%20dlp/at-f_x0zolt.png"
                      : data.atributo === "TIERRA"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663818431/iconos%20dlp/at-t_bfdbhz.png"
                      : data.atributo === "VIENTO"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663818431/iconos%20dlp/at-v_tlniay.png"
                      : data.atributo === "DIVINIDAD"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663818431/iconos%20dlp/at-d_ssxcag.png"
                      : data.atributo === "MÁGICA"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663818431/iconos%20dlp/at-m_gojjne.png"
                      : data.atributo === "TRAMPA"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663818431/iconos%20dlp/at-tr_zdjtkd.png"
                      : ""
                  }
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {data.atributo} </span>
                <img
                  src={
                    data.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    data.atributo === "MÁGICA"
                      ? "ocultarinfo"
                      : data.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : data.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    data.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : data.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : data.atributo === "MÁGICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  data.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? data.nivel_rango_link || data.nivel_rango
                    : ""
                }   `}</span>
                <img src={data.tipo_de_carta === 'Péndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='atributo_info' ></img> <span>{data.escala === 0 ? '' : data.escala}</span>
                <img
                  src={
                    data.tipo_magica_trampa === "De juego rápido"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/de_juego_rapido_mmsikz.webp"
                      : data.tipo_magica_trampa === "Normal"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/normal_vpey0j.webp"
                      : data.tipo_magica_trampa === "De campo"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/de_campo_qoxyag.webp"
                      : data.tipo_magica_trampa === "Continua"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/continua_wh3pfj.webp"
                      : data.tipo_magica_trampa === "De contraefecto"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/contraefecto_pxkz7z.webp"
                      : data.tipo_magica_trampa
                  }
                  className="nivel_rareza_info "
                ></img>{" "}
                <span>{data.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={data.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${data.tipo} / ${data.tipo_de_carta}   ${
                    data.tipo_de_carta === "Sincronía" ? "/ Efecto" : ""
                  }  ${data.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    data.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    data.tipo_de_carta === "Link" ? "/ Efecto" :  data.tipo_de_carta === 'Péndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span className="span_info">{data.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{data.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    data.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${data.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${data.atk}  ${
                    data.tipo_de_carta === "Link"
                      ? "LINK - " + data.nivel_rango_link
                      : "DEF/ " + data.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">¿Cómo obtener?</span>
                <br />
                <span className="span_info">{data.caja}</span>
          </div>
        </div>}  > 
        <Image
       width='106'
       height='155'
      
      

          
          src={data.image.secure_url}
          className="cartatop "
          alt={data.nombre}
          
        ></Image></Tooltipsdl>{" "}
      </div>
    </div>
  );

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
  const currentPost = results.slice(indexOfFirstPost, indexOfLastPost).reverse();

  //Cambio de pagina

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <Header />
      

      <div className="gridbuscarcarta" >
      
        <input
        value={search}
        onChange={searcher}
        className="mb-2 form-control "
        type="search"
        placeholder="Buscar Carta"
        aria-label="Search"
       
      />
      </div>


      <div className="listcards ">
        {currentPost.map((element) => (
          <Link key={element._id} href={`/cartas/${element._id}/${element.nombre}`}>
        <a><ImageCard data={element} /></a> 
          </Link>
        ))}
      </div>

   {/*}   <br />
      <Pagination
        postPerPage={postPerPage}
        totalPost={results.length}
        paginate={paginate}
        /> */}

      <div className=""></div>
      <Footer />
    </div>
  );
}
