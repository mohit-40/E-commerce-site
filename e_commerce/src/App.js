import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from 'react-redux'
import Home from "./Pages/Home/Home"
import ProductList from "./Pages/ProductList/ProductList"
import Product from "./Pages/Product/Product"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import Cart from "./Pages/Cart/Cart"
import axios from 'axios';
import { userRequest } from './requestMethod';
import jwtDecode from "jwt-decode"

function App() {

  const currentUserId= useSelector(state => state.user.currentUserId) 

  const refreshToken = async () => {
    try {
      const REFRESH_TOKEN = localStorage.getItem("refreshToken")
      const res = await axios.post("/auth/refresh/" + currentUserId, { refreshToken: REFRESH_TOKEN });
      localStorage.setItem("accessToken", res.data.accessToken)
      console.log("accesstoken updated")
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  
  userRequest.interceptors.request.use(
    async (config) => {
      const ACCESS_TOKEN = localStorage.getItem("accessToken") || ""
      config.headers["authorization"] = "Bearer " + ACCESS_TOKEN; 
      let currentDate = new Date();
      const decodedToken = jwtDecode(ACCESS_TOKEN);
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        const data = await refreshToken();
        config.headers["authorization"] = "Bearer " + data.accessToken;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );





  return (
    <Router>
      <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route exact path="/product-list"> <ProductList /> </Route>
        <Route exact path="/product-list/:category"> <ProductList /> </Route>
        <Route path="/product/:productId"> <Product /> </Route>
        <Route path="/register"> {currentUserId ? <Redirect to="/" /> : <Register />} </Route>
        <Route path="/login"> {currentUserId ? <Redirect to="/" /> : <Login />} </Route>
        <Route path="/cart"> <Cart /> </Route>
        <Route path="/error"> <h1> Some Error occur. Don't worry we are working on it.</h1> </Route>
        <Route path="/success"> <h1> your request is successfull ... </h1> </Route>
      </Switch>
    </Router>
  );
}

export default App;
