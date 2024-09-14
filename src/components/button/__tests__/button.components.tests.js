import { render, screen } from "@testing-library/react";
import { Button, BUTTON_TYPE_CLASSES } from "../Button";

describe("Button", () => {
  test("should render a button", () => {
    render(<Button />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveStyle(
      'font-family: "Open Sans Condensed",sans-serif',
    );
  });
  test("should render a google button when passed google button type", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.google} />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveStyle("background-color: rgb(53, 122, 232)");
  });

  test("should render inverted button when passed inverted button type", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted} />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveStyle("background-color: black");
  });
});
