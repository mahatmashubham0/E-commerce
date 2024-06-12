import { MdClose } from "react-icons/md";
import "./Search.scss";

import earbudsProd from "../../../assets/products/earbuds-prod-5.webp";

const Search = ({ showSearchPanel }) => {
  return (
    <div className="search-model">
      <div className="search-field">
        <input
          type="text"
          name=""
          autoFocus
          placeholder="Search Product"
          id=""
        />
        <MdClose onClick={() => showSearchPanel(false)} />
      </div>

      <div className="search-results-content">
        <div className="search-result">
          <div className="search-result-item">

            <div className="img-container">
              <img src={earbudsProd} alt="img" />
            </div>

            <div className="prod-details">
              <span className="name">Product Name</span>
              <span className="description">Product description</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
