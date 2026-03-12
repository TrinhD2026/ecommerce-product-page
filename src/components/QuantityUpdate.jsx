import React from 'react';
import {useState,useRef} from 'react';

import './QuantityUpdate.css';

function QuantityUpdate({selectedCount,changeQuantity}) {
    const minusBtn=useRef(null);
    const plusBtn=useRef(null);
    return (
        <div className="update-quantity-container">
            <button ref={minusBtn} type="button" className="transparent-btn" onClick={(e) => {
                e.preventDefault();
                changeQuantity(-1);
                minusBtn.current.blur();
            }}>
                <img src="/icon-minus.svg" alt="icon minus" className="plus-minus-img" />
            </button>
            <p className="selected-count">{selectedCount}</p>
            <button ref={plusBtn} type="button" className="transparent-btn" onClick={(e) => {
                e.preventDefault();
                changeQuantity(1);
                plusBtn.current.blur();
            }}>
                <img src="/icon-plus.svg" alt="icon plus" className="plus-minus-img" />
            </button>
        </div>

    )
}

export default QuantityUpdate;