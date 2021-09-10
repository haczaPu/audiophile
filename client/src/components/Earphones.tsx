import React from "react";
import BestGearSection from "./BestGearSection";
import ProductCategories from "./ProductCategories";

const Earphones = () => {
  return (
    <>
      <div className="earphones-header">
        <div className="earphones-header__content">
          <h2 className="earphones-header__title">Earphones</h2>
        </div>
      </div>
      <div className="earphones-main">
        <div className="item">
          <img
            className="item__img"
            src="./assets/images/product-yx1-earphones/desktop/image-product.jpg"
            alt="xx99-mark-two-headphones"
          />
          <div className="item-desc">
            <div className="typo--overline typo--orange item-desc__overline">New product</div>
            <h2 className="item-desc__title typo--black typo--h2 ">
              YX1 <br /> WIRELESS EARPHONES
            </h2>
            <p className="item-desc__text typo-sub">
              Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy
              incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
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

export default Earphones;
