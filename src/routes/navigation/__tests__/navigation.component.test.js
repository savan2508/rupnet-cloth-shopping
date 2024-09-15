import { screen } from "@testing-library/react";
import { Navigation } from "../Navigation";
import { renderWithProviders } from "../../../utils/test/test.utils";

describe("Navigation tests", () => {
  test("It should render a Sign In link if there is no currentUser", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null,
        },
      },
    });

    expect(screen.getByText("Sign In")).toBeInTheDocument();
  });

  test("It should not render Sign In if there is a currentUser", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });

    expect(screen.queryByText("Sign In")).toBeNull();
  });

  test("It should render Sign Out if there is a currentUser", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });

    expect(screen.getByText("Sign Out")).toBeInTheDocument();
  });

  test("It should render cart dropdown if isCartOpen is true", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: true,
          cartItems: [],
        },
      },
    });

    expect(screen.getByText("Your cart is Empty")).toBeInTheDocument();
  });

  test("It should not render a cart dropdown if isCartOpen is false", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: false,
          cartItems: [],
        },
      },
    });

    expect(screen.queryByText("Your cart is empty")).toBeNull();
  });
});
