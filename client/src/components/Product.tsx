import React from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import BestGearSection from "./BestGearSection";
import ProductCategories from "./ProductCategories";

type ProductsData = {
  productsData: Array<SingleProduct>;
};

type Includes = {
  quantity: number;
  item: string;
};

type Others = {
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

type SingleProduct = {
  id: number;
  slug: string;
  name: string;
  image: { mobile: string; tablet: string; desktop: string };
  category: string;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: Array<Includes>;
  gallery: {
    first: { mobile: string; tablet: string; desktop: string };
    second: { mobile: string; tablet: string; desktop: string };
    third: { mobile: string; tablet: string; desktop: string };
  };
  others: Array<Others>;
};

const Product = ({ productsData }: ProductsData) => {
  const { slug } = useParams<{ slug: string }>();
  const history = useHistory();

  //Go back handler
  const goBackHandle = () => {
    history.goBack();
  };

  //Find selected product
  const product: SingleProduct = productsData.find((ele: SingleProduct) => ele.slug === slug)!;

  return (
    <>
      <div className="product-header"></div>
      {productsData.length ? (
        <div className="product-main">
          <div className="product-main__content">
            <button className="go-back" onClick={goBackHandle}>
              Go Back
            </button>
          </div>
          <div className="item item--margin-s">
            <img className="item__img" src={product.image.desktop} alt="xx99-mark-two-headphones" />
            <div className="item-desc">
              {product.new ? <div className="typo--overline typo--orange item-desc__overline">New product</div> : null}
              <h2 className="item-desc__title typo--black typo--h2">{product.name}</h2>
              <p className="item-desc__text typo-sub">{product.description}</p>
              <div className="item-desc__price typo--h6">
                $ {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </div>
              <div className="add-to-cart">
                <div className="quantity quantity--lg">
                  <button className="quantity__btn quantity__btn--lg">+</button>
                  <div className="quantity__value quantity__value--lg typo--h6">1</div>
                  <button className="quantity__btn quantity__btn--lg">-</button>
                </div>

                <button className="cta">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="features-section">
            <div className="features">
              <h3 className="typo--h3">FEATURES</h3>
              <p className="features__text typo--common">{product.features}</p>
              {/* <p className="features__text typo--common">
                The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world
                on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when
                you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark
                II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.
              </p> */}
            </div>
            <div className="in-the-box">
              <h3 className="typo--h3">IN THE BOX</h3>
              <ul className="in-the-box__list">
                {product.includes.map((ele: Includes) => (
                  <li className="in-the-box__item">
                    <div className="typo--orange">{ele.quantity}x</div>
                    <div className="typo--common">{ele.item}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="gallery">
            <img className="gallery__image" src={product.gallery.first.desktop} alt="" />
            <img className="gallery__image gallery__image--2" src={product.gallery.second.desktop} alt="" />
            <img className="gallery__image gallery__image--3" src={product.gallery.third.desktop} alt="" />
          </div>
          <div className="others-wrapper">
            <h3 className="others-wrapper__title typo--h3">YOU MAY ALSO LIKE</h3>
            <div className="others">
              {product.others.map((p: Others) => (
                <div className="others__item">
                  <img className="others__img" src={p.image.desktop} alt="" />
                  <h5 className="typo--h5">{p.name}</h5>
                  <Link to={`/product/${p.slug}`} style={{ textDecoration: "none" }}>
                    <button className="cta">See product</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <ProductCategories />
      <BestGearSection />
    </>
  );
};

export default Product;
