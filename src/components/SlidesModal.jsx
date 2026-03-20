import React from 'react';
import './SlidesModal.css';
import SlidesShow from './SlidesShow.jsx';
import {useRef,useEffect,useState} from 'react';

function SlidesModal({isOpen,setIsOpen}) {
    const [slideIndex,setSlideIndex]=useState(0);
    const modalRef=useRef(null);

    const prevBtn=useRef(null);
    const nextBtn=useRef(null);

    function changeSlides(num) {

        const newIndex=slideIndex+num;
        if(newIndex>=4) {
            setSlideIndex(newIndex%4);
        }
        else if(newIndex<0) {
            setSlideIndex(4+newIndex%4);
        }
        else {
            setSlideIndex(newIndex);
        }
    }

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

    },[isOpen]);

    return (
        isOpen&&
        <div className="modal-slides-container" ref={modalRef}>
            <div className="modal-slides-content" onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
            }}>
                <button className="transparent-btn modal-close-btn" onClick={() => setIsOpen(false)}>
                    <img src='/icon-close-white.svg' alt="Close menu icon" />
                </button>
                    <div className="modalSlides-shower">
                            {slideIndex===0&&<img className="modalSlides" src="image-product-1.jpg" alt="image product 1" />}

                            {slideIndex===1&&<img className="modalSlides" src="image-product-2.jpg" alt="image product 2" />}

                            {slideIndex===2&&<img className="modalSlides" src="image-product-3.jpg" alt="image product 3" />}

                            {slideIndex===3&&<img className="modalSlides" src="image-product-4.jpg" alt="image product 4" />}

                    </div>

                    <div className="modal-thumbnail-container">
                        <button autoFocus={true} className={`transparent-btn thumbnail ${slideIndex===0? "selected":""}`} onClick={() => setSlideIndex(0)}><img src="/image-product-1-thumbnail.jpg" alt="product thumbnail 1" /></button>
                        <button className={`transparent-btn thumbnail ${slideIndex===1? "selected":""}`} onClick={() => setSlideIndex(1)}><img src="/image-product-2-thumbnail.jpg" alt="product thumbnail 2" /></button>
                        <button className={`transparent-btn thumbnail ${slideIndex===2? "selected":""}`} onClick={() => setSlideIndex(2)}><img src="/image-product-3-thumbnail.jpg" alt="product thumbnail 3" /></button>
                        <button className={`transparent-btn thumbnail ${slideIndex===3? "selected":""}`} onClick={() => setSlideIndex(3)}><img src="/image-product-4-thumbnail.jpg" alt="product thumbnail 4" /></button>
                    </div>

                    <button ref={prevBtn} className="round-btn modalPrev" onClick={() => {
                        changeSlides(-1);
                        prevBtn.current.blur();
                    }}><img src="/icon-previous.svg" alt="icon previous" /></button>
                    <button ref={nextBtn} className="round-btn modalNext" onClick={() => {
                        changeSlides(1);
                        nextBtn.current.blur();
                    }}><img src="/icon-next.svg" alt="icon next" /></button>
            </div>
        </div>

    )
}

export default SlidesModal;