import React, { useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import BestGearSection from "./BestGearSection";
import ProductCategories from "./ProductCategories";
import { Includes, ProductsData, SingleProduct, Others, ItemInCart } from "../types/Types";

const Product = ({ productsData, cartItems, setCartItems }: ProductsData) => {
  const { slug } = useParams<{ slug: string }>();
  const history = useHistory();
  const [quantityValue, setQuantityValue] = useState<number>(1);

  //Go back handler
  const goBackHandle = () => {
    history.goBack();
  };

  //Find selected product
  const product: SingleProduct = productsData.find((ele: SingleProduct) => ele.slug === slug)!;

  //Add to cart
  const onAdd: Function = (productToAdd: SingleProduct, quantityValue: number) => {
    const existItem = cartItems.find((x: ItemInCart) => x.name === productToAdd.name);
    if (existItem) {
      setCartItems(
        cartItems.map((x: ItemInCart) =>
          x.name === productToAdd.name ? { ...existItem, qty: existItem.qty + 1 * quantityValue } : x
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          id: productToAdd.id,
          slug: productToAdd.slug,
          name: productToAdd.name,
          price: productToAdd.price,
          qty: 1 * quantityValue,
          image: productToAdd.image.mobile,
        },
      ]);
    }
    setQuantityValue(1);
  };

  //Increase quantity
  const increaseQty: any = () => {
    setQuantityValue(quantityValue + 1);
  };

  //Increase quantity
  const decreaseQty: any = () => {
    if (quantityValue === 1) {
      setQuantityValue(1);
    } else {
      setQuantityValue(quantityValue - 1);
    }
  };

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
          <div className="item item--margin-s item--prod-page">
            <img
              className="item__img"
              srcSet={`${product.image.mobile} 768w ,${product.image.tablet} 1190w,${product.image.desktop} 1600w `}
              alt="xx99-mark-two-headphones"
            />
            <div className="item-desc item-desc--prod-page">
              {product.new ? <div className="typo--overline typo--orange item-desc__overline">New product</div> : null}
              <h2 className="item-desc__title typo--black typo--h2">{product.name}</h2>
              <p className="item-desc__text typo-sub">{product.description}</p>
              <div className="item-desc__price typo--h6">
                $ {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </div>
              <div className="add-to-cart">
                <div className="quantity quantity--lg">
                  <button className="quantity__btn quantity__btn--lg" onClick={decreaseQty}>
                    -
                  </button>
                  <div className="quantity__value quantity__value--lg typo--h6">{quantityValue}</div>
                  <button className="quantity__btn quantity__btn--lg" onClick={increaseQty}>
                    +
                  </button>
                </div>

                <button className="cta cta--add" onClick={() => onAdd(product, quantityValue)}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="features-section">
            <div className="features">
              <h3 className="typo--h3">FEATURES</h3>
              <p className="features__text typo--common">{product.features}</p>
            </div>
            <div className="in-the-box">
              <h3 className="typo--h3">IN THE BOX</h3>
              <ul className="in-the-box__list">
                {product.includes.map((ele: Includes, i: number) => (
                  <li key={i} className="in-the-box__item">
                    <div className="typo--orange">{ele.quantity}x</div>
                    <div className="typo--common">{ele.item}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="gallery">
            <div className="gallery__wrapper">
              <img
                className="gallery__image"
                srcSet={`${product.gallery.first.mobile} 768w, ${product.gallery.first.tablet} 1190w,${product.gallery.first.desktop} 1600w`}
                alt=""
              />
              <img
                className="gallery__image gallery__image--2"
                srcSet={`${product.gallery.second.mobile} 768w, ${product.gallery.second.tablet} 1190w,${product.gallery.second.desktop} 1600w`}
                alt=""
              />
            </div>
            <img
              className="gallery__image gallery__image--3"
              srcSet={`${product.gallery.third.mobile} 768w, ${product.gallery.third.tablet} 1190w,${product.gallery.third.desktop} 1600w`}
              alt=""
            />
          </div>
          <div className="others-wrapper">
            <h3 className="others-wrapper__title typo--h3">YOU MAY ALSO LIKE</h3>
            <div className="others">
              {product.others.map((p: Others, i: number) => (
                <div key={i} className="others__item">
                  <img
                    className="others__img"
                    srcSet={`${p.image.mobile} 768w, ${p.image.tablet} 1190w, ${p.image.desktop} 1600w `}
                    alt=""
                  />
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
