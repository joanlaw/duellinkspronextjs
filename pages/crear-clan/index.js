import React, { useEffect, useState, useContext } from 'react';
import ClansComponent from '../../components/clanes/ClansComponent';
import MembersList from '../../components/clanes/MembersList';
import NavbarCustom from '../../components/NavbarCustom';
import FooterCustom from '../../components/FooterCustom';
import axios from 'axios';
import { UserContext } from '../../contexts/UserContext';
import {Spinner} from "@nextui-org/react";

function Index() {
  const { userId, token } = useContext(UserContext);
  const [userClan, setUserClan] = useState(null);
  const [loading, setLoading] = useState(true);  // Nuevo estado para manejar el spinner
  const [showComponent, setShowComponent] = useState(null);  // 'members', 'clans', or null


  useEffect(() => {
    const fetchAllClans = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.duellinks.pro/clans`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const userClan = response.data.find(clan => clan.creator === userId);
        setUserClan(userClan);
  
        // Añade un retardo aquí
        setTimeout(() => {
          setLoading(false);
          setShowComponent(userClan ? 'members' : 'clans');
        }, 1000);  // 1 segundo de retardo, puedes ajustarlo a tu gusto
  
      } catch (error) {
        console.error('Error fetching clans:', error);
        setLoading(false);
        setShowComponent('clans');
      }
    };
    fetchAllClans();
  }, [userId, token]);

  return (
    <>
    <div className='flex flex-col min-h-screen'>
      <NavbarCustom />
      <div className='container mx-auto p-4'>
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <Spinner size="lg" />
          </div>
        ) : showComponent === 'members' ? (
          <MembersList clanId={userClan._id} clan={userClan} />
        ) : (
          <ClansComponent />
        )}
      </div>
      <FooterCustom />
    </div>
  </>
  );
}

export default Index;
