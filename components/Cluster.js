import React from "react";
import PropTypes from "prop-types";
//import { Link } from "react-router-dom";
import Image from "next/image";

//import "./cluster.css";

function Cluster({ imageSource, title, text, url }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <Image src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {text}
        </p>
      {/*  <Link to={url ? url : "#!"}
         // target="_blank"
          className="btn btn-outline-secondary border-0"
          rel="noreferrer"
        >
          Ir a {title}
        </Link> */}
      </div>
    </div>
  );
}

Cluster.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Cluster;
