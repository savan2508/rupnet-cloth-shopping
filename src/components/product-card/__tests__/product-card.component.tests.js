import { fireEvent, screen } from "@testing-library/react";

import { renderWithProviders } from "../../../utils/test/test.utils";
import ProductCard from "../ProductCard";

describe("Product Card tests", () => {
  test("it should add the product item when the ProductCard is clicked", async () => {
    const mockProduct = {
      id: 1,
      name: "item 1",
      price: 100,
      imageUrl: "item1.jpg",
      quantity: 1,
    };
    const { store } = renderWithProviders(
      <ProductCard product={mockProduct} />,
      {
        preloadedState: { cart: { cartItems: [] } },
      },
    );

    const addToCartButtonElement = screen.getByText(/add to cart/i);
    await fireEvent.click(addToCartButtonElement);

    expect(store.getState().cart.cartItems.length).toEqual(1);
  });
});
