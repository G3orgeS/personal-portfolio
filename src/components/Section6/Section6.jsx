import React from 'react';
import './Section6.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoIosDocument } from "react-icons/io";
import { useDarkMode } from '../../DarkModeContex';

const Section6 = () => {
    const { darkMode } = useDarkMode();
    const linkedinLink = 'https://www.linkedin.com/in/george-schedvin-63b56924a/';
    const githubLink = 'https://github.com/G3orgeS';
    const cv = 'https://drive.google.com/file/d/1_B2Y34Et03KZKGylF7KDcAONYlh8IX0T/view?usp=sharing'

    return (
        <div className={`section6wrapper ${darkMode ? 'dark-mode' : ''}`}>
            <div className='section6infodiv'>
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                    <h3>LinkedIn</h3>
                </a>
            </div>
            <div className='section6infodiv'>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                    <h3>Github</h3>
                </a>
            </div>
            <div className='section6infodiv'>
                <a href={cv} target="_blank" rel="noopener noreferrer">
                <IoIosDocument />
                <h3>CV</h3>
                </a>
            </div>
        </div>
    );
};

export default Section6;
