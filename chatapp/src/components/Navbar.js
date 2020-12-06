import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  if(localStorage.getItem("user_f_name")){
        
    return (
      <>
  
  
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              VIRTUAL HUB
              <i class='fab fa-typo3' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              {/* <li className='nav-item'>
                <Link
                  to='/games'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Games
                </Link>
              </li> */}
              <li className='nav-item'>
                <Link
                  to='/events'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Events
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/board'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Board
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/radio'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Music
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/chat'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Chat
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Goodbye {localStorage.getItem("user_f_name")}</Button>}
          </div>
        </nav>
      </>
    );
  }else{
    return (
      <>
  
  
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              COMMON ROOM
              <i class='fab fa-typo3' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              
              </ul>
            {button && <Button buttonStyle='btn--outline'>LOG IN</Button>}
          </div>
        </nav>
      </>
    );
  }
  
  
}

export default Navbar;