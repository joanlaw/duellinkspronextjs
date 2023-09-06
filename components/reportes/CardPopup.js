const CardPopup = ({ selectedCard, handleClosePopup }) => {
    
    const baseUrlRareza = "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106735/"
    const rarityUrls = {
        ur: baseUrlRareza + "iconos%20dlp/UR_rpfhm2.png",
        sr: baseUrlRareza + "SR_lwpagj.png",
        r: baseUrlRareza + "R_btrot4.png",
        n: baseUrlRareza + "N_lofrdg.png"
    };

    const baseUrlLimitation = "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107074/iconos%20dlp/"
    const limitationUrls = {
        1: baseUrlLimitation + "limited-1-dlp_b2mgxg.svg",
        2: baseUrlLimitation + "limited-2-dlp_yf3ttg.svg",
        3: baseUrlLimitation + "limited-3-dlp_aq3dv8.svg",
        4: baseUrlLimitation + "prihibidas_itbkvb.svg"
    };

    const baseUrlIcons = "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/"
    const nivelRango = {
        "XYZ Monster": baseUrlIcons + "rango_xyz_wepehq.webp",

    }
  
    return (
        <div className="popup" onClick={handleClosePopup}>
        <div className="popup-content" onClick={(event) => event.stopPropagation()}>
          <div className="popup-image">
            {selectedCard.rareza && (
              <img src={rarityUrls[selectedCard.rareza]} className="rareza" alt="" />
            )}
            {selectedCard.limitacion !== 0 && selectedCard.limitacion <= 4 && (
              <img src={limitationUrls[selectedCard.limitacion]} alt="" className="limitacion" />
            )}
            {selectedCard.image && selectedCard.image.secure_url && (
              <img src={selectedCard.image.secure_url} alt={selectedCard.nombre} />
            )}
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
          <button className="close-button" onClick={(event) => { event.preventDefault(); handleClosePopup(); }}>
            x
          </button>
          <a href={`/cards/${selectedCard.name_english}`} className="more-info-button">Más información</a>
        </div>
      </div>
    );
  };
  
  export default CardPopup;
  