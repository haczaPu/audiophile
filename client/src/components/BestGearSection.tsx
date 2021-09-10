import React from "react";

const BestGearSection = () => {
  return (
    <section className="best-gear">
      <div className="best-gear__wrapper">
        <div className="best-gear__desc">
          <h2 className="best-gear__title">
            Bringing you the <div className="best-gear__title--orange">best</div> audio gear
          </h2>
          <p className="best-gear__text">
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones,
            speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you
            to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic
            people who make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <img className="best-gear__img" src="./assets/images/shared/desktop/image-best-gear.jpg" alt="best-gear" />
      </div>
    </section>
  );
};

export default BestGearSection;
