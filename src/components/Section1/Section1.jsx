import React, { useState } from 'react';
import Card from '../Card/Card';
import {FaHtml5, FaCss3, FaGithub, FaNodeJs, FaDatabase, FaReact, FaTrello, FaFigma, FaSass, FaJs, FaLaptopCode  } from 'react-icons/fa';
import { BiLogoTypescript } from "react-icons/bi";
import { SiFirebase } from "react-icons/si";
import { DiScrum } from "react-icons/di";
import { MdDarkMode } from "react-icons/md";
import './Section1.css';
import { useDarkMode } from '../../DarkModeContex';

const Section1 = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const darkModeBtnId = 'darkmodebtn';

  return (
    <>
      <div className={`section1wrapper ${darkMode ? 'dark-mode' : ''}`}>
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
          <Card id={darkModeBtnId} title="Ljus" icon={<MdDarkMode />} onClick={toggleDarkMode} />
          <Card title="Css" icon={<FaCss3 />} />
          <Card title="Scrum" icon={<DiScrum />} />
          <Card title="Firebase" icon={<SiFirebase />} />
        </div>
      </div>
    </>
  );
};

export default Section1;