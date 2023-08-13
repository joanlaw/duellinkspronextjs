import { useRouter } from 'next/router';
import { useEffect } from 'react';

function DiscordCallback() {
  const router = useRouter();

  useEffect(() => {
    // lógica en el lado del cliente aquí

    router.push('/');
  }, []);

  return (
    <div>
      Procesando...
    </div>
  );
}

export default DiscordCallback;
