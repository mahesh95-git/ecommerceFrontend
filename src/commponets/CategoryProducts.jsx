import React, { useState } from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import ProductListing from "./ProductListing";
function CategoryProducts() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(20000);
  const [filop, setFilop] = useState(false);
  const handleMinChange = (e) => {
    setMin(e.target.value);
  };

  const handleMaxChange = (e) => {
    setMax(e.target.value);
  };
  const handleFillterOption = () => {
    setFilop(!filop);
  };

  return (
    <div className="container-13">
      <div className="fillter-option" onClick={handleFillterOption}>
        FILLTER
      </div>
      {filop ? (
        <div className="container-13-3">
          <h3 className="fillter">FILLTER</h3>
          <div className="price-section">
            <div className="lable">PRICE</div>
            <div className="lable-price">
              <div>
                <div>MIN</div>
                <div>{min}</div>
              </div>
              <div>
                <div>MAX</div>
                <div>{max}</div>
              </div>
            </div>
            <div className="price-slider">
              <input
                type="range"
                min={1}
                max={500}
                value={min}
                onChange={handleMinChange}
              />
              <input
                type="range"
                min={500}
                max={20000}
                value={max}
                onChange={handleMaxChange}
              />
            </div>
          </div>

          <div className="lower-higher-price-section">
            <div className="lable">SORT</div>

            <label htmlFor="">
              <input type="radio" />
              <span>lOWER-PRICE</span>
            </label>
            <label htmlFor="">
              <input type="radio" />
              <span>HIGHER-PRICE</span>
            </label>
          </div>
          <div className="brand-section">
            <div className="lable">BRAND</div>
            <div className="brnad-name">
              <label htmlFor="Apple">
                <input type="checkbox" /> <span>Apple</span>
              </label>
              <label htmlFor="Apple">
                <input type="checkbox" /> <span>Apple</span>
              </label>
              <label htmlFor="Apple">
                <input type="checkbox" /> <span>Apple</span>
              </label>
              <label htmlFor="Apple">
                <input type="checkbox" /> <span>Apple</span>
              </label>
              <label htmlFor="Apple">
                <input type="checkbox" /> <span>Apple</span>
              </label>
            </div>
          </div>
          <div className="rating-section">
            <div className="lable">RATING</div>
            <div className="rate">
              <MdOutlineStarPurple500 />
              <span>1</span>
            </div>
            <div className="rate">
              <MdOutlineStarPurple500 />
              <span>2</span>
            </div>
            <div className="rate">
              <MdOutlineStarPurple500 />
              <span>3</span>
            </div>
            <div className="rate">
              <MdOutlineStarPurple500 />
              <span>4</span>
            </div>
            <div className="rate">
              <MdOutlineStarPurple500 />
              <span>5</span>
            </div>
          </div>
        
        </div>
      ) : (
        <div></div>
      )}
      <div className="container-13-1">
        <h3 className="fillter">FILLTER</h3>
        <div className="price-section">
          <div className="lable">PRICE</div>

          <div className="lable-price">
            <div>
              <div>MIN</div>
              <div>{min}</div>
            </div>
            <div>
              <div>MAX</div>
              <div>{max}</div>
            </div>
          </div>
          <div className="price-slider">
            <input
              type="range"
              min={1}
              max={500}
              value={min}
              onChange={handleMinChange}
            />
            <input
              type="range"
              min={500}
              max={20000}
              value={max}
              onChange={handleMaxChange}
            />
          </div>
        </div>

        <div className="lower-higher-price-section">
          <div className="lable">SORT</div>

          <label htmlFor="">
            <input type="radio" />
            <span>lOWER-PRICE</span>
          </label>
          <label htmlFor="">
            <input type="radio" />
            <span>HIGHER-PRICE</span>
          </label>
        </div>
        <div className="brand-section">
          <div className="lable">BRAND</div>
          <div className="brnad-name">
            <label htmlFor="Apple">
              <input type="checkbox" /> <span>Apple</span>
            </label>
            <label htmlFor="Apple">
              <input type="checkbox" /> <span>Apple</span>
            </label>
            <label htmlFor="Apple">
              <input type="checkbox" /> <span>Apple</span>
            </label>
            <label htmlFor="Apple">
              <input type="checkbox" /> <span>Apple</span>
            </label>
            <label htmlFor="Apple">
              <input type="checkbox" /> <span>Apple</span>
            </label>
          </div>
        </div>
        <div className="rating-section">
          <div className="lable">RATING</div>
          <div className="rate">
            <MdOutlineStarPurple500 />
            <span>1</span>
          </div>
          <div className="rate">
            <MdOutlineStarPurple500 />
            <span>2</span>
          </div>
          <div className="rate">
            <MdOutlineStarPurple500 />
            <span>3</span>
          </div>
          <div className="rate">
            <MdOutlineStarPurple500 />
            <span>4</span>
          </div>
          <div className="rate">
            <MdOutlineStarPurple500 />
            <span>5</span>
          </div>
        </div>
      </div>

      <div className="container-13-2">
        <ProductListing />
      </div>
    </div>
  );
}

export default CategoryProducts;
