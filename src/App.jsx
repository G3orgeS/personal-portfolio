import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './index.css';
import { DarkModeProvider } from "./DarkModeContex";
import Header from './components/Header/Header'; 
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';
import Section5 from './components/Section5/Section5';
import Section6 from './components/Section6/Section6';

const App = () => {
  return (
    <DarkModeProvider>
      <div>
        <Header />
        <Section2 />
        <Section3 />
        <Section1 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
    </DarkModeProvider>
  );
};

export default App;