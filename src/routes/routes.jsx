import { Switch, Route } from "react-router-dom";
// Junia Update
// Pages
import Tests from "../pages/Tests";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RegisterStore from "../pages/RegisterStore";
import Store from "../pages/Store";
import Cart from "../pages/Cart";
import Favorites from "../pages/Favorites";
import Profile from "../pages/Profile";
import StoreProfile from "../pages/StoreProfile";
import About from "../pages/About";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/login" component={Login} />

      <Route exact path="/register" component={Register} />

      <Route exact path="/register-store" component={RegisterStore} />

      <Route exact path="/dashboard" component={Dashboard} />

      <Route exact path="/favorites" component={Favorites} />

      <Route exact path="/store/:id" component={Store} />

      <Route exact path="/store/profile/:id" component={StoreProfile} />

      <Route exact path="/cart" component={Cart} />

      <Route exact path="/profile" component={Profile} />

      <Route exact path="/tests" component={Tests} />

      <Route exact path="/about" component={About} />
    </Switch>
  );
};
export default Routes;
