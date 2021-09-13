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
            <div
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
            </div>
          </div>
          <div>{product.description}</div>
        </div>
      ) : null}

      <ProductCategories />
      <BestGearSection />
    </>
  );
};

export default Product;
