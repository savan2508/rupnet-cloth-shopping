import { Routes, Route } from "react-router-dom";
import "./categories.styles.scss";
import "./components/directory-items/DirectoryItem";
import { Home } from "./routes/home/Home";
import { Navigation } from "./routes/navigation/Navigation";
import { Authentication } from "./routes/authentication/Authentication";
import { Shop } from "./routes/shop/Shop";
import { Checkout } from "./routes/checkout/Checkout";
import { useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { UserContext } from "./contexts/UserContext";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path={"/"} element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path={"shop/*"} element={<Shop />} />
        <Route path={"authentication"} element={<Authentication />} />
        <Route path={"checkout"} element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
