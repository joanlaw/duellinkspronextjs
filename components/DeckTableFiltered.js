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
import ImageCardTable from "./ImageCardDecksTable";

const colors = ["default", "primary", "secondary", "success", "warning", "danger"];

const DeckTableFiltered = ({ data, archetypes, resultsToShow, currentArquetipo }) => {
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState("default");

  const filteredData = data.filter(deck => deck.arquetipo === currentArquetipo);

  return (
    <div className="flex flex-col gap-3">
      <Table
        color={selectedColor}
        selectionMode="single"
        defaultSelectedKeys={["2"]}
        aria-label="Tabla de mazos filtrada"
      >
        <TableHeader>
          <TableColumn>Arquetipo</TableColumn>
          <TableColumn>Habilidad</TableColumn>
          <TableColumn>Top</TableColumn>
          <TableColumn>Jugador</TableColumn>
          <TableColumn>Motor</TableColumn>
          <TableColumn>Fecha</TableColumn>
        </TableHeader>
        <TableBody>
          {filteredData
            .slice(Math.max(filteredData.length - resultsToShow, 0), filteredData.length)
            .map((element) => (
              <TableRow
                key={element._id}
                onClick={() => router.push(`/mazos/${element._id}`)}
                style={{
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#5093bc")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "")
                }
              >
                <TableCell>
                  <div className="arquetipo-image">
                    <ImageCard
                      data={element}
                      archetypes={archetypes}
                      style={{ width: "100px", height: "auto" }} // Ajusta las dimensiones aquí
                    />
                  </div>
                </TableCell>
                <TableCell>{element.habilidad}</TableCell>
                <TableCell>{element.top}</TableCell>
                <TableCell>{element.jugador}</TableCell>
                <TableCell>{element.engine}</TableCell>
                <TableCell>
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

export default DeckTableFiltered;
