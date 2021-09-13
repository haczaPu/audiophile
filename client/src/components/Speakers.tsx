import React from "react";
import BestGearSection from "./BestGearSection";
import ProductCategories from "./ProductCategories";

const Speakers = () => {
  return (
    <>
      <div className="speakers-header">
        <div className="speakers-header__content">
          <h2 className="speakers-header__title">Speakers</h2>
        </div>
      </div>
      <div className="speakers-main">
        <div className="item">
          <img
            className="item__img"
            src="./assets/product-zx9-speaker/desktop/image-product.jpg"
            alt="xx99-mark-two-headphones"
          />
          <div className="item-desc">
            <div className="typo--overline typo--orange item-desc__overline">New product</div>
            <h2 className="item-desc__title typo--black typo--h2 ">
              ZX9 <br /> SPEAKER
            </h2>
            <p className="item-desc__text typo-sub">
              Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers
              truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.
            </p>
            <button className="cta">See product</button>
          </div>
        </div>
        <div className="item item--left">
          <img
            className="item__img item__img--left"
            src="./assets/product-zx7-speaker/desktop/image-product.jpg"
            alt="xx99-mark-two-headphones"
          />
          <div className="item-desc">
            <h2 className="item-desc__title typo--black typo--h2">
              ZX7 <br /> SPEAKER
            </h2>
            <p className="item-desc__text typo-sub">
              Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile
              components that represents the top of the line powered speakers for home or studio use.
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

export default Speakers;
