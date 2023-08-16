import React, { useState, useEffect } from "react";

const ImageCard = ({ data, archetypes }) => {
  const arquetipo = data?.arquetipo || "";
  const defaultImage = ""; // Coloca aquí la URL de la imagen predeterminada
  const [imageArquetipo, setImageArquetipo] = useState(defaultImage);

  useEffect(() => {
    if (archetypes && Array.isArray(archetypes) && archetypes.length > 0) {
      const arquetipoData = archetypes.find(
        (arquetipoItem) => arquetipoItem.nombre_arquetipo === arquetipo
      );
      if (arquetipoData) {
        setImageArquetipo(arquetipoData.image_arquetipo || defaultImage);
      } else {
        setImageArquetipo(defaultImage);
      }
    } else {
      setImageArquetipo(defaultImage);
    }
  }, [arquetipo, archetypes]);

  return (
    <div>
      <img
        src={imageArquetipo}
        className="arquetipo-image w-10 h-auto" // Ajusta las clases para el tamaño deseado
        alt={arquetipo}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = defaultImage;
        }}
      />
    </div>
  );
};

export default ImageCard;