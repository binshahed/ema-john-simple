import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Review from "./components/Review/Review";
import NotMatch from "./components/NotMatch/NotMatch";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Shop />
          </Route>

          <Route path="/shop">
            <Shop />
          </Route>

          <Route path="/review">
            <Review />
          </Route>

          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
