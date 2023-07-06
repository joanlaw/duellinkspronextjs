import React from "react";
//import { useParams } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
import Header from "./Header";


//import "./cartainfo.css";
//import Allcards from './Allcards';
//import axios from 'axios'

const Cardinfo = () => {
  console.log(useParams());

  const { _id } = useParams();
  console.log(_id);

  const [cartas, setCartas] = React.useState([]);
  const [image, setImage] = React.useState([]);
  // const [ caja, Setcaja  ] = React.useState ([])

  React.useEffect(() => {
    const obtenerDatos = async () => {
      const respuesta = await fetch(
        `https://dlpro-backend.herokuapp.com/cartas/${_id}`
      );
      // .then(response => response.json())
      // .then(data => console.log(data))
      // .catch(error => console.log(error))
      const carta = await respuesta.json();
      setCartas(carta);
      setImage(carta.image);
      // Setcaja(carta)
    };
    obtenerDatos();
    //  [ {cartas.tipo} / {cartas.tipo_de_carta  } ]

    //ATK</span> <span>{cartas.atk}</span> <span>/</span> <span>DEF</span> <span>{cartas.def}
  }, [_id]);
  //const navigate = useNavigate();

  /*if (caja.caja === 'Heart of xyz') {
    Setcaja (cartas.caja)
} else {
    Setcaja('No es la caja')
    return  
}  */

  return (
    <div className="container">
      <Header />

      <button
        className="btn btn-primary botonesmargen "
        onClick={() => navigate(-1)}
        data-tip
        data-for="tooltipsdlp"
      >
        Atrás
      </button>
      <h1>{cartas.nombre}</h1>
      <br />
      <div className="row">
        <div className="col-md-10">
          <div className="card">
            <form className="card-body">
              <div className="form-group">
                <div className="form-group">
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
                  ></img>
                  <img
                    src={image.secure_url}
                    className="cartainfo"
                    alt={cartas.nombre}
                  ></img>
                </div>
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
                  className="atributo_info"
                ></img>{" "}
                <span> {cartas.atributo} </span>
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
                ></img>{" "}
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
                >{`${
                  cartas.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? cartas.nivel_rango_link || cartas.nivel_rango
                    : ""
                }   `}</span>
                <img src={cartas.tipo_de_carta === 'Péndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='atributo_info' ></img> <span>{cartas.escala === 0 ? '' : cartas.escala}</span>
                <img
                  src={
                    cartas.tipo_magica_trampa === "De juego rápido"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/de_juego_rapido_mmsikz.webp"
                      : cartas.tipo_magica_trampa === "Normal"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/normal_vpey0j.webp"
                      : cartas.tipo_magica_trampa === "De campo"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/de_campo_qoxyag.webp"
                      : cartas.tipo_magica_trampa === "Continua"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/continua_wh3pfj.webp"
                      : cartas.tipo_magica_trampa === "De contraefecto"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/contraefecto_pxkz7z.webp"
                      : cartas.tipo_magica_trampa
                  }
                  className="nivel_rareza_info "
                ></img>{" "}
                <span>{cartas.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={cartas.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${cartas.tipo} / ${cartas.tipo_de_carta}   ${
                    cartas.tipo_de_carta === "Sincronía" ? "/ Efecto" : ""
                  }  ${cartas.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    cartas.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    cartas.tipo_de_carta === "Link" ? "/ Efecto" :  cartas.tipo_de_carta === 'Cantante' ? "/ Efecto": cartas.tipo_de_carta === "Sincronía / Cantante" ? "/ Efecto": cartas.tipo_de_carta === "Xyz / Péndulo" ? "/ Efecto": cartas.tipo_de_carta === 'Péndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span className="span_info">{cartas.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{cartas.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    cartas.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${cartas.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${cartas.atk}  ${
                    cartas.tipo_de_carta === "Link"
                      ? "LINK - " + cartas.nivel_rango_link
                      : "DEF/ " + cartas.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">¿Cómo obtener?</span>
                <br />
                <span className="span_info">{cartas.caja}</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardinfo;
