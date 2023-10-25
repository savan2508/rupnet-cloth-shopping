import { createContext, useState } from "react";
import PRODUCT from "../shop-data-json/shop-data.json";

export const ProductsContext = createContext({
  product: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCT);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
