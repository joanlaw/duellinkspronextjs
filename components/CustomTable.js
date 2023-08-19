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
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import ImageCard from "./ImageCard"; // Ajusta la ruta según la ubicación real

const colors = ["default", "primary", "secondary", "success", "warning", "danger"];

const DeckTable = ({ data, archetypes, resultsToShow, currentArquetipo  }) => {
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState("default");

  const filteredData = data.filter(deck => deck.arquetipo === currentArquetipo);

  return (
<div className="flex flex-col gap-6">
  <Table
    className="rounded-lg shadow-lg"
    color={selectedColor}
    selectionMode="single"
    defaultSelectedKeys={["2"]}
    aria-label="Tabla de mazos"
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
      {data
        .slice(Math.max(data.length - resultsToShow, 0), data.length)
        .map((element) => (
          <TableRow
            key={element._id}
            onClick={() => router.push(`/mazos/${element._id}`)}
            className="transition-colors duration-300 ease-in-out hover:bg-blue-100 cursor-pointer"
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
        ))
        .reverse()}
    </TableBody>
  </Table>
  <RadioGroup
    label="Color de selección"
    orientation="horizontal"
    value={selectedColor}
    onValueChange={setSelectedColor}
    className="mt-4"
  >
    {colors.map((color) => (
      <Radio
        key={color}
        color={color}
        value={color}
        className="capitalize"
      >
        {color}
      </Radio>
    ))}
  </RadioGroup>
</div>
  );
};

export default DeckTable;
