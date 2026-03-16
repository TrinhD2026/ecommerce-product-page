import React from 'react';
import './Cart.css';

function Cart({isOpen, productImg, productName,singlePrice, quantity, clearCart=null}) {
    return (isOpen&&
        <div className="cart__main-container" onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
        }}>
            <h3 className="cart__header">Cart</h3>
            <div className="cart__divider"></div>
            <div className="cart__content-container">
                {quantity>0&&(
                    <>
                        <div className="cart__product-container">
                            <img className="cart__product-image" src={productImg} alt="product image" />
                            <div>
                                <h4 className="cart__product-name">{productName}</h4>
                                <p className="cart__price">{`$${singlePrice} x ${quantity}`} <span className="cart__total-price">{`$${(singlePrice*quantity).toFixed(2)}`}</span></p>
                            </div>
                            <button className="transparent-btn" onClick={clearCart}><img src="/icon-delete.svg" alt="delete icon" /></button>
                        </div>
                        <button className="wide-btn" onClick={clearCart}>Check out</button>
                    </>
                )
                }
                {quantity===0&&<p className="cart__empty-text">Your cart is empty</p>}
            </div>
            

        </div>
    )
}

export default Cart;