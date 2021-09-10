import React from "react";
import { useParams } from "react-router-dom";

type ProductProps = {
  productsData: Array<Object>;
};

type ProductParams = {
  id: string;
};

const Product = ({ productsData }: ProductProps) => {
  const { id } = useParams<ProductParams>();

  //Find selected product

  const product: any = productsData.find((ele: any) => ele.id === id);

  return (
    <div>
      {JSON.stringify(product)}
      <div>
        {productsData.map((ele: any, index: number) => (
          <div key={index}>{ele.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Product;
