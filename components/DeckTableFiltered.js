import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination } from "@nextui-org/react";

function DeckTableFiltered ({ arquetipo }) {
  const [mazos, setMazos] = useState([]);
  const [page, setPage] = useState(1);
  const router = useRouter();
  const rowsPerPage = 10;  // Número de filas por página

  console.log(arquetipo);

  useEffect(() => {
    if (arquetipo) {
      fetch('https://api.duellinks.pro/mazos')
        .then((response) => response.json())
        .then((data) => {
          const filteredMazos = data.filter(
            (mazo) => mazo.arquetipo.toLowerCase() === arquetipo.toLowerCase()
          ).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          setMazos(filteredMazos);
        });
    }
  }, [arquetipo]);

  // Calcula el número total de páginas
  const total = Math.ceil(mazos.length / rowsPerPage);

  // Obtiene los mazos para la página actual
  const currentMazos = mazos.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <div className="w-full h-full">
      <Table 
        selectionMode="single" 
        aria-label="Mazos filtrados por arquetipo"
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
          <TableColumn>Jugador</TableColumn>
          <TableColumn>Habilidad</TableColumn>
          <TableColumn>Top</TableColumn>
          <TableColumn className="hidden md:table-cell">Puesto</TableColumn>
          <TableColumn className="hidden md:table-cell">Fecha</TableColumn>
        </TableHeader>
        <TableBody>
          {currentMazos.map((mazo) => (
            <TableRow key={mazo._id} onClick={() => router.push(`/mazos/${mazo._id}`)}>
              <TableCell>{mazo.jugador}</TableCell>
              <TableCell>{mazo.habilidad}</TableCell>
              <TableCell>{mazo.top}</TableCell>
              <TableCell className="hidden md:table-cell">{mazo.puesto}</TableCell>
              <TableCell className="hidden md:table-cell">{new Date(mazo.createdAt).toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default DeckTableFiltered;