import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
//import { Link } from "react-router-dom";

//import "./cluster.css";

function Eventos({ imageSource, title, text, url }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <Image src={imageSource} alt="" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
 
      </div>
    </div>
  );
}

Eventos.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Eventos;
