import React from 'react';
import './Section4.css';
import backgroundVideo2 from '../../images/background3.mp4';

const Section4 = () => {
  return (
    <>
    <h2 className='section4wrapper'>Intressen</h2>
    <div className="section4">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </>
  );
};

export default Section4;
