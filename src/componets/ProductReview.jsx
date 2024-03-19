import React, { useRef, useState } from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
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
  return (
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
                  <MdOutlineStarPurple500 />
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
            <input type="text" name="name" placeholder="Title" />
            <br />
            <textarea
              placeholder="Write your review here..."
              id="reviewText"
            ></textarea>
            <br />
            <button className="submit-rate">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductReview;
