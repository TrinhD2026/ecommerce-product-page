import React from 'react';
import './ModalMenu.css';
import {useRef,useEffect,useState} from 'react';
import Menu from './Menu.jsx'

function ModalMenu() {
    const [isOpen,setIsOpen]=useState(false);
    const modalRef=useRef(null);
    useEffect(() => {
        if(!isOpen) {
            return;
        }

        const modalElement=modalRef.current;
        const focusableElements=modalElement.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement=focusableElements[0];
        const lastElement=focusableElements[focusableElements.length-1];
        const handleTabKeyPress=(event) => {
            if(event.key==='Tab') {
                if(event.shiftKey&&document.activeElement===firstElement) {
                    //if shift+tab, prevent focus goes backward out of the first element
                    event.preventDefault();
                    lastElement.focus();
                } else if(!event.shiftKey&&document.activeElement===lastElement) {
                    //if tab at the last element, prevent focus goes out of the last element
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        };

        modalElement.addEventListener('keydown',handleTabKeyPress);
        return () => {
            modalElement.removeEventListener("keydown",handleTabKeyPress);
        };

    },[isOpen,setIsOpen]);

    return (
        <div className="main-modal">
            {!isOpen&&<button className="transparent-btn" onClick={() => setIsOpen(!isOpen)}><img src="/icon-menu.svg" alt="icon menu" /></button>}
            {isOpen&&
            <div className="menu-container" ref={modalRef} >
                <div className="menu-container-content">
                        <button className="transparent-btn btn-close" onClick={() => setIsOpen(false)}>
                        <img src='/icon-close.svg' alt="Close menu icon" />
                    </button>
                    <Menu onAnchorClick={() => setIsOpen(false)} className="modal-menu" />
                </div>
            </div>
            }
        </div>
    )
}

export default ModalMenu;