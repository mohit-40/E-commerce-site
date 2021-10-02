import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Pages/Home/Home"
import ProductList from "./Pages/ProductList/ProductList"

function App() {
  return ( 
      <Router>
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route exact path="/product-list"> <ProductList /> </Route>
        </Switch>
      </Router> 
  );
}

export default App;
