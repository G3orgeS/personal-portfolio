import React from 'react';
import Header from './components/Header/Header'; 
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Section5 from './components/Section5/Section5';

const App = () => {
  return (
    <div>
      <Header   />
      <Section2 />
      <Section3 />
      <Section1 />
      <Section4 />
      <Section5 />
    </div>
  );
}

export default App;