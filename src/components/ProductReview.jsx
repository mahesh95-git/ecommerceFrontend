import { useEffect, useRef, useState } from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { useProductReviewMutation } from "../redux/api/product";
import Loader from "./Loader";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
function ProductReview() {
  const rating = [
    {
      id: 1,
      name: "Very Bad",
    },
    {
      id: 2,
      name: "Bad",
    },
    {
      id: 3,
      name: "Good",
    },
    {
      id: 4,
      name: "Very Good",
    },
    {
      id: 5,
      name: "Excellent",
    },
  ];

  const rate = rating.map(() => useRef(null));
  const ratename = rating.map(() => useRef(null));
  const [finalRating, setfinalRating] = useState(null);
  const { user, isReview } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [ProductReview, { isLoading, data, isError, error }] =
    useProductReviewMutation();
  const [review, setReview] = useState({
    title: "",
    comment: "",
    rating: 0,
  });

  useEffect(() => {
    if (isReview) {
      (async () => {
        try {
          const valu = await axios.get(
            `http://localhost:4000/api/v1/reviews/${productId}`,
            {
              withCredentials: true,
            }
          );

          const index = valu.data.data.findIndex((val) => {
            return val.userId.toString() == user._id.toString();
          });
          const { title, comment, rating } = { ...valu.data.data[index] };

          setReview(() => {
            return {
              ...review,
              title,
              comment,
              rating,
            };
          });
          handleRating(rating - 1);
        } catch (error) {}
      })();
    }
  }, [isReview, location.pathname, user._id]);

  const handleRating = (index) => {
    if (rate[index].current) {
      ratename[index].current.classList.add("dis-block");
      for (let i = 0; i <= index; i++) {
        rate[i].current.classList.add("svg-color");
      }
    }
  };
  const handleRemove = (index) => {
    const currentRef = rate[index].current;
    if (currentRef) {
      for (let i = 0; i <= index; i++) {
        ratename[i].current.classList.remove("dis-block");
        rate[i].current.classList.remove("svg-color");
      }
    }
  };
  const handleaddRating = (index) => {
    setfinalRating((prev) => ({
      prev,
      rating: rating[index].id,
      name: rating[index].name,
    }));
    if (rate[index].current) {
      for (let i = 0; i <= index; i++) {
        rate[i].current.classList.add("svg1-color");
      }
      for (let i = rating.length - 1; i > index; i--) {
        rate[i].current.classList.remove("svg1-color");
      }
    }
  };
  if (data && data.success) {
    toast.success(data.message);
    navigate(-1);
  }
  if (isError) {
    toast.error(error && error.data.message);
  }

  const submitReview = async (e) => {
    e.preventDefault();
    await ProductReview({ review, productId });
  };
  return isLoading ? (
    <Loader />
  ) : (
    <div className="container-9">
      <div className="container-9-1">
        <h1>Ratings & Reviews</h1>
      </div>
      <div className="container-9-2">
        <div className="rating">
          <h3>Rating</h3>
          <div className="type">
            {rating.map((item, index) => (
              <div key={index}>
                <div className="name-rating" ref={ratename[index]}>
                  {item.name}
                </div>
                <div
                  ref={rate[index]}
                  onMouseOver={() => handleRating(index)}
                  onMouseOut={() => handleRemove(index)}
                  onClick={() => handleaddRating(index)}
                >
                  <MdOutlineStarPurple500
                    onClick={() => {
                      setReview({
                        ...review,
                        rating: index + 1,
                      });
                    }}
                  />
                </div>
              </div>
            ))}
            {finalRating ? (
              <div className="final-rating">{finalRating.name}</div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <hr />
        <div className="review">
          <form>
            <h3>Review</h3>
            <input
              type="text"
              name="name"
              value={review.title}
              placeholder="Title"
              onChange={(e) => {
                setReview({
                  ...review,
                  title: e.target.value,
                });
              }}
            />
            <br />
            <textarea
              placeholder="Write your review here..."
              id="reviewText"
              value={review.comment}
              onChange={(e) => {
                setReview({
                  ...review,
                  comment: e.target.value,
                });
              }}
            ></textarea>
            <br />
            <button className="submit-rate" onClick={submitReview}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductReview;
