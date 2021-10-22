import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Review from "./components/OrderReview/OrderReview";
import NotMatch from "./components/NotMatch/NotMatch";
import Inventory from "./components/Inventory/Inventory";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>

          <Route path="/review">
            <Review />
          </Route>
          <Route path="/inventory">
            <Inventory />
          </Route>

          <Route exact path="/">
            <Shop />
          </Route>

          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
