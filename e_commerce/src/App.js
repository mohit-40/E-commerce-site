import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Pages/Home/Home"
import ProductList from "./Pages/ProductList/ProductList"
import Product from "./Pages/Product/Product"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import Cart from "./Pages/Cart/Cart"

function App() {
  return ( 
      <Router>
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route exact path="/product-list"> <ProductList /> </Route>
          <Route exact path="/product"> <Product /> </Route>
          <Route exact path="/register"> <Register /> </Route>
          <Route exact path="/login"> <Login /> </Route>
          <Route exact path="/cart"> <Cart /> </Route>
        </Switch>
      </Router> 
  );
}

export default App;
