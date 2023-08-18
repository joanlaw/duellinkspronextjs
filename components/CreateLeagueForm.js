// components/CreateLeagueForm.js
import { useState } from 'react';
import axios from 'axios';
import { Input, Button } from '@nextui-org/react';

export default function CreateLeagueForm() {
  const [formData, setFormData] = useState({
    league_name: '',
    league_format: '',
    start_date: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/leagues', formData);
      alert('Torneo creado con éxito');
      setFormData({
        league_name: '',
        league_format: '',
        start_date: '',
      });
    } catch (error) {
      alert('Error al crear el torneo');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input 
        label="Nombre del Torneo"
        name="league_name"
        value={formData.league_name}
        onChange={handleChange}
      />
      <Input 
        label="Formato"
        name="league_format"
        value={formData.league_format}
        onChange={handleChange}
      />
      <Input 
        type="date"
        label="Fecha de Inicio"
        name="start_date"
        value={formData.start_date}
        onChange={handleChange}
      />
      <Button type="submit" color="primary">Crear Torneo</Button>
    </form>
  );
}
