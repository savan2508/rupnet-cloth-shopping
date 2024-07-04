import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import CrownLogo from "../../assets/logo/crown.svg";
import { UserContext } from "../../contexts/UserContext";
import {
  LogoContainer,
  NavigationContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartIcon } from "../../components/cart-icon/CartIcon";
import { CartDropdown } from "../../components/cart-dropdown/CartDropdown";
import { CartContext } from "../../contexts/CartContext";
import { useSelector } from "react-redux";

export const Navigation = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to={"/"}>
          <img src={CrownLogo} alt="Shop Logo" className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to={"/shop"}>Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to={"/authentication"}>Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
