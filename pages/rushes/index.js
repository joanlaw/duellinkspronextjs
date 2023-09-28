import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Head from 'next/head';
import NavbarCustom from '../../components/NavbarCustom';
import { SearchIcon } from '../../components/SearchIcon';
import { Pagination, Input } from '@nextui-org/react';
import FooterCustom from '../../components/FooterCustom';
import Rushes from '../../components/rushes/Rushes';
import RushPopup from '../../components/rushes/RushPopup';

export default function RushesPage() {
  const [rushList, setRushList] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [selectedRush, setSelectedRush] = useState(null);

  const handleClosePopup = () => {
    setSelectedRush(null);
  };

  const handleClickRush = (rush) => {
    setSelectedRush(rush);
  };

  useEffect(() => {
    refreshRushList();
  }, [currentPage, search]);

  const rushesApi = (url = 'https://api.duellinks.pro/filteredRush') => {
    return {
      fetchAll: (searchTerm, page) =>
        axios.get(url, {
          params: {
            search: searchTerm,
            page: page,
          },
        }),
    };
  };

  const searcher = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  function refreshRushList() {
    setLoading(true);
    rushesApi()
      .fetchAll(search, currentPage)
      .then((res) => {
        setRushList(res.data.docs);
        setTotalPages(res.data.totalPages);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <>
      <Head>
        <title>Rushes | Duel Links Pro</title>
        <meta
          name="Rushes"
          content="All Rushes from the game Yugioh Duel Links in English"
        />
      </Head>
      <NavbarCustom />
      <div className="flex flex-col min-h-screen">
        <div className="container mx-auto">
          <div className="">
            <br />
            <Input
              className="w-full lg:w-1/3"
              type="text"
              startContent={<SearchIcon size={18} />}
              placeholder="Search Rush.."
              value={search}
              onChange={searcher}
            />
          </div>
          <div>
            <p>Number of Rushes: {rushList.length}</p>
          </div>
          {/* Renderiza el componente Rushes y pasa las propiedades necesarias */}
          <Rushes rushes={rushList} handleClickRush={handleClickRush} />
          <br />
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
          {/* Renderiza el componente RushPopup si selectedRush no es null */}
          {selectedRush && (
            <RushPopup selectedRush={selectedRush} onClose={handleClosePopup} />
          )}
        </div>
        <FooterCustom />
      </div>
    </>
  );
}
