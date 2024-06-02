import { useEffect, useState } from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import ProductListing from "./ProductListing";
import { useLocation } from "react-router-dom";
import Loader from "./Loader";

import Navigation from "./navigation";

import axios from "axios";
import Pagination from "./pagination";

function ProductsListBaseOnQuery({ keyword }) {
  const { pathname } = useLocation();
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(20000);
  const [filop, setFilop] = useState(false);
  const [order, setOrder] = useState(1);
  const [data, setData] = useState([]);
  const [rating, setRating] = useState(6);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const handleMinChange = (e) => {
    setMin(Number(e.target.value));
  };

  const handleMaxChange = (e) => {
    setMax(Number(e.target.value));
  };
  const handleFilterOption = () => {
    setFilop(!filop);
  };
  const handleRating = (idx) => {
    setRating(idx + 1);
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `http://localhost:4000/api/v1/products?price[lt]=${max}&price[gt]=${min}&order=${order}&ratings[lt]=${rating}&page=${page}&limit=10${
            keyword
              ? "&keyword=" + keyword
              : "&category=" + pathname.split("/")[2]
          }`
        );
        setLoading(false);

        if (res.data) {
          setTotalPages(res.data.totalPages);
          setData(res.data.products);
        }
      } catch (error) {
        setData(null);
        setLoading(false);
      }
    })();
  }, [max, min, pathname, order, rating, page, keyword]);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Navigation />
      <div className="container-13">
        <div className="fillter-option" onClick={handleFilterOption}>
          FILTER
        </div>
        {filop ? (
          <div className="container-13-3">
            <h3 className="fillter" onClick={handleFilterOption}>
              FILTER
            </h3>
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
                <input
                  type="radio"
                  onChange={() => setOrder(1)}
                  checked={order == 1}
                  name="price"
                />
                <span>lOWER-PRICE</span>
              </label>
              <label htmlFor="">
                <input
                  type="radio"
                  name="price"
                  checked={order == -1}
                  onChange={() => setOrder(-1)}
                />
                <span>HIGHER-PRICE</span>
              </label>
            </div>
            
            <div className="rating-section">
              <div className="lable">RATING</div>
              {new Array(5).fill(1).map((val, idx) => (
                <div
                  className={`rate ${idx + 1 == rating ? "check-rating" : ""}`}
                  key={val + idx + "aaaa"}
                  onClick={() => handleRating(idx)}
                >
                  <MdOutlineStarPurple500 />
                  <span>{idx + 1}</span>
                </div>
              ))}
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
              <input
                type="radio"
                checked={order == 1}
                onChange={() => setOrder(1)}
                name="price"
              />
              <span>lOWER-PRICE</span>
            </label>
            <label htmlFor="">
              <input
                type="radio"
                checked={order == -1}
                onChange={() => setOrder(-1)}
                name="price"
              />
              <span>HIGHER-PRICE</span>
            </label>
          </div>
       
          <div className="rating-section">
            <div className="lable">RATING</div>
            {new Array(5).fill(1).map((val, idx) => (
              <div
                className={`rate ${idx + 1 == rating ? "check-rating" : ""}`}
                key={val + idx + "aaaa"}
                onClick={() => handleRating(idx)}
              >
                <MdOutlineStarPurple500 />
                <span>{idx + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {data ? (
          <div className="container-13-2">
            <ProductListing
              data={data}
              title={pathname.split("/")[2]?(pathname.split("/")[2] + "'S CLOTH"):null}
            />
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
          </div>
        ) : (
          <div className="product-not">product not found</div>
        )}
      </div>
    </>
  );
}

export default ProductsListBaseOnQuery;
