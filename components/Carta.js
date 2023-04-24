import React from "react";
import Image from "next/image";

const Carta = ({ carta, onClick }) => (
  <div onClick={onClick}>
    <Image src={carta.image.secure_url} alt={carta.nombre} width="65.14" height="94.91" />
   
  </div>
);

export default Carta;
