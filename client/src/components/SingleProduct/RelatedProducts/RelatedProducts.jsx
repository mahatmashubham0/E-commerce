import Products from '../../Products/Products'

const RelatedProducts = () => {
    return (
        <div className="related-products">
            <Products innerValue={true} headingText = "Related Products"/>
        </div>
    )
};

export default RelatedProducts;
