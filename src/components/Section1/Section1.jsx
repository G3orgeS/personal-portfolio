import React, { useState } from 'react';
import Card from '../Card/Card';
import {FaHtml5, FaCss3, FaGithub, FaNodeJs, FaDatabase, FaReact, FaTrello, FaFigma, FaSass, FaJs, FaLaptopCode  } from 'react-icons/fa';
import { BiLogoTypescript } from "react-icons/bi";
import { SiFirebase, SiDotnet  } from "react-icons/si";
import { DiScrum } from "react-icons/di";
import { MdDarkMode, MdPhoneInTalk  } from "react-icons/md";
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
        <Card title="HTML" icon={<FaHtml5 />} url="https://html.com/" />
          <Card title="CSS" icon={<FaCss3 />} url="https://www.w3.org/Style/CSS/Overview.en.html"/>
          <Card title="GitHub" icon={<FaGithub />} url="https://github.com/"/>
          <Card title="Node.js" icon={<FaNodeJs />} url="https://nodejs.org/en"/>
          <Card title="MongoDB" icon={<FaDatabase />} url="https://www.mongodb.com/"/>
          <Card title="VS Code" icon={<FaLaptopCode />} url="https://code.visualstudio.com/"/>
          <Card title="React" icon={<FaReact url="https://react.dev/"/>} />
          <Card title="TypeScript" icon={<BiLogoTypescript />} url="https://www.typescriptlang.org/"/>
          <Card title="JavaScript" icon={<FaJs />} url="https://www.javascript.com/"/>
          <Card title="Trello" icon={<FaTrello />} url="https://trello.com/"/>
          <Card title="Figma" icon={<FaFigma />} url="https://www.figma.com/"/>
          <Card title="Sass" icon={<FaSass />} url="https://sass-lang.com/"/>
          <Card id={darkModeBtnId} title="Ljus" icon={<MdDarkMode />} onClick={toggleDarkMode} />
          <Card title="Scrum" icon={<DiScrum />} url="https://www.scrum.org/"/>
          <Card title="Firebase" icon={<SiFirebase />} url="https://firebase.google.com/"/>
          <Card title="Kommunikation" icon={<MdPhoneInTalk />} />
          <Card title="ASP.net" icon={<SiDotnet />} />
        </div>
      </div>
    </>
  );
};

export default Section1;