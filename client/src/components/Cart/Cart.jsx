import "./Cart.scss";

import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";

import CartItem from '../Cart/CartItem/CartItem'
import { useContext } from "react";
import { Context } from "../../utils/context";

const Cart = ({ showCartPanel }) => {

  const {cartItem , cartSubTotal} = useContext(Context);
  console.log("value",cartItem.length)

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


      
        {!cartItem?.length && 
          <div className="empty-cart">
          <BsCartX />
          <span>No Product in the Cart Item </span>
          <button className="button">Return to Shop</button>
         </div>
        }

        <>

            {!!cartItem?.length &&
              <>
                 <CartItem />
                 <div className="cart-footer">
                   <div className="subtotal">
                    <span className="text">Total</span>
                    <span className="text-total">₹ {cartSubTotal}</span>
                  </div>
                  <div className="checkout-btn">
                     <button className="button">Check Out</button>
                 </div>
                </div>
              </>
            }
        </>

      </div>
    </div>
  );
};

export default Cart;
