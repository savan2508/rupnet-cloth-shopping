import {Routes, Route} from "react-router-dom";
import "./categories.styles.scss";
import "./components/catergory-items/CategoryItem";
import { Home } from "./routes/home/Home";
import {Navigation} from "./routes/navigation/Navigation";
import {SignIn} from "./routes/sign-in/SignIn";

const Shop = () => {
    return <h1>This is shopping</h1>
}

const App = () => {
  return (
    <Routes>
        <Route path={'/'} element={<Navigation/>}>
            <Route index element={<Home />} />
            <Route path={"shop"} element={<Shop />} />
            <Route path={"sign-in"} element={<SignIn/>} />
        </Route>
    </Routes>
  );
};

export default App;
