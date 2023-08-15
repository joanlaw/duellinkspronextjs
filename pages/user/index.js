import React, { useState, useEffect } from 'react';
import { parse } from 'cookie';
import Header from '../../components/Header';
import Link from 'next/link';
import Footer from '../../components/Footer';
import LeaguesComponent from '../../components/LeaguesComponent';

function UserPage() {
  const [userData, setUserData] = useState(null);
  const [showLeagues, setShowLeagues] = useState(false); // Controla la visibilidad del componente


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
      <Header />
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-md-3'>
            {userData ? (
              <div className='text-center'>
                <img
                  src={userData.image}
                  alt='User'
                  className='rounded-circle img-fluid mb-3'
                  style={{ maxWidth: '150px' }}
                />
                <p>Username: {userData.username}</p>
                {/* Otros detalles del usuario */}
              </div>
            ) : (
              <p>Loading user data...</p>
            )}
            
            <div className='list-group mt-4'>
            <button
                className='list-group-item list-group-item-action'
                onClick={() => setShowLeagues(!showLeagues)}
                style={{ backgroundColor: '#5093bc', color: 'white' }}
              >
                Button 1
              </button>
              <a href='#' className='list-group-item list-group-item-action' style={{ backgroundColor: '#5093bc', color: 'white' }}>
                Menú 2
              </a>
              <a href='#' className='list-group-item list-group-item-action' style={{ backgroundColor: '#5093bc', color: 'white' }}>
                Menú 3
              </a>
              <a href='#' className='list-group-item list-group-item-action' style={{ backgroundColor: '#5093bc', color: 'white' }}>
                Menú 4
              </a>
              <a href='#' className='list-group-item list-group-item-action' style={{ backgroundColor: '#5093bc', color: 'white' }}>
                Menú 5
              </a>
              <a href='#' className='list-group-item list-group-item-action' style={{ backgroundColor: '#5093bc', color: 'white' }}>
                Menú 6
              </a>
              <a href='#' className='list-group-item list-group-item-action' style={{ backgroundColor: '#5093bc', color: 'white' }}>
                Menú 7
              </a>
              <a href='#' className='list-group-item list-group-item-action' style={{ backgroundColor: '#5093bc', color: 'white' }}>
                Menú 8
              </a>
              <a href='#' className='list-group-item list-group-item-action' style={{ backgroundColor: '#5093bc', color: 'white' }}>
                Menú 9
              </a>
              <a href='#' className='list-group-item list-group-item-action' style={{ backgroundColor: '#5093bc', color: 'white' }}>
                Menú 10
              </a>
            </div>
            
          </div>
          <div className='col-md-9'>
            <h1>User Profile</h1>
            {/* Aquí puedes colocar otros detalles del usuario */}
            {showLeagues && <LeaguesComponent />} {/* Renderiza el componente si showLeagues es true */}
          </div>
        </div>
      </div>
     <p></p>
      <Footer />
    </div>
  );
}

export default UserPage;
