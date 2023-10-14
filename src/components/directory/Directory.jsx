import { CategoryItem } from "../catergory-items/CategoryItem";
import "./directory.styles.scss";

export const Directory = ({ categories }) => {
  return (
    <>
      <div className={"directory-container"}>
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </>
  );
};
