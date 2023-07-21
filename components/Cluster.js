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
  <div className="">
    <h4 className="card-title">{title}</h4>
    <p className="" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontWeight: "bold" }}>
      <span className="badge bg-danger">{text}</span>
    </p>
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
