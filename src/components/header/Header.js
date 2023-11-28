import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header({notHome}) {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-logo">VendPro</div>
      <div className="header-options">
        <div className="header-option" onClick={() => {}}>help</div>
        {notHome ? <div className="header-option" onClick={() => {navigate("/")}}>home</div> : null}
      </div>
    </header>
  );
}

export default Header;