import React from "react";
import PropTypes from "prop-types";
//import { Link } from "react-router-dom";
import Image from "next/image";
import { Card } from '@nextui-org/react';

//import "./cluster.css";

function Cluster({ imageSource, title, text, url }) {
  return (
<div className="flex flex-col items-center justify-center bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out animate__animated animate__fadeInUp relative">
  <div className="overflow-hidden rounded-t-lg">
    <Image src={imageSource} alt="a wallpaper" className="w-full object-cover" />
  </div>
  <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-75">
    <h4 className="text-white font-semibold text-center">{title}</h4>
  </div>
  <div className="p-4 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <p className="font-bold">
     
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
