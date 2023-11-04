import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import {
  CartItems,
  CartDropDownComponent,
  EmptyMessage,
} from "./cart-dropdown.styles";
import { Button } from "../button/Button";
import { CartItem } from "../cart-item/CartItem";
import { useNavigate } from "react-router-dom";

export const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropDownComponent>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is Empty</EmptyMessage>
        )}
      </CartItems>

      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropDownComponent>
  );
};
