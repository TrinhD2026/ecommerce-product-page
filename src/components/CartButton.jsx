import React from 'react';
import './CartButton.css';

function CartButton({count, onCartClick}) {
    return (
        <div className="cart-button">
            <button className="transparent-btn" onClick={onCartClick}><img src="/icon-cart.svg" alt="cart icon" /></button>
            {count > 0 && <p>{count}</p>}
        </div>
    )
}

export default CartButton;