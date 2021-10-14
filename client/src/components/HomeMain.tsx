import React from "react";
import { Link } from "react-router-dom";
import BestGearSection from "./BestGearSection";
import ProductCategories from "./ProductCategories";

const HomeMain = () => {
  return (
    <>
      <div className="home-header">
        <div className="home-header__content">
          <div className="product-desc product-desc--top">
            <div className="product-desc__overline typo--overline">New product</div>
            <h1 className="product-desc__title--p typo--h1">XX99 Mark II Headphones</h1>
            <p className="product-desc__text typo--sub">
              Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast
            </p>
            <Link to="/product/xx99-mark-two-headphones" style={{ textDecoration: "none" }}>
              <button className="cta">See product</button>
            </Link>
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
                srcSet="/assets/home/mobile/image-speaker-zx9.png 768w,/assets/home/tablet/image-speaker-zx9.png 1190w,/assets/home/desktop/image-speaker-zx9.png 1600w"
                alt="speaker-zx9"
              />
            </div>
            <div className="product-desc speaker-zx9__desc">
              <h1 className="product-desc__title product-desc__title--narr typo--h1">
                Zx9
                <br /> speaker
              </h1>
              <p className="product-desc__text typo--sub">
                Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
              </p>
              <Link to="/product/zx9-speaker" style={{ textDecoration: "none" }}>
                <button className="cta cta--black">See product</button>
              </Link>
            </div>
          </section>
          <section className="speaker-zx7">
            <div className="product-desc product-desc--to-left">
              <h4 className="product-desc__title  typo--black typo--h4">Zx7 speaker</h4>
              <Link to="/product/zx7-speaker" style={{ textDecoration: "none" }}>
                <button className="cta cta--outline ">See product</button>
              </Link>
            </div>
          </section>

          <section className="earphones-yx1">
            <img
              className="earphones-yx1__img"
              srcSet="/assets/home/mobile/image-earphones-yx1.jpg 768w, /assets/home/tablet/image-earphones-yx1.jpg 1190w, /assets/home/desktop/image-earphones-yx1.jpg 1600w"
              alt="earphones-yx1"
            />
            <div className="earphones-yx1__desc">
              <h4 className="product-desc__title typo--h4 typo--black">Yx1 earphones</h4>
              <Link to="/product/yx1-earphones" style={{ textDecoration: "none" }}>
                <button className="cta cta--outline">See product</button>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <BestGearSection />
    </>
  );
};

export default HomeMain;
