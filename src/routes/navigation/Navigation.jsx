import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import CrownLogo from "../../assets/logo/crown.svg";
import { UserContext } from "../../contexts/UserContext";
import "./navigation.styles.scss";
import { signOutUser } from "../../utils/firebase/firebase.utils";

export const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className={"navigation"}>
        <Link to={"/"} className={"logo-container"}>
          <img src={CrownLogo} alt="Shop Logo" className="logo" />
        </Link>
        <div className={"nav-links-container"}>
          <Link to={"/shop"} className={"nav-link"}>
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link to={"/authentication"} className={"nav-link"}>
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
