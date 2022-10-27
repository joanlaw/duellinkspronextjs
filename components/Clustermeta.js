import React from "react";
import PropTypes from "prop-types";
//import Link from "next/link";
import Image from "next/image";

//import "./cluster.css";

function Clustermeta({ imageSource, title, text, url, text2, text3 }) {
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
        <p className="card-text text-secondary">
          {text2}
        </p>
        <p className="card-text text-secondary">
          {text3}
        </p>
      {/*  <Link to={url ? url : "#!"}
         // target="_blank"
          className="btn btn-outline-secondary border-0"
          rel="noreferrer"
        >
        {title}
  </Link>  */}
      </div>
    </div>
  );
}

Clustermeta.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Clustermeta;
