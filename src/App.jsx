import {useState, useRef} from 'react';
import './App.css';
import Menu from './components/Menu.jsx';
import ModalMenu from './components/ModalMenu.jsx';
import CartButton from './components/CartButton.jsx';
import SlidesShow from './components/SlidesShow.jsx';
import QuantityUpdate from './components/QuantityUpdate.jsx';
import Cart from './components/Cart.jsx';

function App() {
    const [addedCount,setAddedCount]=useState(0);
    const [selectedCount,setSelectedCount]=useState(0);
    const [isCartOpen,setIsCartOpen]=useState(false);
    const addBtn=useRef(null);
    const avatarBtn=useRef(null);
    
    function showCart(e) {
        e.preventDefault();
        setIsCartOpen(!isCartOpen);
    }

    function clickMainContainer(e) {
        e.preventDefault();
        if(isCartOpen) {
            setIsCartOpen(false);
        }
    }

    function addProduct(e) {
        e.preventDefault();
        setAddedCount(selectedCount);
        addBtn.current.blur();
    }

    function removeProduct(e) {
        e.preventDefault();
        setAddedCount(0);
        setSelectedCount(0);
    }

    function changeQuantity(num) {
        const newCount=selectedCount+num;
        if(newCount<=0) {
            setSelectedCount(0);
        }
        else {
            setSelectedCount(newCount);
        }
    }

    return (
        <div className="main-container" onClick={clickMainContainer}>
            <div className="header">
                <div className="header-sub-1">
                    <ModalMenu />
                    <h1><img src="/logo.svg" alt="sneakers logo" /></h1>
                    <Menu className="normal-menu" />
                </div>
                <div className="header-sub-2">
                    <CartButton count={addedCount} onCartClick={showCart} />
                    <button ref={avatarBtn} className="transparent-btn avatar-btn" type="button" onClick={(e) => {
                        showCart(e);
                        avatarBtn.current.blur();
                    }}><img src="/image-avatar.png" alt="user avatar" /></button>
                </div>
            </div>

            <Cart isOpen={isCartOpen}
                singlePrice={125}
                quantity={addedCount}
                productImg="/image-product-1-thumbnail.jpg"
                productName="Fall Limited Edition Sneakers"
                clearCart={removeProduct} />
            <div className="divider"></div>
            <div className="product-container">
                <SlidesShow />
                <div className="add-product-container">
                    <h2 className="sub-company-header">Sneaker Company</h2>
                    <h3 className="product-name-header">Fall Limited Edition Sneakers</h3>
                    <p className="product-description">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they will withstand everything the weather can offer.</p>
                    <div className="price-container">
                        <div>
                            <p className="current-price">$125.00</p>
                            <p className="discount-percent">50%</p>
                        </div>
                        <p className="old-price">$250.00</p>
                    </div>
                    <div className="add-quantity-container">
                        <QuantityUpdate selectedCount={selectedCount} changeQuantity={changeQuantity} />
                        <button ref={addBtn} className="wide-btn add-btn" type="button" onClick={addProduct}>
                            <img src="/icon-cart.svg" alt="cart icon" />
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
