
import "./Home.scss";

import Banner from './Banner/Banner'
import Category from "./Category/Category";
import Products from "../Products/Products";

const Home = () => {
    return (
        <div>
            {/* Home */}
            <Banner />

            <div className="try">
                <div className="try-block">
                    <div className="block">
                        <img src={'https://eminence.ch/wp-content/uploads/2023/08/commerce-tips-2022.jpg'} alt="" />
                    </div>
                    <div className="block">
                    <img src={'https://miro.medium.com/v2/resize:fit:1400/1*SwFB1o_k1LGprN-XRUZQ8w.jpeg'} alt="" />

                    </div>
                    <div className="block">
                    <img src={'https://assets-160c6.kxcdn.com/wp-content/uploads/2022/08/2022-08-09-en-de.jpg'} alt="" />

                    </div>
                </div>
            </div>

            <div className="main-content">
                <div className="layout">
                    <Category />
                    <Products innerValue={true} headingText = "Popular Products"/>
                </div>
            </div>
        </div>
    );
};

export default Home;
