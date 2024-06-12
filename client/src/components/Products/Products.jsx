import "./Products.scss";

import Product from '../Products/Product/Product'

const Products = ({innerValue , headingText}) => {
    return (
        <div className="products-section">
            {/* inner value pass vo showing the heading to the component visit Category component and Home componen for understanding */}
            {innerValue && <div className="product-heading">{headingText}</div>} 
            <div className="products">
                <Product />
                <Product />
                <Product />

                <Product />
                <Product />
                <Product />

                <Product />
                <Product />
                <Product />
                <Product />

                <Product />
            </div>
            
        </div>
    )
};

export default Products;
