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

export type CartProps = {
  setCartIsOpen: any;
  forwardedRef: any;
  cartItems: Array<ItemInCart>;
  removeAllHandler: any;
};

export type NavProps = {
  cartIsOpen: boolean;
  setCartIsOpen: any;
  innerRef: any;
  handleClickOutside: any;
  handleClickInside: any;
  cartItems: Array<ItemInCart>;
  removeAllHandler: any;
};
