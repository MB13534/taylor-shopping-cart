import { useState } from "react";

import "./ImageCarousel.css";

const ImageCarousel = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  //removes any image with '' as field
  if (images) {
    images = images.filter((image) => image !== "");
  }

  const changeImageLeft = () => {
    if (imageIndex === 0) {
      setImageIndex(images.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  };

  const changeImageRight = () => {
    if (imageIndex === images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  return (
    <div className="carousel">
      <div className="image-container">
        {!images ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <img src={images[imageIndex]} alt="Product Name" />
          </>
        )}
      </div>
      <div className="buttons-container">
        <button className="btn" onClick={() => changeImageLeft()}>
          Prev
        </button>
        <button className="btn" onClick={() => changeImageRight()}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
