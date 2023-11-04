import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-Item.styles";

export const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <>
      <DirectoryItemContainer>
        <BackgroundImage imageUrl={imageUrl} />
        <Body className={"body"}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Body>
      </DirectoryItemContainer>
    </>
  );
};
