import "./ProductScreen.css";

const ProductScreen = () => {
  return (
    <div className="productscreen">
      <div className="productscreen__left">
        <div className="left__image">
          <img
            src="https://di2ponv0v5otw.cloudfront.net/posts/2021/01/17/60049f86ff8304435db7b04d/m_60049fe2045e39c31e8afcd9.jpg"
            alt="Product Name"
          />
        </div>

        <div className="left__info">
          <p className="left__name">Product 1</p>
          <p className="left__price">$420.19</p>
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
            Quantity
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
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
