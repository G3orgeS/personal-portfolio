// Section1.jsx
import React from 'react';
import Card from '../Card/Card';
import { 
  FaHtml5, 
  FaCss3, 
  FaGithub, 
  FaNodeJs, 
  FaDatabase, 
  FaReact, 
  FaTrello, 
  FaFigma, 
  FaSass, 
  FaJs, 
  FaLaptopCode
} from 'react-icons/fa';
import { BiLogoTypescript } from "react-icons/bi";
import './Section1.css';

const Section1 = () => {
  return (
    <>
    <div className="section1wrapper">
    <h2 className='Section1h2'>Färdigheter</h2>
    <div className="section1">
      <Card title="HTML" icon={<FaHtml5 />} />
      <Card title="CSS" icon={<FaCss3 />} />
      <Card title="GitHub" icon={<FaGithub />} />
      <Card title="Node.js" icon={<FaNodeJs />} />
      <Card title="MongoDB" icon={<FaDatabase />} />
      <Card title="VS Code" icon={<FaLaptopCode />} />
      <Card title="React" icon={<FaReact />} />
      <Card title="TypeScript" icon={<BiLogoTypescript />} />
      <Card title="JavaScript" icon={<FaJs />} />
      <Card title="Trello" icon={<FaTrello />} />
      <Card title="Figma" icon={<FaFigma />} />
      <Card title="Sass" icon={<FaSass />} />
    </div>
    </div>
    </>
  );
};

export default Section1;

