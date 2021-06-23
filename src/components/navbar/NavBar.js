import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

const NavBar = ({ isScrolling, translate, i18n }) => {
  const toTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  

  const [inEnglish, setInEnglish] = useState(false);

  const [active, setActive] = useState(false);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
    setInEnglish(!inEnglish);
  }

  const closeMenu = () => {
    setActive(!active);
  };

  return (
    
    <nav className={`navbar ${isScrolling > 20 ? 'scrolling' : null}`}>
      <div className='nav-logo' onClick={toTop}>
      {translate('nav.logo')}
      </div>
      <div className='right-nav'>
        <ul class='nav-menu' style={active ? { display: 'flex' } : {}}>
          
            <Link
              activeClass='active'
              to='section1'
              smooth={true}
              offset={-70}
              onClick={closeMenu}
            >
              <li className='nav-item'>
              {translate('nav.about')}
          </li>
            </Link>
            <Link
              activeClass='active'
              to='section2'
              smooth={true}
              offset={-70}
              onClick={closeMenu}
            >
            <li className='nav-item'>
            {translate('nav.projects')}
          </li>
            </Link>

            <Link
              activeClass='active'
              to='section3'
              smooth={true}
              offset={-70}
              onClick={closeMenu}
            >
            <li className='nav-item'>
            {translate('nav.contact')}
          </li>
            </Link>
          
            <Link
              activeClass='active'
              to='section4'
              smooth={true}
              offset={-70}
              onClick={inEnglish ? () => changeLanguage('en') : () => changeLanguage('es') }
            ><li
            className='nav-item last'
          >
              {translate('nav.translate')}
          </li>
            </Link>
        </ul>
      </div>

      <div
        className={active ? `hamburger active` : `hamburger`}
        onClick={closeMenu}
      >
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
    </nav>
  );
};

export default NavBar;
