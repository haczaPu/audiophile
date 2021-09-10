import React from "react";
import BestGearSection from "./BestGearSection";
import ProductCategories from "./ProductCategories";

const HomeMain = () => {
  return (
    <>
      <div className="home-header">
        <div className="home-header__content">
          <div className="product-desc">
            <div className="product-desc__overline typo--overline">New product</div>
            <h1 className="product-desc__title--p typo--h1">XX99 Mark II Headphones</h1>
            <p className="product-desc__text typo--sub">
              Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast
            </p>
            <button className="cta">See product</button>
          </div>
        </div>
      </div>

      <div className="home-main">
        <div className="home-main__content">
          <ProductCategories />
          <section className="speaker-zx9">
            <div className="speaker-zx9__img-container">
              <img
                className="speaker-zx9__img"
                src="./assets/images/home/desktop/image-speaker-zx9.png"
                alt="speaker-zx9"
              />
            </div>
            <div className="product-desc speaker-zx9__desc">
              <h1 className="product-desc__title typo--h1">Zx9 speaker</h1>
              <p className="product-desc__text typo--sub">
                Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
              </p>
              <button className="cta cta--black">See product</button>
            </div>
          </section>
          <section className="speaker-zx7">
            <div className="product-desc">
              <h4 className="product-desc__title  typo--black typo--h4">Zx7 speaker</h4>
              <button className="cta cta--outline">See product</button>
            </div>
          </section>
          <section className="earphones-yx1">
            <img
              className="earphones-yx1__img"
              src="./assets/images/home/desktop/image-earphones-yx1.jpg"
              alt="earphones-yx1"
            />
            <div className="earphones-yx1__desc">
              <div className="product-desc">
                <h4 className="product-desc__title typo--h4 typo--black">Yx1 earphones</h4>
                <button className="cta cta--outline">See product</button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <BestGearSection />
    </>
  );
};

export default HomeMain;
