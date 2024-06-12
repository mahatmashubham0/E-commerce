import "./SingleProduct.scss";

import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedinIn,
  FaCartPlus,
  FaTwitter
} from "react-icons/fa";

import RelatedProducts from '../SingleProduct/RelatedProducts/RelatedProducts'

import ProductImg from "../../assets/products/earbuds-prod-3.webp";

const SingleProduct = () => {
  return (
    <div className="single-product-page-content">
      <div className="layout">
        <div className="single-page-product">
          <div className="left-content">
            <img src={ProductImg} alt="img" />
          </div>
          <div className="right-content">
            <div className="name">Product Name</div>
            <div className="price">Price</div>
            <div className="description">Description</div>

            <div className="cart-btn">
              <div className="quantity-btn">
                <span>+</span>
                <span>5</span>
                <span>-</span>
              </div>
              <div className="add-to-cart-btn">
                <button className="button"><FaCartPlus className="icon"/>
                  Add to Cart</button>
              </div>
            </div>

            <span className="driver"/>

            <div className="info-item">
                <span className="text-bold">Category:

                  <span style={{margin: "0 5px"}}>Headphones</span>

                </span>

                <span className="text-bold">Share:
                    
                  <span className="social-icons">
                    <FaFacebook />
                    <FaYoutube />
                    <FaLinkedinIn />
                    <FaInstagram />
                    <FaTwitter />
                  </span>

                </span>
            </div>

          </div>
        </div>

        <RelatedProducts />

      </div>
    </div>
  );
};

export default SingleProduct;
