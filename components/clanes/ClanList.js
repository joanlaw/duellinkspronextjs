import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../../contexts/UserContext';
import { Card, Image } from "@nextui-org/react";

const ClanList = () => {
  const { token } = useUser();
  const [clans, setClans] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClans = async () => {
      setError(null);
      try {
        const response = await axios.get('https://api.duellinks.pro/clans', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setClans(response.data);
      } catch (err) {
        setError('Error al obtener la lista de clanes');
        console.error('Error al obtener la lista de clanes:', err);
      }
    };
    fetchClans();
  }, [token]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      {clans.map((clan, index) => (
        <Card 
          key={index} 
          className="hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer"
          shadow
          hoverable
        >
          <Image 
            src={clan.logoUrl} 
            alt={`${clan.name}'s logo`} 
            width="100%" 
            height="200px" 
            objectFit="cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-5">
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-lg font-semibold text-gray-600 text-center">
                    {clan.name}
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex gap-1 mt-4 text-center">
              <p className="font-semibold text-gray-400 text-sm">
                {clan.members.length}
              </p>
              <p className="text-gray-400 text-sm">Miembros</p>
            </div>
          </div>
        </Card>
      ))}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default ClanList;
