import "./Product.scss";

import Earbuds from '../.../../../../assets/products/earbuds-prod-1.webp'

const Product = () => {
    return (
        <div className="prodcut-card">
            <div className="thumbnails-image">
                <img src={Earbuds} alt="img" />
            </div>
            <div className="product-details">
                <span className="name">lorem</span>
                <span className="price">$599</span>
            </div>
        </div>
    )
};

export default Product;
