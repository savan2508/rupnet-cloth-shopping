import { Route, Routes } from "react-router-dom";
import "./shop.styles.scss";
import { CategoriesPreview } from "../categories-preview/CategoriesPreview";
import { Category } from "../category/Category";

export const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
