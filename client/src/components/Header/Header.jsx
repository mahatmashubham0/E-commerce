import "./Header.scss";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

// import Cart from '../Cart/Cart'
// import Search from '../Header/Search'
// import {Context} from '../../utils/context'

import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Search from '../Header/Search/Search'

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [cartPanel , showCartPanel] = useState(false)
  const [searchPanel , showSearchPanel] = useState(false)

  const handleScroller = () => {
    const offSet = window.scrollY;
    console.log(offSet);
    if (offSet > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroller);
  }, []);

  return (
    <>
      <div className={`main-header ${scrolled ? "header-sticky" : ""}`}>
        <div className="header-content">
          <div className="header-left">
            <ul>
              <li>Home</li>
              <li>Products</li>
              <li>About</li>
            </ul>
          </div>
          <div className="header-center">MyStore-Place</div>
          <div className="header-right">
            <TbSearch  onClick={()=>showSearchPanel(!searchPanel)}/>
            <CgShoppingCart onClick={()=>showCartPanel(true)}/>
            <span className="cart-icon">
              <AiOutlineHeart />
              <span>5</span>
            </span>
          </div>
        </div>
      </div>
      {cartPanel && <Cart showCartPanel = {showCartPanel}/>}
      {searchPanel && <Search showSearchPanel={showSearchPanel}/>}
    </>
  );
};

export default Header;
