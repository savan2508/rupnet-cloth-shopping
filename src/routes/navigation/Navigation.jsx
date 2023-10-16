import {Fragment} from "react";
import {Link, Outlet} from "react-router-dom";
import CrownLogo from "../../assets/logo/crown.svg";
import "./navigation.styles.scss";

export const Navigation = () => {
    return (
        <Fragment>
            <div className={"navigation"}>
                <Link to={"/"} className={"logo-container"}>
                     <img src={CrownLogo} alt="Shop Logo" className="logo" />
                </Link>
                <div className={"nav-links-container"}>
                    <Link to={'/shop'} className={'nav-link'}>Shop</Link>
                    <Link to={'/sign-in'} className={'nav-link'}>Sign In</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}