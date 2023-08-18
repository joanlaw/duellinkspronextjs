// components/CreateDuelForm.js
import { useState } from 'react';
import axios from 'axios';
import { Input, Button } from '@nextui-org/react';

export default function CreateDuelForm() {
  const [formData, setFormData] = useState({
    player1: '',
    player2: '',
    leagueId: '',
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
      const response = await axios.post('/api/duels', formData);
      alert('Duelo creado con éxito');
      setFormData({
        player1: '',
        player2: '',
        leagueId: '',
      });
    } catch (error) {
      alert('Error al crear el duelo');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input 
        label="Jugador 1"
        name="player1"
        value={formData.player1}
        onChange={handleChange}
      />
      <Input 
        label="Jugador 2"
        name="player2"
        value={formData.player2}
        onChange={handleChange}
      />
      <Input 
        label="ID del Torneo"
        name="leagueId"
        value={formData.leagueId}
        onChange={handleChange}
      />
      <Button type="submit" color="primary">Crear Duelo</Button>
    </form>
  );
}
