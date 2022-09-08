import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import AllProducts from "./components/AllProducts";
import Cart from "./components/Cart";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <AllProducts />
                </Route>
                <Route exact path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
