import React, { useState } from 'react';
import axios from 'axios';
import { Input } from '@nextui-org/react';
import { useUser } from "../../contexts/UserContext";  // Asegúrate de ajustar la ruta de importación al lugar correcto

const CreateTournamentForm = () => {
  const user = useUser(); 
  
  const initialFormData = {
    league_name: '',
    league_format: '',
    start_date: '',
    enlace_torneo: '',
    image: '', // Cambiar "image_torneo" a "image"
    infoTorneo: {
      format: '',
      banlist: '',
      deck_info: '',
      eliminacion: ''
    }
  };

  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);

const handleImageChange = (e) => {
  setImageFile(e.target.files[0]);
};


const handleChange = (e) => {
  const { name, value } = e.target;
  if (name.includes('infoTorneo')) {
    const nestedField = name.split('.')[1];
    setFormData((prevFormData) => ({
      ...prevFormData,
      infoTorneo: {
        ...prevFormData.infoTorneo,
        [nestedField]: value,
      },
    }));
  } else {
    setFormData({
      ...formData,
      [name]: value,
    });
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const formDataToSend = new FormData();
  Object.keys(formData).forEach((key) => {
    formDataToSend.append(key, formData[key]);
  });

  if (imageFile) {
    formDataToSend.append('image', imageFile);
  }

  formDataToSend.append('organizer', user.discordId);

  try {
    const response = await axios.post('https://api.duellinks.pro/leagues', formDataToSend, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log('Torneo creado con éxito', response.data);
    setFormData(initialFormData);
    setImageFile(null);
  } catch (error) {
    console.error('Hubo un problema al crear el torneo', error);
  }
};


  const variants = ['format', 'banlist', 'deck_info', 'eliminacion'];

  const getOptionsForVariant = (variant) => {
    switch (variant) {
      case 'format':
        return ['Fun', 'Libre', 'Ensalada'];
      case 'banlist':
        return ['Con banlist', 'Sin banlist'];
      case 'deck_info':
        return ['deck + extra deck', 'deck + extra deck + side deck'];
      case 'eliminacion':
        return ['Eliminacion directa', 'Rondas suizas', 'Bo3'];
      default:
        return [];
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
      <Input
        type="text"
        name="league_name"
        value={formData.league_name}
        onChange={handleChange}
        placeholder="Nombre del Torneo"
        label="Nombre del Torneo"
      />
      <select
        name="league_format"
        value={formData.league_format}
        onChange={handleChange}
        className="input-style" // Clase para el estilo, puedes reutilizar la clase de Input
      >
        <option value="">Tipo de liga o torneo</option>
        <option value="formato1">Torneo</option>
        <option value="formato2">Liga</option>
        {/* Agrega más opciones aquí si es necesario */}
      </select>
      {/* Mantén los campos restantes como Input */}
      <Input
        type="date"
        name="start_date"
        value={formData.start_date}
        onChange={handleChange}
        label="Fecha de inicio"
      />
      <Input
        type="url"
        name="enlace_torneo"
        value={formData.enlace_torneo}
        onChange={handleChange}
        placeholder="Enlace del Torneo"
        label="Enlace del Torneo"
      />
      <Input
        type="file"
        name="image" // Cambiar "image_torneo" a "image"
        onChange={handleImageChange}
        label="Imagen del Torneo"
      />

<div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
  {variants.map((variant) => (
    <select
      key={variant}
      name={`infoTorneo.${variant}`}
      value={formData.infoTorneo[variant]}
      onChange={(e) => handleChange(e)}
      className="input-style"
    >
      <option value="">{variant}</option>
      {getOptionsForVariant(variant).map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  ))}
</div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
        Crear Torneo
      </button>
    </form>
  );
};

export default CreateTournamentForm;
