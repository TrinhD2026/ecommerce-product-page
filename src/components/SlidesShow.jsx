import React from 'react';
import {useState,useRef} from 'react';
import SlidesModal from './SlidesModal.jsx';

import './SlidesShow.css';

function SlidesShow() {
    const [slideIndex,setSlideIndex]=useState(0);
    const [isSlidesModal,setIsSlidesModal]=useState(false);
    const prevBtn=useRef(null);
    const nextBtn=useRef(null);
    const slidesBtn=useRef(null);

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

    function openSlidesModal(e) {
        e.preventDefault();

        if(window.innerWidth<=720) {
            return;
        }
        setIsSlidesModal(true);
    }

    return (
        <div className="slideshow-container">
            <div className="slides-shower">
                <button ref={slidesBtn} type="button" className="transparent-btn slide-btn" onClick={(e) => {
                    openSlidesModal(e);
                    slidesBtn.current.blur();
                }}>
                    {slideIndex===0&&<img className="mySlides" src="image-product-1.jpg" alt="image product 1" />}

                    {slideIndex===1&&<img className="mySlides" src="image-product-2.jpg" alt="image product 2" />}

                    {slideIndex===2&&<img className="mySlides" src="image-product-3.jpg" alt="image product 3" />}

                    {slideIndex===3&&<img className="mySlides" src="image-product-4.jpg" alt="image product 4" />}
                </button>
                
                <div className="thumbnail-container">
                    <button className={`transparent-btn thumbnail ${slideIndex === 0 ? "selected" : ""}`} onClick={() => setSlideIndex(0)}><img src="/image-product-1-thumbnail.jpg" alt="product thumbnail 1" /></button>
                    <button className={`transparent-btn thumbnail ${slideIndex === 1 ? "selected" : ""}`} onClick={() => setSlideIndex(1)}><img src="/image-product-2-thumbnail.jpg" alt="product thumbnail 2" /></button>
                    <button className={`transparent-btn thumbnail ${slideIndex===2? "selected":""}`} onClick={() => setSlideIndex(2)}><img src="/image-product-3-thumbnail.jpg" alt="product thumbnail 3" /></button>
                    <button className={`transparent-btn thumbnail ${slideIndex===3? "selected":""}`} onClick={() => setSlideIndex(3)}><img src="/image-product-4-thumbnail.jpg" alt="product thumbnail 4" /></button>
                </div>
            </div>

            <SlidesModal isOpen={isSlidesModal}
                setIsOpen={setIsSlidesModal} />
            <button ref={prevBtn} className="round-btn prev" onClick={() => {
                changeSlides(-1);
                prevBtn.current.blur();
            }}><img src="/icon-previous.svg" alt="icon previous" /></button>
            <button ref={nextBtn} className="round-btn next" onClick={() => {
                changeSlides(1);
                nextBtn.current.blur();
            }}><img src="/icon-next.svg" alt="icon next" /></button>
        </div>
    )
}

export default SlidesShow;