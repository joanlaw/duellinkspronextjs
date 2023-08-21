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
    image_torneo: '',
    infoTorneo: {
      format: '',
      banlist: '',
      deck_info: '',
      eliminacion: ''
    }
  };

  const [formData, setFormData] = useState(initialFormData);

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

    // Añadimos el `discordId` como organizer al formData antes de enviarlo
    const dataToSend = {
      ...formData,
      organizer: user.discordId
    };

    try {
      const response = await axios.post('https://api.duellinks.pro/leagues', dataToSend);
      console.log('Torneo creado con éxito', response.data);
      setFormData(initialFormData); // Resetear campos después del envío
    } catch (error) {
      console.error('Hubo un problema al crear el torneo', error);
    }
  };

  const variants = ['format', 'banlist', 'deck_info', 'eliminacion'];

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
      <Input
        type="text"
        name="league_format"
        value={formData.league_format}
        onChange={handleChange}
        placeholder="Formato del Torneo"
        label="Formato del Torneo"
      />
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
        type="url"
        name="image_torneo"
        value={formData.image_torneo}
        onChange={handleChange}
        placeholder="URL de la imagen del Torneo"
        label="Imagen del Torneo"
      />
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        {variants.map((variant) => (
          <Input
            key={variant}
            type="text"
            name={`infoTorneo.${variant}`}
            value={formData.infoTorneo[variant]}
            onChange={(e) => handleChange(e)}
            placeholder={`Información del Torneo - ${variant}`}
            label={`Información del Torneo - ${variant}`}
          />
        ))}
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
        Crear Torneo
      </button>
    </form>
  );
};

export default CreateTournamentForm;
