import React from "react";
import BestGearSection from "./BestGearSection";
import ProductCategories from "./ProductCategories";
import { Link } from "react-router-dom";

// type HeadphonesProps = {
//   productsData: Array<Object>;
// };

const Headphones = () => {
  return (
    <>
      <div className="headphones-header">
        <div className="headphones-header__content">
          <h2 className="typo--h2">Headphones</h2>
        </div>
      </div>
      <div className="headphones-main">
        <div className="item">
          <img
            className="item__img"
            src="./assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"
            alt="xx99-mark-two-headphones"
          />
          <div className="item-desc">
            <div className="typo--overline typo--orange item-desc__overline">New product</div>
            <h2 className="item-desc__title typo--black typo--h2">ZZ99 Mark II Headphones</h2>
            <p className="item-desc__text typo-sub">
              The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone
              experience by reproducing the balanced depth and precision of studio-quality sound.
            </p>
            <Link to="/product/1" style={{ textDecoration: "none" }}>
              <button className="cta">See product</button>
            </Link>
            <Link to="/product/2" style={{ textDecoration: "none" }}>
              <button className="cta">See product</button>
            </Link>
            <Link to="/product/3" style={{ textDecoration: "none" }}>
              <button className="cta">See product</button>
            </Link>
          </div>
        </div>
        <div className="item item--left">
          <img
            className="item__img item__img--left"
            src="./assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"
            alt="xx99-mark-two-headphones"
          />
          <div className="item-desc">
            <h2 className="item-desc__title typo--black typo--h2">ZZ99 Mark I Headphones</h2>
            <p className="item-desc__text typo-sub">
              As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio
              reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.
            </p>
            <button className="cta">See product</button>
          </div>
        </div>
        <div className="item">
          <img
            className="item__img"
            src="./assets/product-xx59-headphones/desktop/image-product.jpg"
            alt="xx99-mark-two-headphones"
          />
          <div className="item-desc">
            <p className="item-desc__title typo--black typo--h2">
              XX59 <br />
              Headphones
            </p>
            <p className="item-desc__text typo-sub">
              Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The
              stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
            </p>
            <button className="cta">See product</button>
          </div>
        </div>
      </div>

      <ProductCategories />
      <BestGearSection />
    </>
  );
};

export default Headphones;
