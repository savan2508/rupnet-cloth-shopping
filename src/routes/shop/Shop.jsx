import { Route, Routes } from "react-router-dom";
import { CategoriesPreview } from "../categories-preview/CategoriesPreview";
import { Category } from "../category/Category";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategoriesStartAsync } from "../../store/categories/category.action";

export const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStartAsync(dispatch));
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
