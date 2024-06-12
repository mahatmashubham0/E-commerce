import "./Category.scss";

import Products from '../Products/Products'

const Category = () => {
    return (
        <div className="category-main-content">

            <div className="layout">

                <div className="category-heading">Category Heading</div>

                <Products innerValue = {false}/>

            </div>
            
        </div>
    )
};

export default Category;
