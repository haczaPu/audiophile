import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import BestGearSection from "./BestGearSection";
import ProductCategories from "./ProductCategories";

type ProductsData = {
  productsData: Array<SingleProduct>;
};

type SingleProduct = {
  id: string;
  slug: string;
  name: string;
  image: { mobile: string; tablet: string; desktop: string };
  category: string;
  price: number;
  new: boolean;
  description: string;
};

const Product = ({ productsData }: ProductsData) => {
  const { id } = useParams<{ id: string }>();

  //Find selected product
  const product: SingleProduct = productsData.find((ele: SingleProduct) => ele.id === id)!;

  return (
    <>
      <div className="product-header"></div>
      {productsData.length ? (
        <div className="product-main">
          <div className="product-main__content">
            <Link to="/" style={{ textDecoration: "none" }} className="go-back">
              Go Back
            </Link>
            {/* <div
              style={{ color: "red" }}
              onClick={() => console.log(id, productsData[4].id === id, product.description)}
            >
              <div>
                {productsData.map((ele: any, index: number) => (
                  <div key={index}>{ele.name}</div>
                ))}
              </div>
              {id}
              <img src={product.image.desktop} alt="product" />
                </div> */}
          </div>

          <div className="item item--margin-s">
            <img
              className="item__img"
              src="/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"
              alt="xx99-mark-two-headphones"
            />
            <div className="item-desc">
              <div className="typo--overline typo--orange item-desc__overline">New product</div>
              <h2 className="item-desc__title typo--black typo--h2">ZZ99 Mark II Headphones</h2>
              <p className="item-desc__text typo-sub">
                The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone
                experience by reproducing the balanced depth and precision of studio-quality sound.
              </p>
              <div className="item-desc__price typo--h6">$ 2,999</div>

              <div className="add-to-cart">
                <div className="quantity quantity--lg">
                  <button className="quantity__btn quantity__btn--lg">+</button>
                  <div className="quantity__value quantity__value--lg typo--h6">1</div>
                  <button className="quantity__btn quantity__btn--lg">-</button>
                </div>

                <Link to="/product/1" style={{ textDecoration: "none" }}>
                  <button className="cta">Add to cart</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="features-section">
            <div className="features">
              <h3 className="typo--h3">FEATURES</h3>
              <p className="features__text typo--common">
                Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort
                for those who like to enjoy endless listening. It includes intuitive controls designed for any
                situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and
                pause features ensure that you’ll never miss a beat.
              </p>
              <p className="features__text typo--common">
                The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world
                on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when
                you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark
                II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.
              </p>
            </div>
            <div className="in-the-box">
              <h3 className="typo--h3">IN THE BOX</h3>
              <ul className="in-the-box__list">
                <li className="in-the-box__item">
                  <div className="typo--orange">1x</div>
                  <div className="typo--common">Headphone Unit</div>
                </li>
                <li className="in-the-box__item">
                  <div className="typo--orange">2x</div>
                  <div className="typo--common">Replacement Earcups</div>
                </li>
                <li className="in-the-box__item">
                  <div className="typo--orange">1x</div>
                  <div className="typo--common">User Manual</div>
                </li>
                <li className="in-the-box__item">
                  <div className="typo--orange">1x</div>
                  <div className="typo--common">3.5mm 5m Audio Cable</div>
                </li>
                <li className="in-the-box__item">
                  <div className="typo--orange">1x</div>
                  <div className="typo--common">Travel Bag</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="gallery">
            <img
              className="gallery__image"
              src="/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg"
              alt=""
            />
            <img
              className="gallery__image gallery__image--2"
              src="/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg"
              alt=""
            />
            <img
              className="gallery__image gallery__image--3"
              src="/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"
              alt=""
            />
          </div>
        </div>
      ) : null}

      <ProductCategories />
      <BestGearSection />
    </>
  );
};

export default Product;
