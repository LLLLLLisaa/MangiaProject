import React, { useState } from "react";
import "./Rating.css";

const Rating = ({ id }) => {
  const [hover, setHover] = useState(0);
  const [isRated, setIsRated] = useState(false);

  const postRating = async (ratingValue) => {
    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL + `/recipes/${id}/ratings`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            rating: ratingValue,
          }),
        }
      );

      if (response.ok) {
        console.log("Ok:", { id });
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="rating">
      <h2 className="rating-label">
        {isRated ? "Tack för ditt omdöme!" : "Lämna ett omdöme"}
      </h2>

      {!isRated && (
        <div>
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            const starClass =
              starValue <= hover ? "star selected" : "star unselected";
            return (
              <span
                key={starValue}
                className={starClass}
                onClick={() => {
                  postRating(starValue);
                  setIsRated(true);
                }}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(0)}
              >
                &#9733; {/*Star character*/}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Rating;
