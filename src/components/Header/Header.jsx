import React, { useEffect, useState } from 'react';
import './Header.css';
import { useDarkMode } from '../../DarkModeContex';

const Header = () => {
  const { darkMode } = useDarkMode();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header1 ${darkMode ? 'dark-mode' : ''}`}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;700&display=swap"
      />
      <h1 className="title">George Schedvin</h1>
      <div className="line" style={{ width: `${(scrollPosition / window.innerWidth) * 124}%` }} />
      <div className="mobileline" style={{ width: `${(scrollPosition / window.innerWidth) * 25}%` }} />
      <h1 className="contact">Frontendutvecklare</h1>
    </div>
  );
};

export default Header;
