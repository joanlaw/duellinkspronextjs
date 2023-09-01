import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Pagination,
} from "@nextui-org/react";
import { SearchIcon } from "../SearchIcon";  // Asegúrate de tener este componente o importa tu propio icono de búsqueda

const PlayerTable = ({ players }) => {
  const [playerDetails, setPlayerDetails] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const fetchPlayerDetails = async () => {
      try {
        const idsString = players.join(',');
        const response = await axios.get(`https://api.duellinks.pro/users?ids=${idsString}`);
        setPlayerDetails(response.data);
      } catch (error) {
        console.error('Error al obtener detalles de los jugadores:', error);
      }
    };

    fetchPlayerDetails();
  }, [players]);

  const filteredItems = playerDetails.filter((player) => 
    player.username.toLowerCase().includes(filterValue.toLowerCase())
  );

  const pages = Math.ceil(filteredItems.length / rowsPerPage);
  
  const items = filteredItems.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const onSearchChange = useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onRowsPerPageChange = useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onPaginationChange = useCallback((newPage) => {
    setPage(newPage);
  }, []);

  return (
    <div>
      <div className="flex justify-between gap-3 items-end">
        <Input
          isClearable
          placeholder="Search by name..."
          startContent={<SearchIcon />}
          value={filterValue}
          onValueChange={onSearchChange}
        />
      </div>
      <div className="flex justify-between items-center">
        <span>Total {filteredItems.length} players</span>
        <label>
          Rows per page:
          <select onChange={onRowsPerPageChange}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </label>
      </div>

      <Table aria-label="Players table">
        <TableHeader>
          <TableColumn>Avatar</TableColumn>
          <TableColumn>Username</TableColumn>
        </TableHeader>
        <TableBody>
          {items.map((player) => (
            <TableRow key={player._id}>
              <TableCell><img src={player.avatar} alt={player.username} width="50" /></TableCell>
              <TableCell>{player.username}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {pages > 1 ? (
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="primary"
            page={page}
            total={pages}
            onChange={onPaginationChange}
          />
        </div>
      ) : null }
    </div>
  );
};

export default PlayerTable;
