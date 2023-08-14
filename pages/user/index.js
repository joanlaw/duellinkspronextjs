import React, { useState, useEffect } from 'react';
import { parse } from 'cookie';
import Header from '../../components/Header'; // Asegúrate de importar el Header correcto
import Link from 'next/link';

function UserPage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const cookies = parse(document.cookie);

    fetch('https://api.duellinks.pro/get-user-info/', {
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error('Error fetching user info:', error);
      });
  }, []);

  return (
    <div>
      <Header /> {/* Asegúrate de que esto esté correctamente enlazado */}
      <h1>User Profile</h1>
      {userData ? (
        <div>
          <img
            src={userData.image}
            alt="User"
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
            }}
          />
          <p>Username: {userData.username}</p>
          {/* Otros detalles del usuario */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </div>
  );
}

export default UserPage;
