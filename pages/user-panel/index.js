// pages/user-panel/index.js
import React, { useEffect } from 'react';
import UserPanel from '../../components/torneos/UserPanel'; // Ajusta la ruta según la ubicación de tu componente UserPanel
import { useUser } from '../../contexts/UserContext'; // Ajusta la ruta según la ubicación de tu contexto UserContext

const UserPanelPage = () => {
  const { userImage, authenticated, username, handleLogin } = useUser();

  useEffect(() => {
    // Aquí puedes realizar cualquier otra acción necesaria cuando el usuario esté autenticado
  }, [authenticated]);

  return (
    <div className="container mx-auto p-4">
      {authenticated ? (
        <UserPanel username={username} avatar={userImage} puntos={0 /* Reemplaza con los puntos del usuario si es necesario */} />
      ) : (
        <div className="text-center">
          <p className="mb-4">Por favor inicia sesión para ver tu panel de usuario.</p>
          <button onClick={handleLogin} className="btn btn-primary">
            Iniciar sesión
          </button>
        </div>
      )}
    </div>
  );
};

export default UserPanelPage;
