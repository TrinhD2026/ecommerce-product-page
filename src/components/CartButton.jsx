import React from 'react';
import {useRef} from 'react';

import './CartButton.css';

function CartButton({count,onCartClick}) {
    const btn=useRef(null);

    return (
        <div className="cart-button">
            <button ref={btn} className="transparent-btn" onClick={(e) => {
                onCartClick(e);
                btn.current.blur();
            }}><img src="/icon-cart.svg" alt="cart icon" /></button>
            {count>0&&<p className="cart-button_count">{count}</p>}
        </div>
    )
}

export default CartButton;