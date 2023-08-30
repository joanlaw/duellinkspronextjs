import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../../contexts/UserContext';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination } from "@nextui-org/react";

function UserDecks() {
  const [mazos, setMazos] = useState([]);
  const [page, setPage] = useState(1);
  const { username } = useUser();
  const router = useRouter();
  const rowsPerPage = 10;  // Número de filas por página

  useEffect(() => {
    fetch('https://api.duellinks.pro/mazos')
      .then((response) => response.json())
      .then((data) => {
        const filteredMazos = data.filter(
          (mazo) => mazo.jugador.toLowerCase() === username.toLowerCase()
        ).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setMazos(filteredMazos);
      });
  }, [username]);

  // Calcula el número total de páginas
  const total = Math.ceil(mazos.length / rowsPerPage);

  // Obtiene los mazos para la página actual
  const currentMazos = mazos.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <div className="w-full h-full">
      <Table 
        selectionMode="single" 
        aria-label="Mazos del jugador"
        bottomContent={
          total > 0 ? (
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="primary"
                page={page}
                total={total}
                onChange={(newPage) => setPage(newPage)}
              />
            </div>
          ) : null
        }
      >
        <TableHeader>
          <TableColumn>Arquetipo</TableColumn>
          <TableColumn>Habilidad</TableColumn>
          <TableColumn>Top</TableColumn>
          <TableColumn className="hidden md:table-cell">Motor</TableColumn>
          <TableColumn className="hidden md:table-cell">Fecha</TableColumn>
        </TableHeader>
        <TableBody>
          {currentMazos.map((mazo) => (
            <TableRow key={mazo._id} onClick={() => router.push(`/mazos/${mazo._id}`)}>
              <TableCell>{mazo.arquetipo}</TableCell>
              <TableCell>{mazo.habilidad}</TableCell>
              <TableCell>{mazo.top}</TableCell>
              <TableCell className="hidden md:table-cell">{mazo.engine}</TableCell>
              <TableCell className="hidden md:table-cell">{new Date(mazo.createdAt).toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default UserDecks;
