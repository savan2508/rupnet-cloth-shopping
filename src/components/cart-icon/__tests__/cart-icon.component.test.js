import { screen } from "@testing-library/react";

import { renderWithProviders } from "../../../utils/test/test.utils";
import { CartIcon } from "../CartIcon";

describe("CArt Icon tests", () => {
  test("uses preloaded state to render", () => {
    const initialCartItems = [
      { id: 1, name: "item 1", price: 100, imageUrl: "item1.jpg", quantity: 1 },
    ];

    renderWithProviders(<CartIcon />, {
      preloadedState: { cart: { cartItems: initialCartItems } },
    });
    const cartIconElement = screen.getByText("1");
    expect(cartIconElement).toBeInTheDocument();
  });
});
