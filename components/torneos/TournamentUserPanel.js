import React, { useState, useEffect } from 'react';

function TournamentUserPanel({ onClose, leagueId }) {
    const [tournaments, setTournaments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [imageFiles, setImageFiles] = useState({
        main_deck: null,
        extra_deck: null,
        side_deck: null,
        especial_deck: null
    });

    useEffect(() => {
        fetch(`https://api.duellinks.pro/leagues/${leagueId}/tournaments`)
            .then(res => res.json())
            .then(data => {
                setTournaments(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error al recuperar los torneos:", err);
                setLoading(false);
            });
    }, [leagueId]);

    const handleImageChange = (event) => {
        const { name, files } = event.target;
        if (files.length > 0) {
            setImageFiles(prevState => ({ ...prevState, [name]: files[0] }));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const formDataToSend = new FormData();
    
        for (const deckType in imageFiles) {
            if (imageFiles[deckType]) {
                formDataToSend.append(deckType, imageFiles[deckType]);
            }
        }
    
        try {
            const response = await fetch(`https://api.duellinks.pro/leagues/${leagueId}/playerdecks`, {
                method: 'POST',
                body: formDataToSend,
                // Aquí puedes agregar headers adicionales si es necesario, 
                // como Authorization para tokens, etc.
            });
            
            const data = await response.json();
            console.log('Imágenes subidas exitosamente:', data);
            
        } catch (error) {
            console.error('Error al subir las imágenes:', error);
        }
    };    

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
            <div className="bg-white p-6 rounded-md shadow-lg text-black">
                <h2 className="text-xl font-semibold mb-4">Torneos en el campeonato</h2>
                {loading ? (
                    <p>Cargando torneos...</p>
                ) : (
                    <>
                        <ul className="list-disc pl-6 mb-4">
                            {tournaments.map(tournament => (
                                <li key={tournament._id}>{tournament.league_name}</li>
                            ))}
                        </ul>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="main_deck" className="block mb-2">Main Deck:</label>
                                <input type="file" name="main_deck" onChange={handleImageChange} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="extra_deck" className="block mb-2">Extra Deck:</label>
                                <input type="file" name="extra_deck" onChange={handleImageChange} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="side_deck" className="block mb-2">Side Deck:</label>
                                <input type="file" name="side_deck" onChange={handleImageChange} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="especial_deck" className="block mb-2">Especial Deck:</label>
                                <input type="file" name="especial_deck" onChange={handleImageChange} />
                            </div>
                            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                Subir Imágenes
                            </button>
                        </form>
                    </>
                )}
                <button
                    className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
                    onClick={onClose}
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
}

export default TournamentUserPanel;