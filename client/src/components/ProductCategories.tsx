import React from "react";
import { Link } from "react-router-dom";

const ProductCategories = () => {
  return (
    <section className="product-categories">
      <div className="product-categories__wrapper">
        <Link to="/headphones" style={{ textDecoration: "none" }}>
          <div className="product-category">
            <img
              className="product-category__img"
              src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
              alt="category-thumbnail-headphones"
            />
            <h4 className="product-category__title">Headphones</h4>
            <button className="product-category__btn">
              <div className="product-category__shop">SHOP</div>
              <img
                className="product-category__arrow"
                src="/assets/shared/desktop/icon-arrow-right.svg"
                alt="arrow-right"
              />
            </button>
          </div>
        </Link>
        <Link to="/speakers" style={{ textDecoration: "none" }}>
          <div className="product-category">
            <img
              className="product-category__img"
              src="/assets/shared/desktop/image-category-thumbnail-Speakers.png"
              alt="category-thumbnail-headphones"
            />
            <h4 className="product-category__title">Speakers</h4>
            <button className="product-category__btn">
              <div className="product-category__shop">SHOP</div>
              <img
                className="product-category__arrow"
                src="/assets/shared/desktop/icon-arrow-right.svg"
                alt="arrow-right"
              />
            </button>
          </div>
        </Link>
        <Link to="/earphones" style={{ textDecoration: "none" }}>
          <div className="product-category">
            <img
              className="product-category__img"
              src="/assets/shared/desktop/image-category-thumbnail-Earphones.png"
              alt="category-thumbnail-headphones"
            />
            <h4 className="product-category__title">Earphones</h4>
            <button className="product-category__btn">
              <div className="product-category__shop">SHOP</div>
              <img
                className="product-category__arrow"
                src="/assets/shared/desktop/icon-arrow-right.svg"
                alt="arrow-right"
              />
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ProductCategories;
