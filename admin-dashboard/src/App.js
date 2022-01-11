import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Topbar from './Component/Topbar/Topbar'
import Sidebar from './Component/Sidebar/Sidebar'
import Home from './Pages/Home/Home'
import UserList from './Pages/UserList/UserList'
import User from './Pages/User/User'
import Product from './Pages/Product/Product'
import CreateUser from './Pages/CreateUser/CreateUser'
import CreateProduct from './Pages/CreateProduct/CreateProduct'
import ProductList from './Pages/ProductList/ProductList'
import styled from 'styled-components'
import Transaction from './Pages/Transaction/Transaction';
import Login from './Pages/Login.jsx/Login';
import axios from "axios"
import {useSelector} from "react-redux"
import { userRequest } from './requestMethod';
import jwtDecode from "jwt-decode"
import OrderDetail from './Pages/OrderDetail/OrderDetail';
import CancelRequest from './Pages/CancelRequest/CancelRequest';


const Container = styled.div``
const MainSection = styled.div` 
		display: flex;
		.other{ 
			flex:4;
		}
`

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
      
      <Container>
            <Topbar />
            <MainSection>
               <Sidebar />
               <div className="other" >

                  <Switch>
                     <Route exact path="/"> {currentUserId ?  <Home/> :<Redirect to="/login" />} </Route>
                     <Route exact path="/users">{currentUserId ?  <UserList />:<Redirect to="/login" />}</Route>
                     <Route exact path="/productList"> {currentUserId ? <ProductList />: <Redirect to="/login" /> } </Route>
                     <Route exact path="/user/:userId"> {currentUserId ? <User />:<Redirect to="/login" /> } </Route>
                     <Route exact path="/product/:productId"> {currentUserId ? <Product /> :<Redirect to="/login" /> } </Route>
                     <Route exact path="/product/:productId"> {currentUserId ? <Product /> :<Redirect to="/login" /> } </Route>
                     <Route exact path="/order/:orderId"> {currentUserId ? <OrderDetail /> :<Redirect to="/login" /> } </Route>
                     <Route exact path="/createUser"> {currentUserId ? <CreateUser /> :<Redirect to="/" /> } </Route>
                     <Route exact path="/login"> {currentUserId ? <Home />:<Login /> } </Route>
                     <Route exact path="/createProduct"> {currentUserId ? <CreateProduct />:<Redirect to="/login" /> } </Route>
                     <Route exact path="/transaction">{currentUserId ? <Transaction /> :<Redirect to="/login" /> }  </Route>
                     <Route exact path="/cancelRequest">{currentUserId ? <CancelRequest /> :<Redirect to="/login" /> }  </Route>
                  </Switch>

               </div>
            </MainSection>
         </Container>
      </Router>

   );
}

export default App;
