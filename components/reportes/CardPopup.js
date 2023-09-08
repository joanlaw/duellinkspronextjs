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

    const baseUrlSpellTrap  = "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/"
    

    const baseUrlIconsRangoNivel = "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/"
    const nivelRango = {
        
        "Effect Monster": baseUrlIconsRangoNivel + "nivel_monstruo_mq6vmx.webp",
        "Flip Effect Monster":baseUrlIconsRangoNivel + "nivel_monstruo_mq6vmx.webp",
        "Flip Tuner Effect Monster": baseUrlIconsRangoNivel + "nivel_monstruo_mq6vmx.webp",
        "Gemini Monster": baseUrlIconsRangoNivel + "nivel_monstruo_mq6vmx.webp",
        "Normal Monster": baseUrlIconsRangoNivel + "nivel_monstruo_mq6vmx.webp",
        "Normal Tuner Monster": baseUrlIconsRangoNivel + "nivel_monstruo_mq6vmx.webp",
        "Pendulum Effect Monster": baseUrlIconsRangoNivel + "nivel_monstruo_mq6vmx.webp",
        "Pendulum Effect Ritual Monster": baseUrlIconsRangoNivel + "nivel_monstruo_mq6vmx.webp",
        "Pendulum Flip Effect Monster": baseUrlIconsRangoNivel + "nivel_monstruo_mq6vmx.webp",
        "Pendulum Normal Monster": baseUrlIconsRangoNivel + "nivel_monstruo_mq6vmx.webp",
        "Pendulum Tuner Effect Monster": baseUrlIconsRangoNivel + "nivel_monstruo_mq6vmx.webp",
        "Ritual Effect Monster": baseUrlIconsRangoNivel + "nivel_monstruo_mq6vmx.webp",
        "Ritual Monster": baseUrlIconsRangoNivel + "nivel_monstruo_mq6vmx.webp",
        "Spell Card": baseUrlSpellTrap + "at-m_gojjne.png",
        "Spirit Monster": baseUrlIconsRangoNivel + "nivel_monstruo_mq6vmx.webp",
        "Toon Monster": baseUrlIconsRangoNivel + "nivel_monstruo_mq6vmx.webp",
        "Trap Card": baseUrlSpellTrap + "at-tr_zdjtkd.png",
        "Tuner Monster": baseUrlIconsRangoNivel + "nivel_monstruo_mq6vmx.webp",
        "Union Effect Monster": baseUrlIconsRangoNivel + "nivel_monstruo_mq6vmx.webp",
        "Fusion Monster": baseUrlIconsRangoNivel + "nivel_monstruo_mq6vmx.webp",
        "Link Monster": "",
        "Pendulum Effect Fusion Monster": baseUrlIconsRangoNivel + "nivel_monstruo_mq6vmx.webp",
        "Synchro Monster": baseUrlIconsRangoNivel + "nivel_monstruo_mq6vmx.webp",
        "Synchro Pendulum Effect Monster": baseUrlIconsRangoNivel + "nivel_monstruo_mq6vmx.webp",
        "Synchro Tuner Monster": baseUrlIconsRangoNivel + "nivel_monstruo_mq6vmx.webp",
        "XYZ Monster": baseUrlIconsRangoNivel + "rango_xyz_wepehq.webp",
        "XYZ Pendulum Effect Monster": baseUrlIconsRangoNivel + "rango_xyz_wepehq.webp"
    }

    const baseUrlAtributoMagicaTrampa = "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663818431/iconos%20dlp/"
    const MagicaTrampa = {
      "Spell Card": "at-m_gojjne.png",
        "Trap Card": "at-tr_zdjtkd.png"
    }

    const tipoMagicTrap = {
      Normal: baseUrlAtributoMagicaTrampa + "normal_vpey0j.webp",
      Field: baseUrlAtributoMagicaTrampa + "de_campo_qoxyag.webp",
      Equip: baseUrlAtributoMagicaTrampa + "equipo_6_vsvs8y.webp",
      "Quick-Play": baseUrlAtributoMagicaTrampa + "de_juego_rapido_mmsikz.webp",
      Ritual: baseUrlAtributoMagicaTrampa + "ritual_7_yd0kyv.webp",
      Continuous: baseUrlAtributoMagicaTrampa + "continua_wh3pfj.webp",
      Counter: baseUrlAtributoMagicaTrampa +"contraefecto_pxkz7z.webp"
    }

    const baseUrlAtributeMonster = "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663818431/iconos%20dlp/"

    const AtributosMonsters = {
      DARK: baseUrlAtributeMonster +"at-o_mpvorg.png",
      DIVINE: baseUrlAtributeMonster + "at-d_ssxcag.png",
      EARTH: baseUrlAtributeMonster + "at-t_bfdbhz.png",
      FIRE: baseUrlAtributeMonster + "at-f_x0zolt.png",
      LIGHT: baseUrlAtributeMonster + "at-l_qr3a8g.png",
      WATER: baseUrlAtributeMonster +"at-a_bgb8gi.png",
      WIND: baseUrlAtributeMonster +"at-v_tlniay.png"
    }
  
    return (
        <div className="popup" onClick={handleClosePopup}>
        <div className="popup-content" onClick={(event) => event.stopPropagation()}>
          <div className="popup-image">
          {/*  {selectedCard.rareza && (
              <img src={rarityUrls[selectedCard.rareza]} className="rareza" alt="" />
            )}
            {selectedCard.limitacion !== 0 && selectedCard.limitacion <= 4 && (
              <img src={limitationUrls[selectedCard.limitacion]} alt="" className="limitacion" />
            )}*/} 
            {selectedCard.image && selectedCard.image.secure_url && (
              <img src={selectedCard.image.secure_url} alt={selectedCard.nombre} />
            )}
          </div>
          <div className="popup-info">
    <h2 className="text-xl font-semibold">{selectedCard.nombre}</h2>
    <p className="flex items-center">
        {selectedCard.tipo_de_carta === "Spell Card" || selectedCard.tipo_de_carta === "Trap Card" ? (
            <>
                <img
                    src={baseUrlAtributoMagicaTrampa + MagicaTrampa[selectedCard.tipo_de_carta]}
                    alt={selectedCard.tipo_de_carta}
                    className="w-6 h-6 mr-2"
                />
                {selectedCard.tipo_de_carta}
            </>
        ) : (
            selectedCard.tipo_de_carta
        )}
        {" " /* Agrega un espacio entre las dos partes del texto */}
        {selectedCard.tipo in tipoMagicTrap && (
            <img
                src={tipoMagicTrap[selectedCard.tipo]}
                alt={selectedCard.tipo}
                className="w-6 h-6 mr-2"
            />
        )}
        {" " /* Agrega un espacio entre las dos partes del texto */}
        {selectedCard.tipo}
    </p>

    <p>{selectedCard.descripcion_es}</p>

    {selectedCard.tipo_de_carta && !["Trap Card", "Spell Card"].includes(selectedCard.tipo_de_carta) && (
        <p className="flex items-center">
            <span className="mr-2">Atributo:</span>
            {selectedCard.atributo in AtributosMonsters && (
                <img
                    src={AtributosMonsters[selectedCard.atributo]}
                    alt={selectedCard.atributo}
                    className="w-6 h-6"
                />
            )}
        </p>
    )}

    {selectedCard.tipo_de_carta && !["Trap Card", "Link Monster", "Spell Card"].includes(selectedCard.tipo_de_carta) && (
        <p className="flex items-center">
            <span className="mr-2">Nivel/Rango:</span>
            {selectedCard.tipo_de_carta && nivelRango[selectedCard.tipo_de_carta] ? (
                Array.from({ length: selectedCard.nivel_rango_link }).map((_, index) => (
                    <img
                        key={index}
                        src={nivelRango[selectedCard.tipo_de_carta]}
                        alt={`Nivel ${index + 1}`}
                        className="w-6 h-6"
                    />
                ))
            ) : (
                'No aplicable'
            )}
        </p>
    )}

{selectedCard.tipo_de_carta === "Link Monster" ? (
    <p>
        ATK: {selectedCard.atk} | Link-{selectedCard.nivel_rango_link}
    </p>
) : (
    selectedCard.tipo_de_carta && !["Trap Card", "Spell Card"].includes(selectedCard.tipo_de_carta) && (
        <p>ATK: {selectedCard.atk}</p>
    )
)}

    {selectedCard.tipo_de_carta && !["Trap Card", "Link Monster", "Spell Card"].includes(selectedCard.tipo_de_carta) && (
        <p>DEF: {selectedCard.def}</p>
    )}
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
  