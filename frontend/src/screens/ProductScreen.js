import "./ProductScreen.css";
import ImageCarousel from "../components/ImageCarousel";

const ProductScreen = () => {
  return (
    <div className="productscreen">
      <div className="productscreen__left">
        <div className="left__image">
          {/* <img
            src="https://di2ponv0v5otw.cloudfront.net/posts/2021/01/17/60049f86ff8304435db7b04d/m_60049fe2045e39c31e8afcd9.jpg"
            alt="Product Name"
          /> */}
          <ImageCarousel />
        </div>

        <div className="left__info">
          <p className="left__name">
            Hermès Paris Printed sweater dress grey size 36
          </p>
          <p className="left__brand">
            Hermès<span>NWT</span>
          </p>
          <div className="left__price-container">
            <p className="left__price">$385</p>
            <p className="left__size">
              Size<span>4</span>
            </p>
          </div>
          <p className="left__description">
            Hermès Paris Printed sweater dress grey size 36. Gorgeous grey
            cardigan sweater overlaps a stunning printed button front cotton
            dress in this gorgeous Hermès dress. Whimsical blue green and yellow
            pattern on both panels in front. Back of both pieces of this dress
            are sweater material.
            <br />
            <br />
            Sweater 100% virgin wool
            <br />
            <br />
            Underneath printed section 100% cotton
            <br />
            <br />
            Open to offers!
          </p>
          <div className="left__sex-container">
            <p className="left__sex">Women</p>
            <p className="left__category">Dresses</p>
            <p className="left__subCategory">SubCategory</p>
          </div>

          <div className="left__color-container">
            <p className="left__color">Gray</p>
            <p className="left__subColor">Blue</p>
          </div>
        </div>
      </div>
      <div className="productscreen__right">
        <div className="right__info">
          <p>
            Price: <span>$420.19</span>
          </p>
          <p>
            Status: <span>In Stock</span>
          </p>

          <p>
            <button type="button">Add to Cart</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
