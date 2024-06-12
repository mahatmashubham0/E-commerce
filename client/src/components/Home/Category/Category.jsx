import "./Category.scss";

import catOne from '../../../assets/category/cat-1.jpg'
import catTwo from '../../../assets/category/cat-2.jpg'
import catThree from '../../../assets/category/cat-3.jpg'
import catFour from '../../../assets/category/cat-4.jpg'

const Category = () => {
    return (
        <div className="category-section">
            <div className="category-content">
                <div className="category">
                    <img src={catOne} alt="img" />
                </div>
                <div className="category">
                    <img src={catTwo} alt="img" />
                </div>
                <div className="category">
                    <img src={catThree} alt="img" />
                </div>
                <div className="category">
                    <img src={catFour} alt="img" />
                </div>
            </div>
        </div>
    )
};

export default Category;
