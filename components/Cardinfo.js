import React from "react";
import { useRouter } from "next/router";

const Cardinfo = () => {
  const router = useRouter();
  const { name_english } = router.query;

  const [cartas, setCartas] = React.useState({});
  const [image, setImage] = React.useState("");

  React.useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const respuesta = await fetch(
          `https://api.duellinks.pro/cards/${name_english}`
        );
        const carta = await respuesta.json();
        setCartas(carta);
        setImage(carta.image.secure_url);
      } catch (error) {
        console.log(error);
      }
    };
    if (name_english) {
      obtenerDatos();
    }
  }, [name_english]);

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="container mx-auto flex flex-col items-center">
        {name_english && (
          <h1 className="text-white text-center text-2xl font-semibold mb-4">
            {name_english}
          </h1>
        )}
        <div className="max-w-3xl bg-white rounded-lg shadow-md p-6 flex">
          <div className="w-1/2">
            <img src={image} alt={cartas.nombre} />
          </div>
          <div className="w-1/2 pl-6">
            <button
              className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleGoBack}
            >
              Atrás
            </button>
            <p className="mb-2 text-sm text-gray-400">{cartas.atributo}</p>
            <p className="mb-2 text-lg font-semibold">
              {cartas.tipo_de_carta}
            </p>
            <p className="mb-4 text-md">{cartas.descripcion}</p>
            <p className="mb-2 text-sm text-gray-400">{"¿Cómo obtener?"}</p>
            <p className="text-md">{cartas.caja}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardinfo;
