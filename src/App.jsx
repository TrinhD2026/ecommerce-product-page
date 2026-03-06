import {useState} from 'react';
import './App.css';
import Menu from './components/Menu.jsx';
import ModalMenu from './components/ModalMenu.jsx';
import CartButton from './components/CartButton.jsx';

function App() {
    const [addedCount,setAddedCount]=useState(0);
    const [selectedCount,setSelectedCount]=useState(0);
    function showCart(e) {
        e.preventDefault();
    }
    function addProduct(e) {
        e.preventDefault();
    }

    return (
        <>
            <div className="header">
                <ModalMenu />
                <h1><img src="/logo.svg" alt="sneakers logo" /></h1>
                <Menu className="normal-menu" />
                <CartButton count={addedCount} onCartClick={showCart} />
                <button type="button" onClick={showCart}><img src="/image-avatar.png" alt="user avatar" /></button>
            </div>
            <div className="product-container">
                Sneaker Company

                Fall Limited Edition Sneakers

                These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they’ll withstand everything the weather can offer.

                $125.00
                50%
                $250.00

                0
                <button type="button" onClick={addProduct}>
                    <img src="/icon-cart.svg" alt="cart icon"/>
                    Add to cart
                </button>
            </div>
            
        </>
    )
}

export default App
