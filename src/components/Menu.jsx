import React from 'react';
import './Menu.css';

function Menu({className, onAnchorClick}) {
    return (
        <nav className={`navbar ${className}`}>
            <a className="nav-item" href="#collections" onClick={() => onAnchorClick()}>Collections</a>
            <a className="nav-item" href="#men-collections" onClick={() => onAnchorClick()}>Men</a>
            <a className="nav-item" href="#women-collections" onClick={() => onAnchorClick()}>Women</a>
            <a className="nav-item" href="#about" onClick={() => onAnchorClick()}>About</a>
            <a className="nav-item" href="#contact" onClick={() => onAnchorClick()}>Contact</a>
        </nav>
    )
}

export default Menu;