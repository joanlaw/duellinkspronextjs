import React, { useState } from "react";
import moment from "moment";
import { useRouter } from "next/router";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination
} from "@nextui-org/react";
import ImageCard from "./ImageCard"; // Ajusta la ruta según la ubicación real

const DeckTable = ({ data, archetypes, resultsToShow }) => {
  const router = useRouter();
  const [page, setPage] = useState(1); // Estado para la página actual
  
  // Número de filas por página, que se basa en resultsToShow
  const rowsPerPage = resultsToShow; 

  // Calcula el número total de páginas
  const total = Math.ceil(data.length / rowsPerPage);

  // Obtiene los mazos para la página actual
  const currentData = data.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <div className="flex flex-col gap-6">
      <Table
        className="rounded-lg shadow-lg"
        selectionMode="single"
        defaultSelectedKeys={["2"]}
        aria-label="Tabla de mazos"
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
          <TableColumn className="hidden md:table-cell">Jugador</TableColumn>
          <TableColumn>Motor</TableColumn>
          <TableColumn className="hidden md:table-cell">Fecha</TableColumn>
        </TableHeader>
        <TableBody>
          {currentData.map((element) => (
            <TableRow
              key={element._id}
              onClick={() => router.push(`/mazos/${element._id}`)}
            >
              <TableCell>
                <div className="arquetipo-image">
                  <ImageCard
                    data={element}
                    archetypes={archetypes}
                    style={{
                      width: "80px",
                      height: "auto",
                      maxWidth: "100%",
                    }}
                    className="md:w-100"
                  />
                </div>
              </TableCell>
              <TableCell>{element.habilidad}</TableCell>
              <TableCell>{element.top}</TableCell>
              <TableCell className="hidden md:table-cell">{element.jugador}</TableCell>
              <TableCell>{element.engine}</TableCell>
              <TableCell className="hidden md:table-cell">
                {moment(element.createdAt).format("MMM DD, YYYY")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DeckTable;