import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./cart-dropdown.styles.scss";
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
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>

      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};
