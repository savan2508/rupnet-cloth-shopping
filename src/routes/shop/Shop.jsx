import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { ProductCard } from "../../components/product-card/ProductCard";
import "./shop.styles.scss";

export const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
