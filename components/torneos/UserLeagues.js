import React, { useState, useEffect } from "react";
import { useUser } from "../../contexts/UserContext"; 

function UserLeagues() {
    const { discordId, authenticated } = useUser();
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        if (authenticated) {
            fetch(`https://api.duellinks.pro/leagues/organizer/${discordId}`, {
                headers: {
                    // Aquí puedes agregar headers si son necesarios para la consulta
                }
            })
            .then(res => res.json())
            .then(data => {
                setLeagues(data || []); // Nota que he cambiado `data.leagues` a `data` ya que asumo que el servidor devuelve directamente el array de ligas.
            })
            .catch(err => console.error("Error al recuperar las ligas:", err));
        }
    }, [discordId, authenticated]);

    return (
        <div className="container mx-auto mt-10 mb-10 p-6 rounded-md shadow-sm" style={{ backgroundColor: '#27272a' }}>
            <h2 className="text-2xl font-bold mb-4 text-white">Mis ligas</h2>
            {leagues.map(league => (
                <div key={league._id} className="bg-white p-4 rounded-md mb-4 shadow-md text-black">
                    <h3 className="text-xl font-medium mb-2">{league.league_name}</h3>
                    <p className="mb-1">Formato: {league.league_format}</p>
                    <p>Fecha de inicio: {new Date(league.start_date).toLocaleDateString()}</p>
                    {/* Aquí puedes agregar más información de la liga como desees */}
                </div>
            ))}
        </div>
    );
}

export default UserLeagues;