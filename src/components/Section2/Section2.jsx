import React from 'react';
import './Section2.css';
import backgroundVideo from '../../images/background5.mp4';
import { LuPartyPopper } from "react-icons/lu";

const Section2 = () => {
  return (
    <div className="section2">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <div className="round-div">
          <p>Välkommen Till min sida</p>
          <LuPartyPopper />
        </div>
      </div>
    </div>
  );
};

export default Section2;