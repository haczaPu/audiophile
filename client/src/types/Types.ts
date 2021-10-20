import { Dispatch, SetStateAction } from "react";

export type ProductsData = {
  productsData: Array<SingleProduct>;
  cartItems: any;
  setCartItems: any;
};

export type SingleProduct = {
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
export type Includes = {
  quantity: number;
  item: string;
};

export type ItemInCart = {
  name: string;
  slug: string;
  price: number;
  qty: number;
  image: string;
};

export type Others = {
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

export type HomeMainProps = {
  device: string;
};

export type CartProps = {
  setCartIsOpen: Dispatch<SetStateAction<boolean>>;
  forwardedRef: any;
  cartItems: Array<ItemInCart>;
  setCartItems: any;
  removeAllHandler: any;
};

export type NavProps = {
  cartIsOpen: boolean;
  setCartIsOpen: Dispatch<SetStateAction<boolean>>;
  innerRef: any;
  handleClickOutside: any;
  handleClickInside: any;
  handleClickOutsideHam: any;
  handleClickInsideHam: any;
  cartItems: Array<ItemInCart>;
  setCartItems: any;
  removeAllHandler: any;
  width: number;
  setHamIsOpen: Dispatch<SetStateAction<boolean>>;
  hamIsOpen: boolean;
  innerHamRef: any;
};

export type MobileMenuProps = {
  setHamIsOpen: Dispatch<SetStateAction<boolean>>;
  hamIsOpen: boolean;
  forwardedHamRef: any;
  insideHamClick: any;
};

export type CheckoutProps = {
  emoneyPayment: boolean;
  setEmoneyPayment: Dispatch<SetStateAction<boolean>>;
  cartItems: Array<ItemInCart>;
  orderModalIsOpen: boolean;
  setOrderModalIsOpen: Dispatch<SetStateAction<boolean>>;
};

export type Order = {
  name: string;
  email: string;
  phonenumber: string;
  address: string;
  zipcode: string;
  city: string;
  country: string;
  paymentmethod: any;
  emoneynumber: number;
  emoneypin: number;
  errors: any;
};

export type OrderModalProps = {
  cartItems: Array<ItemInCart>;
  setOrderModalIsOpen: Dispatch<SetStateAction<boolean>>;
  grandtotal: number;
};
