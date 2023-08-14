import { parse } from 'cookie';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Verificar si estamos en el lado del cliente antes de acceder a document.cookie
    if (typeof document !== 'undefined') {
      const cookies = parse(document.cookie);
      const isAuthenticated = cookies.authenticated === 'true';

      if (isAuthenticated) {
        router.replace('/'); // Cambia '/authenticated' por tu ruta autenticada real
      } else {
        router.replace('/'); // Cambia '/login' por tu ruta de inicio de sesión real
      }
    }
  }, []);

  return <div>Verificando autenticación...</div>;
};

export default AuthPage;
