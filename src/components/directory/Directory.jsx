import { DirectoryItem } from "../directory-items/DirectoryItem";
import "./directory.styles.scss";

export const Directory = ({ categories }) => {
  return (
    <>
      <div className={"directory-container"}>
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </div>
    </>
  );
};
