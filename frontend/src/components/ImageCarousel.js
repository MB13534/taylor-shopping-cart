import { useState } from "react";

import "./ImageCarousel.css";

const ImageCarousel = () => {
  //this is temp for testing insteading of pulling from DB
  const products = [
    {
      name: "Hermès Paris Printed sweater dress grey size 36",
      nwt: false,
      brand: "Hermès",
      price: 385,
      size: "4",
      description:
        "Hermès Paris Printed sweater dress grey size 36. Gorgeous grey cardigan sweater overlaps a stunning printed button front cotton dress in this gorgeous Hermès dress. Whimsical blue green and yellow pattern on both panels in front. Back of both pieces of this dress are sweater material.<br /><br />Sweater 100% virgin wool<br /><br />Underneath printed section 100% cotton<br /><br />Open to offers!",
      sex: "Women",
      category: "Dresses",
      // subCategory: '',
      color: "Gray",
      subColor: "Blue",
      countInStock: 1,
      images: [
        "https://di2ponv0v5otw.cloudfront.net/posts/2021/01/17/60049f86ff8304435db7b04d/m_60049fe2045e39c31e8afcd9.jpg",
        "https://di2ponv0v5otw.cloudfront.net/posts/2021/01/17/60049f86ff8304435db7b04d/m_60049fd7800f640683550783.jpg",
        "https://di2ponv0v5otw.cloudfront.net/posts/2021/01/17/60049f86ff8304435db7b04d/m_60049fd7074d24b539a555d5.jpg",
        "https://di2ponv0v5otw.cloudfront.net/posts/2021/01/17/60049f86ff8304435db7b04d/m_6004a5ae633cfcd14d0c8769.jpg",
        "https://di2ponv0v5otw.cloudfront.net/posts/2021/01/17/60049f86ff8304435db7b04d/m_60049fd9ffba94505589b0b2.jpg",
        "https://di2ponv0v5otw.cloudfront.net/posts/2021/01/17/60049f86ff8304435db7b04d/m_60049fda7f80d2c7d4dd851b.jpg",
        "https://di2ponv0v5otw.cloudfront.net/posts/2021/01/17/60049f86ff8304435db7b04d/m_60049fdb9c33787161411372.jpg",
        "https://di2ponv0v5otw.cloudfront.net/posts/2021/01/17/60049f86ff8304435db7b04d/m_60049fdcae766f5ab3508c24.jpg",
        "https://di2ponv0v5otw.cloudfront.net/posts/2021/01/17/60049f86ff8304435db7b04d/m_60049fdd93649fd237d4ea0c.jpg",
        "https://di2ponv0v5otw.cloudfront.net/posts/2021/01/17/60049f86ff8304435db7b04d/m_60049fdd463d4f37dbc32a04.jpg",
        "https://di2ponv0v5otw.cloudfront.net/posts/2021/01/17/60049f86ff8304435db7b04d/m_60049fde045e397a0d8afcc4.jpg",
        "https://di2ponv0v5otw.cloudfront.net/posts/2021/01/17/60049f86ff8304435db7b04d/m_60049fdfce1e876c9a982c70.jpg",
        "https://di2ponv0v5otw.cloudfront.net/posts/2021/01/17/60049f86ff8304435db7b04d/m_60049fe0ff7c5a9d53d71a20.jpg",
        "https://di2ponv0v5otw.cloudfront.net/posts/2021/01/17/60049f86ff8304435db7b04d/m_60049fe1074d24b539a55650.jpg",
        "https://di2ponv0v5otw.cloudfront.net/posts/2021/01/17/60049f86ff8304435db7b04d/m_60049fe39207867b4778b582.jpg",
        "https://di2ponv0v5otw.cloudfront.net/posts/2021/01/17/60049f86ff8304435db7b04d/m_60049fe43bad6d99599453a4.jpg",
      ],
    },
  ];

  const [imageIndex, setImageIndex] = useState(0);

  const { images } = products[0];

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
        <img src={images[imageIndex]} alt="Product Name" />
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
