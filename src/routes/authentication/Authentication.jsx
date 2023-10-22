import { SignUpForm } from "../../components/sign-up-form/SignUpForm";
import { SignInForm } from "../../components/sign-in-form/SignInForm";

import "./authentication.style.scss";

export const Authentication = () => {
  return (
    <div>
      <div className={"authentication-container"}>
        <SignInForm />
        <SignUpForm />
      </div>
    </div>
  );
};
