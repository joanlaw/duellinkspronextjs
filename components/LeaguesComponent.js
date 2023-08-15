import React, { useState } from 'react';

function CreateLeagueForm() {
  const [leagueName, setLeagueName] = useState('');
  const [leagueFormat, setLeagueFormat] = useState('');
  const [startDate, setStartDate] = useState('');
  // Agrega más estados para los demás campos del formulario

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos del formulario a la API para crear una nueva liga
    console.log('Form submitted:', leagueName, leagueFormat, startDate);
  };

  return (
    <div>
      <h2>Create a New League</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>League Name:</label>
          <input type='text' value={leagueName} onChange={(e) => setLeagueName(e.target.value)} />
        </div>
        <div>
          <label>League Format:</label>
          <input type='text' value={leagueFormat} onChange={(e) => setLeagueFormat(e.target.value)} />
        </div>
        <div>
          <label>Start Date:</label>
          <input type='datetime-local' value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </div>
        {/* Agrega más campos del formulario aquí */}
        <div>
          <button type='submit'>Create League</button>
        </div>
      </form>
    </div>
  );
}

export default CreateLeagueForm;
