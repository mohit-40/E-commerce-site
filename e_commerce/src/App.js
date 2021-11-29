import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Pages/Home/Home"
import ProductList from "./Pages/ProductList/ProductList"
import Product from "./Pages/Product/Product"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import Cart from "./Pages/Cart/Cart"

function App() {
  const user=true;
  return ( 
      <Router>
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route exact path="/product-list"> <ProductList /> </Route>
          <Route exact path="/product-list/:category"> <ProductList /> </Route>
          <Route path="/product/:productId"> <Product /> </Route>
          <Route path="/register"> {user? <Redirect to="/"/> : <Register />} </Route>
          <Route path="/login"> {user? <Redirect to="/"/> : <Login />} </Route>
          <Route path="/cart"> <Cart /> </Route>
          <Route path="/error"> <h1>Some Error occur. Don't worry we are working on it.</h1> </Route>
        </Switch>
      </Router> 
  );
}

export default App;
