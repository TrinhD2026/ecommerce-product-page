import React from 'react';
import {useState} from 'react';

import './SlidesShow.css';

function SlidesShow() {
    const [slideIndex,setSlideIndex]=useState(0);

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

    return (
        <div className="slideshow-container">

            {slideIndex===0&&<img className="mySlides fade" src="image-product-1.jpg" alt="image product 1" />}

            {slideIndex===1&&<img className="mySlides fade" src="image-product-2.jpg" alt="image product 2" />}

            {slideIndex===2&&<img className="mySlides fade" src="image-product-3.jpg" alt="image product 3" />}

            {slideIndex===3&&<img className="mySlides fade" src="image-product-4.jpg" alt="image product 4" />}

            <button className="transparent-btn prev" onClick={() => changeSlides(-1)}><img src="/icon-previous.svg" alt="icon previous" /></button>
            <button className="transparent-btn next" onClick={() => changeSlides(1)}><img src="/icon-next.svg" alt="icon next" /></button>
        </div>
    )
}

export default SlidesShow;