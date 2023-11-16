import React from 'react'
import './Section3.css'
import profilimg from '../../images/profil1.jpg';
import { useDarkMode } from '../../DarkModeContex';

const Section3 = () => {
    const { darkMode } = useDarkMode();

    return (
        <>
   <div className={`section3wrapper ${darkMode ? 'dark-mode' : ''}`}>
            <h2>Presentation</h2>
            <div className="section3bodywrapper">
            <div className="section3card">
                <p>
                    Hej, Jag heter George.
                    <br />
                    <br />
                    Jag hyser en djup passion för <strong>problemlösning, teknologi, effektivt samarbete, ledarskap, entreprenörskap och gastronomi.</strong>
                    <br />
                    <br />
                    Med en bakgrund inom hotell- och restaurang så har jag en omfattande förståelse för kvalitativ service, kundinteraktion och effektiv företagsdrift. Mot bakgrund av de utmaningar som hotell- och restaurangverksamheter ställdes inför under pandemin, har jag medvetet valt att utforska nya möjligheter genom att inrikta mig inom programmering.
                    <br />
                    <br />
                    Jag ser nu fram emot att tillämpa min kompetens och engagemang för att göra meningsfulla insatser inom den tekniska sektorn. Mitt passionerade intresse för teknologi och entreprenörskap kommer att vara en drivkraft för att utforska och bidra till detta spännande område.
                </p>
            </div>
                <div className="section3img">
                    <img src={profilimg} alt="syns den?" />
                </div>
            </div>
            </div>
        </>
    )
}

export default Section3