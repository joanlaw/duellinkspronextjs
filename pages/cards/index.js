import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Head from "next/head.js";
import NavbarCustom from "../../components/NavbarCustom.js";
import { SearchIcon } from "../../components/SearchIcon.js";
import {Pagination, Input} from "@nextui-org/react";
import FooterCustom from "../../components/FooterCustom.js";
import CardPopup from "../../components/reportes/CardPopup.js";

export default function Cards() {
  const [cardList, setCardList] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // New state for the total number of pages

  const [selectedCard, setSelectedCard] = useState(null);

  const handleClosePopup = () => {
    setSelectedCard(null);
  };

  const handleClickCard = (card) => {
    setSelectedCard(card);
  };

  useEffect(() => {
    refreshCardList();
  }, [currentPage, search]);

  const cardsApi = (url = "https://api.duellinks.pro/cards/") => {
    return {
      fetchAll: (searchTerm, page) =>
        axios.get(url, {
          params: {
            search: searchTerm,
            page: page - 1,
          }
        }),
    };
  };

  const searcher = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1); // Reset to the first page when a new search is made
  };

  function refreshCardList() {
    setLoading(true);
    cardsApi()
      .fetchAll(search, currentPage)
      .then((res) => {
        setCardList(res.data.docs);
        setTotalPages(res.data.totalPages); // Update the total number of pages
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }



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
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto">
        <div className="">
          <br />
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
          <p>Cantidad de cartas: {cardList.length}</p>
        </div>
        <div className="listcards ">
          {cardList.map((element) => (
            <ImageCard key={element._id} data={element} />
          ))}
        </div>
<div className="text-center mx-auto">
  <Pagination
    className="inline-block"
    isCompact
    showControls
    total={totalPages} // Usar el número total de páginas
    initialPage={1}
    onChange={(newPage) => setCurrentPage(newPage)}
  />
</div>
{selectedCard && <CardPopup selectedCard={selectedCard} handleClosePopup={handleClosePopup} />}
      </div>
      <FooterCustom />
      </div>
    </>
  );
}
