// Header.js

import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">VendPro</div>
      <div className="header-options">
        <div className="header-option" onClick={() => {}}>help</div>
      </div>
    </header>
  );
}

export default Header;