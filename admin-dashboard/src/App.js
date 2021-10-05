import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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

const Container = styled.div``
const MainSection = styled.div` 
		display: flex;
		.other{ 
			flex:4;
		}
`

function App() {
   return (
      <Router>
      
      <Container>
            <Topbar />
            <MainSection>
               <Sidebar />
               <div className="other" >

                  <Switch>
                     <Route exact path="/"> <Home /> </Route>
                     <Route exact path="/users"> <UserList /> </Route>
                     <Route exact path="/productList"> <ProductList /> </Route>
                     <Route exact path="/user/:userId"> <User /> </Route>
                     <Route exact path="/product/:productId"> <Product /> </Route>
                     <Route exact path="/createUser"> <CreateUser /> </Route>
                     <Route exact path="/createProduct"> <CreateProduct /> </Route>
                     <Route exact path="/transaction"> <Transaction /> </Route>
                  </Switch>


               </div>
            </MainSection>
         </Container>
      </Router>

   );
}

export default App;
