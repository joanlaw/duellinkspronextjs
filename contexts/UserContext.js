import React, { createContext, useState, useEffect, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userImage, setUserImage] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [username, setUsername] = useState(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const tokenFromUrl = urlParams.get('token');
        const token = tokenFromUrl || localStorage.getItem("token");
    
        if (tokenFromUrl) {
          localStorage.setItem("token", tokenFromUrl);
        }
    
        if (token) {
          fetch("https://api.duellinks.pro/get-user-info/", {
            credentials: "include",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => response.json())
          .then((data) => {
            setUserImage(data.authenticated ? data.image : null);
            setAuthenticated(data.authenticated);
            setUsername(data.username);
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
        window.location.href = "https://api.duellinks.pro/login";
    };

    return (
        <UserContext.Provider value={{ userImage, authenticated, username, handleLogin }}>
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
