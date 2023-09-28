import Link from 'next/link';

const RushPopup = ({ selectedRush, onClose }) => {
  if (!selectedRush) return null;

  const stopPropagation = (event) => event.stopPropagation();

  return (
    <div className="popup" onClick={onClose}>
      <div className="popup-content" onClick={stopPropagation}>
        <div className="popup-image">
     {/*     {selectedRush.rarity && (
            <img
              src={
                selectedRush.rarity === 'ur'
                  ? 'https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106735/iconos%20dlp/UR_rpfhm2.png'
                  : selectedRush.rarity === 'sr'
                  ? 'https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106742/iconos%20dlp/SR_lwpagj.png'
                  : selectedRush.rarity === 'r'
                  ? 'https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106750/iconos%20dlp/R_btrot4.png'
                  : 'https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106746/iconos%20dlp/N_lofrdg.png'
              }
              alt=""
              className="rush-rarity"
              width={200}
              height={100}
            />
          )} */} 
          <img src={selectedRush.image.secure_url} alt={selectedRush.name.en} />
        </div>
        <div className="popup-info">
          <h2>{selectedRush.name.en}</h2>
          <p>{selectedRush.requirement.en}</p>
          <p>Type: {selectedRush.card_type}</p>
          <p>Attribute: {selectedRush.attribute}</p>
          <p>Level: {selectedRush.level}</p>
          <p>ATK: {selectedRush.atk}</p>
          <p>DEF: {selectedRush.def}</p>
          <p>Rarity: {selectedRush.rarity}</p>
          <p>Limited: {selectedRush.limited}</p>
        </div>
      {/*  <button className="close-button" onClick={onClose}>x</button>
        <Link href={`/rushes/${selectedRush._id}`}>
          <p className="more-info-button">More Info</p>
        </Link>  */}
      </div>
    </div>
  );
};

export default RushPopup;
    