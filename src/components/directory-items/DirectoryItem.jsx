import "./directory-Item.styles.scss";

export const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <>
      <div className={"directory-item-container"}>
        <div
          className={"background-image"}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className={"body"}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </>
  );
};
