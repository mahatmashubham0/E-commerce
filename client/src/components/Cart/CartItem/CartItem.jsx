import "./CartItem.scss";

import { MdClose } from "react-icons/md";

import earbudsProd from "../../../assets/products/earbuds-prod-4.webp";

const CartItem = () => {
  return (
    <div className="cart-products">
      <div className="cart-product">

        <div className="img-container">
          <img src={earbudsProd} alt="img" />
        </div>

        <div className="prod-details">
          <div className="name">Product Name</div>
          {/* <MdClose className="pro-close-btn" /> */}
          <div className="quantity-btn">
            <span>+</span>
            <span>5</span>
            <span>-</span>
          </div>
          <div className="quantity-product">
            <span>3</span>
            <span>×</span>
            <span style={{color: "#04AA6D"}}>₹ 14582</span>
          </div>
        </div>

        <MdClose className="pro-close-btn" />
        
      </div>
    </div>
  );
};

export default CartItem;
