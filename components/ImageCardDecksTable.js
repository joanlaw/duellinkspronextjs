import React, { useState, useEffect } from 'react';

const ImageCardTable = ({ data, archetypes }) => {
  const arquetipo = data?.arquetipo || '';
  const defaultImage = ''; // Provide the URL of the default image
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

  return <img src={imageArquetipo} alt={arquetipo} />;
};

export default ImageCardTable;
