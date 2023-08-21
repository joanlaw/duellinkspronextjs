import React, { useState, useEffect } from "react";
import { useUser } from "../../contexts/UserContext"; 

function UserLeagues() {
    const { discordId, authenticated } = useUser();
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        if (authenticated) {
            fetch(`https://api.duellinks.pro/leagues/discordId/${discordId}`, {
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
        <div>
            <h2>Mis ligas</h2>
            {leagues.map(league => (
                <div key={league._id}>
                    <h3>{league.league_name}</h3>
                    <p>Formato: {league.league_format}</p>
                    <p>Fecha de inicio: {new Date(league.start_date).toLocaleDateString()}</p>
                    {/* Aquí puedes agregar más información de la liga como desees */}
                </div>
            ))}
        </div>
    );
}

export default UserLeagues;