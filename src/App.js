import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Review from "./components/OrderReview/OrderReview";
import NotMatch from "./components/NotMatch/NotMatch";
import Inventory from "./components/Inventory/Inventory";
import Register from "./components/Register/Register";
import initializeAuthentication from "./firebase/firebase.initialize";
import Login from "./components/Login/Login";
import AuthProvider from "./components/context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AddProduct from "./dashboard/AddProduct";

initializeAuthentication();

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/shop">
              <Shop />
            </Route>

            <Route path="/review">
              <Review />
            </Route>
            <Route path="/addProduct">
              <AddProduct />
            </Route>
            <PrivateRoute path="/inventory">
              <Inventory />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>

            <Route exact path="/">
              <Shop />
            </Route>

            <Route path="*">
              <NotMatch />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
