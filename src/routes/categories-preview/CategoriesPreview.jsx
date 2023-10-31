import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import { CategoryPreview } from "../../components/category-preview/CategoryPreview";

export const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};
