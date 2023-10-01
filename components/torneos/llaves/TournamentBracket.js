import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TournamentBracket({ tournament }) {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        if (!tournament.rounds || tournament.rounds.length === 0) return;

        const fetchUserData = async (userIds) => {
            try {
                const response = await axios.get(`https://api.duellinks.pro/users?ids=${userIds.join(',')}`);
                const userData = {};
                response.data.forEach((user) => {
                    userData[user._id] = user.username;
                });
                setUserData(userData);
            } catch (error) {
                console.error("Error al obtener los datos de usuario:", error);
            }
        };

        const userIds = tournament.rounds
            .flatMap((round) => round.matches.flatMap((match) => [match.player1, match.player2]))
            .filter((userId) => userId !== null);

        if (userIds.length > 0) {
            fetchUserData(userIds);
        }
    }, [tournament.rounds]);

    if (!tournament.rounds || tournament.rounds.length === 0) return <p>No hay rondas disponibles</p>;

    return (
        <div className="flex space-x-8 overflow-x-auto p-4">
            {tournament.rounds.map((round, index) => (
                <Round key={index} round={round} roundNumber={index + 1} userData={userData} />
            ))}
        </div>
    );
}

function Round({ round, roundNumber, userData, totalRounds }) {
    return (
        <div className="flex space-x-4 items-start relative">
            <div className="flex flex-col items-center space-y-4">
                <h3 className="mb-4 text-lg font-bold">Ronda {roundNumber}</h3>
                <div className="space-y-4 relative">
                    {round.matches.map((match, matchIndex) => {
                        let marginTop = 0;
                        if (roundNumber > 1) {
                            const matchHeightWithMargin = 84; // Incluyendo margen inferior
                            const totalRows = Math.pow(2, totalRounds - 1); // Total de celdas verticales
                            const rowsPerMatch = totalRows / round.matches.length; // Celdas verticales por match en esta ronda
                            const centerRow = (rowsPerMatch * (matchIndex * 2 + 1)) / 2; // Fila central para este match
                            marginTop = centerRow * matchHeightWithMargin - matchHeightWithMargin / 2;
                        }
                        return (
                            <div key={match._id} className="relative" style={{ marginTop: marginTop + 'px' }}>
                                <Match match={match} userData={userData} />
                                {(matchIndex % 2 === 0 && matchIndex < round.matches.length - 1) && <PairConnector />}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

function PairConnector() {
    return (
        <div style={{ position: 'absolute', right: '-30px', top: 'calc(50% + 42px)', transform: 'translateY(-35%)', height: '68px', width: '30px' }}>
            <svg height="68" width="30">
                <path d="M0 34 q15 0 15 -34" strokeWidth="2" stroke="#E6E6E6" fill="none"></path>
                <path d="M0 34 q15 0 15 34" strokeWidth="2" stroke="#E6E6E6" fill="none"></path>
            </svg>
        </div>
    );
}

function Match({ match, userData }) {
    const player1 = userData[match.player1] || 'BYE';
    const player2 = userData[match.player2] || 'BYE';
    const score1 = match.scores?.player1 || 0;
    const score2 = match.scores?.player2 || 0;

    // Determina si el jugador 1 o el jugador 2 es el ganador
    const isPlayer1Winner = score1 > score2;
    const isPlayer2Winner = score2 > score1;

    return (
        <div className="relative group border rounded-lg border-gray-300 mb-4 w-64 flex">
            <div className="flex flex-col justify-center items-center w-2/3 p-4">
                <div className="text-sm text-center">{player1}</div>
                <hr className="my-2 border-t border-gray-300 w-full" />
                <div className="text-sm text-center">{player2}</div>
            </div>
            <div className="flex flex-col justify-center items-center w-1/3">
                <div className={`text-sm text-center py-2 px-4 text-white ${isPlayer1Winner ? 'bg-[#0070f0]' : 'bg-[#202022]'}`}>{score1}</div>
                <div className={`text-sm text-center py-2 px-4 text-white ${isPlayer2Winner ? 'bg-[#0070f0]' : 'bg-[#202022]'}`}>{score2}</div>
            </div>
        </div>
    );
}

export default TournamentBracket;
