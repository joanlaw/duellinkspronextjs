import React, { useState, useEffect } from "react";
import Link from "next/link";
//import Card from "../components/Card.js";
import axios from "axios";
import Header from "../../components/Header.js";
//import Cardlist from "../components/Cardlist.js";
import Image from "next/image.js";
import Footer from "../../components/Footer.js";
//import Cardinfo from "../components/Cardinfo.js";
import Head from "next/head.js";
import NavbarCustom from "../../components/NavbarCustom.js";
import { SearchIcon } from "../../components/SearchIcon.js";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button, Input} from "@nextui-org/react";
import FooterCustom from "../../components/FooterCustom.js";

export default function Cards() {
  const [cardList, setCardList] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(48);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClosePopup = () => {
    setSelectedCard(null);
  };

  const handleClickCard = (card) => {
    setSelectedCard(card);
  };

  useEffect(() => {
    refreshCardList();
  }, []);

  const cardsApi = (url = "https://api.duellinks.pro/cards/") => {
    return {
      fetchAll: (searchTerm, page, size) =>
        axios.get(url, {
          params: {
            search: searchTerm,
            page: page - 1,
            size: size
          }
        }),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
      delete: (id) => axios.delete(url + id),
    };
  };

  const searcher = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1); // Reset current page when search changes
    refreshCardList();
  };

  function refreshCardList() {
    setLoading(true);
    cardsApi()
      .fetchAll(search, currentPage, cardsPerPage)
      .then((res) => {
        setCardList(res.data.docs);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  const addOrEdit = (formData, onSuccess) => {
    cardsApi()
      .create(formData)
      .then((res) => {
        onSuccess();
        refreshCardList();
      })
      .catch((err) => console.log(err));
  };

  const ImageCard = ({ data }) => (
    <div className="listacards">
      <div>
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
        <img
          width="106"
          height="155"
          src={data.image.secure_url}
          className="cartatop"
          alt={data.nombre}
          onClick={() => handleClickCard(data)}
        />
      </div>
    </div>
  );

  const results = !search
    ? cardList
    : cardList.filter((data) =>
        data.nombre.toLowerCase().includes(search.toLowerCase()) ||
        data.name_english.toLowerCase().includes(search.toLowerCase())
      );
  const currentPost = results.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPagination = () => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(results.length / cardsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="pagination">
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`pagination-btn ${number === currentPage ? 'active' : ''}`}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        ))}
      </div>
    );
  };


  return (
    <>
      <Head>
        <title>Cartas | Duel Links Pro</title>
        <meta
          name="Cartas"
          content="Todas las cartas del juego Yugioh Duel Links en español"
        />
      </Head>
      <NavbarCustom />
      <br />
      <div className="container mx-auto">
        <div className="">
        <Input
            className='w-full lg:w-1/3'
            type='text'
            startContent={<SearchIcon size={18} />}
            placeholder='Buscar Carta..'
            value={search}
            onChange={searcher}
        />
        </div>
        <div>
          <p>Cantidad de cartas: {currentPost.length}</p>
        </div>
        <div className="listcards ">
          {currentPost.map((element) => (
            <ImageCard key={element._id} data={element} />
          ))}
        </div>
        {selectedCard && (
          <div className="popup" onClick={handleClosePopup}>
            <div className="popup-content" onClick={(event) => event.stopPropagation()}>
              <div className="popup-image">
                {selectedCard.rareza && <img src={
                  selectedCard.rareza === "ur"
                  ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106735/iconos%20dlp/UR_rpfhm2.png"
                  : selectedCard.rareza === "sr"
                  ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106742/iconos%20dlp/SR_lwpagj.png"
                  : selectedCard.rareza === "r" 
                  ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106750/iconos%20dlp/R_btrot4.png"
                  : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106746/iconos%20dlp/N_lofrdg.png"
                } alt="" className="card-rareza" width={200} height={100} layout={'responsive'} />}
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
                <p className="more-info-button">Más información</p>
              </Link>
            </div>
          </div>
        )}
      </div>
      <br />
      <FooterCustom />
    </>
  );
}
