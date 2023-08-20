import React, { createContext, useState, useEffect, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userImage, setUserImage] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [discordId, setDiscordId] = useState(null); // Asumiendo que discordId es lo mismo que username
  const [token, setToken] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get('token');
    const localToken = tokenFromUrl || localStorage.getItem("token");

    if (tokenFromUrl) {
      localStorage.setItem("token", tokenFromUrl);
      setToken(tokenFromUrl);
    } else {
      setToken(localToken);
    }

    if (localToken) {
      fetch("https://api.duellinks.pro/get-user-info/", {
        credentials: "include",
        headers: {
          Authorization: `Bearer ${localToken}`,
        },
      })
      .then((response) => response.json())
      .then((data) => {
        setUserImage(data.authenticated ? data.image : null);
        setAuthenticated(data.authenticated);
        setDiscordId(data.username); // Asumiendo que discordId es lo mismo que username
      })
      .catch((error) => {
        localStorage.removeItem("token");
        setAuthenticated(false);
      });
    } else {
      setAuthenticated(false);
    }
  }, []);

  const handleLogin = () => {
    const loginWindow = window.open(
      "https://api.duellinks.pro/login",
      "DuelLinksLogin",
      "width=500,height=500"
    );

    const onMessage = (event) => {
      if (event.data.type === 'AUTH_SUCCESS') {
        const token = event.data.token;
        localStorage.setItem("token", token);
        setToken(token);
        console.log("Usuario autenticado");
      }
    };

    window.addEventListener('message', onMessage, false);

    const checkWindowClosed = setInterval(() => {
      if (loginWindow.closed) {
        clearInterval(checkWindowClosed);
        window.removeEventListener('message', onMessage);
      }
    }, 100);
  };

  return (
    <UserContext.Provider value={{ userImage, authenticated, discordId, handleLogin, token }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser debe ser usado dentro de un UserProvider');
  }
  return context;
};
