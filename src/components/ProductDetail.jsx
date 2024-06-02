import { useEffect, useState } from "react";
import { Navigation, Product } from "./index";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import Loader from "./Loader";
import { useProductDetailQuery } from "../redux/api/product";
import { useAddToCartMutation } from "../redux/api/cart";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setReview } from "../redux/controller/user";
function ProductDetail() {
  const { pathname } = useLocation();
  const { data, isLoading } = useProductDetailQuery(
    pathname.split("/")[2].toString()
  );
  const [
    addToCart,
    {
      data: addToCartRes,
      isError,
      isLoading: addToCartLoading,
      error,
    },
  ] = useAddToCartMutation();

  const [image, setImage] = useState("");
  const [productQuantity, setProductQuantity] = useState(1);
  const [size,setSize]=useState("")
  const handleImage = (value) => {
    setImage(data && data.productdetails.images[value].url);
  };
  const handleProductQuantity = (quantity) => {
    if (quantity >= 1) {
      setProductQuantity(quantity);
    }
  };

  
  useEffect(() => {
    if (addToCartRes && addToCartRes.success) {
      toast.success(addToCartRes.message);
    }
    if (isError) {
      console.log(error)
      toast.error(error.data.message);
    }
  }, [addToCartRes, error, isError]);

  useEffect(() => {
    setImage(data && data.productdetails.images[0].url);
  }, [data]);

  const handleAddToCart = async (productId) => {
    if(size.length==0){
      toast.error("Please select size")
    }else{
      await addToCart({ productId, productQuantity,size });
    }
   
  };


  return isLoading ? (
    <Loader />
  ) : (
    <>
    <Navigation/>
      <div className="container-5">
        <div className="container-5-1">
          <div className="container-5-1-1">
            {data &&
              data.productdetails.images.map((value, idx) => {
                return (
                  <div key={value}>
                    <img
                      src={value.url}
                      alt=""
                      onMouseOver={() => handleImage(idx)}
                    />
                  </div>
                );
              })}
          </div>
          <div className="container-5-1-2">
            <img src={image && image} alt="productImage" />
          </div>
        </div>
        <div className="container-5-2">
          <div className="container-5-2-1">
            <h2>{data && data.productdetails.name}</h2>
          </div>
          <div className="container-5-2-2">
            <div className="rating">
              {(() => {
                const starsFilled = new Array(
                  data && data.productdetails.ratings
                ).fill(0);
                const starsEmpty = new Array(
                  data && 5 - data.productdetails.ratings
                ).fill(0);

                return (
                  <>
                    {starsFilled.map((_, index) => (
                      <span key={index}>
                        <MdOutlineStarPurple500 />
                      </span>
                    ))}
                    {starsEmpty.map((_, index) => (
                      <span key={index}>
                        <MdOutlineStarPurple500 style={{ color: "white" }} />{" "}
                       
                      </span>
                    ))}
                  </>
                );
              })()}
            </div>
            <div>
              <span>{data && data.productdetails.numOfReviews}</span>
            </div>
          </div>
          <div className="container-5-2-3">
            <div className="product-description">
              {data && data.productdetails.description}
            </div>
            <div className="product-price">
              <p>Price: {data && data.productdetails.price}₹</p>
              <p>Stock: {data && data.productdetails.stock}</p>
            </div>
          </div>
          <div className="container-5-2-4">
            <button
              onClick={() => handleProductQuantity(productQuantity - 1)}
              disabled={productQuantity == 0 ? true : false}
            >
              -
            </button>
            <input type="number" readOnly value={productQuantity} />
            <button onClick={() => handleProductQuantity(productQuantity + 1)}>
              +
            </button>
          </div>
          <div className="container-5-2-5">
            {data &&
              data.productdetails.sizes.map((value) => (
                <div key={value}>
                  <label htmlFor={value}>{value}</label>
                  <input type="radio" id={value} name="size" value={value} onChange={(e)=>setSize(e.target.value)}/>
                </div>
              ))}
          </div>
          <div className="container-5-2-6">
            <button
              onClick={() => handleAddToCart(data.productdetails._id)}
              disabled={addToCartLoading ? true : false}
              style={{
                backgroundColor: addToCartLoading && "#1c481c",
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <UserReview data={data} />
      {/* <Similarproducts /> */}
    </>
  );
}

function UserReview({ data }) {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <div className="container-6">
      <div className="container-6-1">
        <div className="container-6-1-3">
          <span>Ratings & Reviews</span>

          {(() => {
            if (
              user._id &&
              data &&
              data.productdetails &&
              data.productdetails.reviews
            ) {
              const flag = data.productdetails.reviews.some(
                (value) => value.userId.toString() === user._id.toString()
              );

              if (flag) {
                dispatch(setReview(true));
                return (
                  <Link
                    to={`/productReview/${data && data.productdetails._id}`}
                  >
                    <span className="rate-button">Edit Review</span>
                  </Link>
                );
              } else {
                return (
                  <Link
                    to={`/productReview/${data && data.productdetails._id}`}
                  >
                    <span className="rate-button">Rate Product</span>
                  </Link>
                );
              }
            } else {
              return (
                <Link to={"/signin"}>
                  <span className="rate-button">Login to Review</span>
                </Link>
              );
            }
          })()}
        </div>
        <div className="container-6-1-1">
          <div>{data && data.productdetails.ratings}</div>

          <MdOutlineStarPurple500 color="yellow" />

          <div className="container-6-1-2">
            {data && data.productdetails.numOfReviews} Ratings & Reviews
          </div>
        </div>
      </div>

      <div>
        {data &&
          data.productdetails.reviews.map((value) => (
            <div className="container-6-2" key={value.title}>
              <div className="container-6-2-1">
                <span className="rating">
                  <span>{value.rating}</span>
                  <MdOutlineStarPurple500 />
                </span>
                <span className="title">{value.title}</span>
              </div>
              <div className="container-6-2-2">
                <div className="container-6-2-2-1">{value.comment}</div>
                <div className="container-6-2-2-2">
                  <IoMdCheckmark />
                  <div>{value.name}</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

function Similarproducts() {
  return (
    <div className="container-7">
      <div className="container-7-1">
        <span className="title">Similar Products</span>
      </div>
      <div className="container-7-2">
        {data &&
          data.map((value, index) => <Product info={value} key={index} />)}
      </div>
    </div>
  );
}
export default ProductDetail;
