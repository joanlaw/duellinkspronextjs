import React from "react";
import { useRouter } from "next/router";

import Header from "./Header";

const Cardinfo = () => {
  const router = useRouter();
  const { name_english } = router.query;

  const [cartas, setCartas] = React.useState([]);
  const [image, setImage] = React.useState([]);

  React.useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const respuesta = await fetch(
          `https://api.duellinks.pro/cards/${name_english}`
        );
        const carta = await respuesta.json();
        setCartas(carta);
        setImage(carta.image);
      } catch (error) {
        console.log(error);
      }
    };
    if (name_english) {
      obtenerDatos();
    }
  }, [name_english]);

  const handleGoBack = () => {
    router.back(); // Retrocede a la ubicación anterior
  };

  return (
    <div className="container mx-auto">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleGoBack}
      >
        Atrás
      </button>

      <div className="flex flex-col items-center mt-8">
        <img
          src={
            cartas.rareza === "ur"
              ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106735/iconos%20dlp/UR_rpfhm2.png"
              : cartas.rareza === "sr"
              ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106742/iconos%20dlp/SR_lwpagj.png"
              : cartas.rareza === "r"
              ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106750/iconos%20dlp/R_btrot4.png"
              : cartas.rareza === "n"
              ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106746/iconos%20dlp/N_lofrdg.png"
              : cartas.rareza
          }
          className="rarezainfo"
          alt="rareza"
        />
        <img
          src={image.secure_url}
          className="cartainfo mt-4"
          alt={cartas.nombre}
        />
        
        <div className="mt-4">
          <img
            src={
              cartas.atributo === "AGUA"
                ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663818431/iconos%20dlp/at-a_bgb8gi.png"
                : cartas.atributo === "OSCURIDAD"
                ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663818431/iconos%20dlp/at-o_mpvorg.png"
                : cartas.atributo === "LUZ"
                ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663818431/iconos%20dlp/at-l_qr3a8g.png"
                : cartas.atributo === "FUEGO"
                ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663818431/iconos%20dlp/at-f_x0zolt.png"
                : cartas.atributo === "TIERRA"
                ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663818431/iconos%20dlp/at-t_bfdbhz.png"
                : cartas.atributo === "VIENTO"
                ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663818431/iconos%20dlp/at-v_tlniay.png"
                : cartas.atributo === "DIVINIDAD"
                ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663818431/iconos%20dlp/at-d_ssxcag.png"
                : cartas.atributo === "MÁGICA"
                ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663818431/iconos%20dlp/at-m_gojjne.png"
                : cartas.atributo === "TRAMPA"
                ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663818431/iconos%20dlp/at-tr_zdjtkd.png"
                : ""
            }
            className="atributo_info mt-2"
          />{" "}
          <span> {cartas.atributo} </span>
        </div>
        
        <div className="mt-4">
          <img
            src={
              cartas.tipo_de_carta === "Xyz"
                ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
            }
            className={
              cartas.atributo === "MÁGICA"
                ? "ocultarinfo"
                : cartas.atributo === "TRAMPA"
                ? "ocultarinfo"
                : cartas.tipo_de_carta === "Link"
                ? "ocultarinfo"
                : "nivel_rareza_info"
            }
          />{" "}
          <span
            className={
              cartas.tipo_de_carta === "Link"
                ? "ocultarinfo"
                : cartas.atributo === "TRAMPA"
                ? "ocultarinfo"
                : cartas.atributo === "MÁGICA"
                ? "ocultarinfo"
                : ""
            }
          >
            {`${
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(
                cartas.nivel_rango_link
              )
                ? cartas.nivel_rango_link || cartas.nivel_rango
                : ""
            }   `}
          </span>
          <img
            src={
              cartas.tipo_de_carta === "Péndulo"
                ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp"
                : ""
            }
            className="atributo_info mt-2"
          />{" "}
          <span>{cartas.escala === 0 ? "" : cartas.escala}</span>
        </div>

        <div className="mt-4">
  <span className="text-gray-400">{"Tipo / Tipo de Carta / Efecto"}</span>
  <span className="block mt-1">{`[${cartas.tipo} / ${cartas.tipo_de_carta}   ${
    cartas.tipo_de_carta === "Sincronía" ? "/ Efecto" : ""
  }  ${cartas.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
    cartas.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
  } ${
    ["Link", "Cantante"].includes(cartas.tipo_de_carta) ? "/ Efecto" : ""
  }  ]`}</span>
</div>

<div className="mt-4">
  <span className="text-gray-400">{"Descripción"}</span>
  <p className="mt-1">{cartas.descripcion}</p>
</div>

<div className="mt-4">
  <span className="text-gray-400">{"Efecto Péndulo"}</span>
  <p className="mt-1">{cartas.efecto_pendulo}</p>
</div>

<div className="mt-4">
  <span className="text-gray-400">{"ATK / DEF / Nivel / Rango"}</span>
  <span className="block mt-1">{`ATK / ${cartas.atk} ${
    cartas.atributo === "Link" ? "LINK - " + cartas.nivel_rango_link : "DEF / " + cartas.def
  }`}</span>
</div>

<div className="mt-4">
  <span className="text-gray-400">{"¿Cómo obtener?"}</span>
  <p className="mt-1">{cartas.caja}</p>
</div>
      </div>
    </div>
  );
};

export default Cardinfo;
