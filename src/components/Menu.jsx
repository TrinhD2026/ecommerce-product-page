import React from 'react';
import './Menu.css';
import {useRef,useState} from 'react';

function Menu({className,onAnchorClick=null}) {
    const collection=useRef(null);
    const menCollection=useRef(null);
    const womenCollection=useRef(null);
    const about=useRef(null);
    const contact=useRef(null);
    const [selection,setSelection]=useState("");

    function onNavClicked(e) {
        e.preventDefault();
        if(onAnchorClick===null)
            return;

        onAnchorClick();
    }

    return (
        <nav className={`navbar ${className}`}>
            <a className={selection==="collection"? "selected":""} ref={collection} href="#collections" onClick={(e) => {
                setSelection("collection");
                onNavClicked(e);
                collection.current.blur();
            }}>Collections</a>
            <a className={selection==="menCollection"? "selected":""} ref={menCollection} href="#men-collections" onClick={(e) => {
                setSelection("menCollection");
                onNavClicked(e);
                menCollection.current.blur();
            }}>Men</a>
            <a className={selection==="womenCollection"? "selected":""} ref={womenCollection} href="#women-collections" onClick={(e) => {
                setSelection("womenCollection");
                onNavClicked(e);
                womenCollection.current.blur();
            }}>Women</a>
            <a className={selection==="about"? "selected":""} ref={about} href="#about" onClick={(e) => {
                setSelection("about");
                onNavClicked(e);
                about.current.blur();
            }}>About</a>
            <a className={selection==="contact"? "selected":""} ref={contact} href="#contact" onClick={(e) => {
                setSelection("contact");
                onNavClicked(e);
                contact.current.blur();
            }}>Contact</a>
        </nav>
    )
}

export default Menu;