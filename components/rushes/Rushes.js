import Link from 'next/link';

const Rushes = ({ rushes, handleClickRush }) => {
  return (
    <div className="listcards">
      {rushes.map((rush) => (
        <div key={rush._id} className="listacards">
          <div>
            <img
              src={
                rush.rarity === 'ur'
                  ? 'https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106735/iconos%20dlp/UR_rpfhm2.png'
                  : rush.rarity === 'sr'
                  ? 'https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106742/iconos%20dlp/SR_lwpagj.png'
                  : rush.rarity === 'r'
                  ? 'https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106750/iconos%20dlp/R_btrot4.png'
                  : rush.rarity === 'n'
                  ? 'https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106746/iconos%20dlp/N_lofrdg.png'
                  : rush.rarity
              }
              className="rareza"
            />
          </div>
          <div>
            <img
              src={`${
                rush.limited === 3
                  ? 'https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107087/iconos%20dlp/limited-3-dlp_aq3dv8.svg'
                  : ''
              } ${
                rush.limited === 4
                  ? 'https://res.cloudinary.com/dqofcbeaq/image/upload/v1665724325/iconos%20dlp/prihibidas_itbkvb.svg'
                  : ''
              } ${
                rush.limited === 2
                  ? 'https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107082/iconos%20dlp/limited-2-dlp_yf3ttg.svg'
                  : ''
              } ${
                rush.limited === 1
                  ? 'https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107074/iconos%20dlp/limited-1-dlp_b2mgxg.svg'
                  : ''
              }  `}
              className={
                (rush.limited === '' || rush.limited === 0)
                  ? 'ocultarinfoall'
                  : 'limitacion'
              }
            />
          </div>
          <div className="grid-list-card">
            <img
              width="106"
              height="155"
              src={rush.image.secure_url}
              className="cartatop"
              alt={rush.name.en}
              onClick={() => handleClickRush(rush)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rushes;
