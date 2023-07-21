// Importaciones necesarias
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const CardPopup = ({ selectedCard, onClose }) => {
  if (!selectedCard) return null;

  const stopPropagation = (event) => event.stopPropagation();

  return (
    <div className="popup" onClick={onClose}>
      <div className="popup-content" onClick={stopPropagation}>
        <div className="popup-image">
          {selectedCard.rareza && (
            <Image 
              src={
                selectedCard.rareza === "ur"
                  ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106735/iconos%20dlp/UR_rpfhm2.png"
                  : selectedCard.rareza === "sr"
                  ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106742/iconos%20dlp/SR_lwpagj.png"
                  : selectedCard.rareza === "r" 
                  ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106750/iconos%20dlp/R_btrot4.png"
                  : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106746/iconos%20dlp/N_lofrdg.png"
              } 
              alt="" 
              className="card-rareza" 
              width={200} 
              height={100} 
              layout={'responsive'} 
            />
          )}
          <Image src={selectedCard.image.secure_url} alt={selectedCard.nombre} />
        </div>
        <div className="popup-info">
          <h2>{selectedCard.nombre}</h2>
          <p>{selectedCard.descripcion}</p>
          <p>Tipo: {selectedCard.tipo}</p>
          <p>Atributo: {selectedCard.atributo}</p>
          <p>Nivel/Rango: {selectedCard.nivel_rango_link}</p>
          <p>ATK: {selectedCard.atk}</p>
          <p>DEF: {selectedCard.def}</p>
        </div>
        <button className="close-button" onClick={onClose}>x</button>
        <Link href={`/cartas/${selectedCard._id}`}>
          <a className="more-info-button">Más información</a>
        </Link>
      </div>
    </div>
  );
};

export default CardPopup;
