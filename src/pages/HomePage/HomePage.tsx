import React from "react";
import "./HomePageStyle.css";
import { Link } from "react-router-dom";
import Photo from "../../assets/photos/Photo.png";
import Background from "../../assets/Background.jpg";

const HomePage = () => {
  return (
    <div>
      HomePage
      {/* <img className="Photo" src={Photo} alt="No Photo" /> */}
      <img className="Photo-bg" src={Background} alt="No Photo" />
      <img className="Photo" src={Photo} alt="No Photo" />
      <Link to="/about">about</Link>;
    </div>
  );
};

export default HomePage;
