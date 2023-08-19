import { useState } from 'react';
import axios from 'axios';

const CreateTournamentForm = () => {
  const [formData, setFormData] = useState({
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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://api.duellinks.pro/leagues', formData);
      console.log('Torneo creado con éxito', response.data);
    } catch (error) {
      console.error('Hubo un problema al crear el torneo', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="league_name"
        value={formData.league_name}
        onChange={handleChange}
        placeholder="Nombre del Torneo"
      />
      {/* Agregar otros campos aquí */}
      <button type="submit">Crear Torneo</button>
    </form>
  );
};

export default CreateTournamentForm;
