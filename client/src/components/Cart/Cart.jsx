import "./Cart.scss";

import { MdClose } from "react-icons/md";
// import { BsCartX } from "react-icons/bs";

import CartItem from '../Cart/CartItem/CartItem'

const Cart = ({ showCartPanel }) => {
  return (
    <div className="cart-panel">
      <div className="opacity-layer"></div>
      <div className="cart-content">

        <div className="shopping-cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close" onClick={() => showCartPanel(false)}>
            <MdClose /> <p>Close</p>
          </span>
        </div>
{/* 
        <div className="empty-cart">
            <BsCartX />
            <span>No Product in the Cart Item </span>
            <button className="button">Return to Shop</button>
        </div> */}

        <>
            <CartItem />

            
            <div className="cart-footer">
                <div className="subtotal">
                    <span className="text">Total</span>
                    <span className="text-total">₹ 12345</span>
                </div>
                <div className="checkout-btn">
                    <button className="button">Check Out</button>
                </div>
            </div>
        </>

      </div>
    </div>
  );
};

export default Cart;
