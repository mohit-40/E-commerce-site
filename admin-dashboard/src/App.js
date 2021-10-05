import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home'
import UserList from './Pages/UserList/UserList'
import Topbar from './Component/Topbar/Topbar'
import Sidebar from './Component/Sidebar/Sidebar'
import styled from 'styled-components'

const Container = styled.div``
const MainSection = styled.div` 
		display: flex;
		.other{ 
			flex:4;
		}
`

function App() {
   return (
      <Container>
         <Topbar />
         <MainSection>
            <Sidebar />
            <div className="other" >

               <Router>
                  <Switch>
                     <Route exact path="/"> <Home /> </Route>
                     <Route exact path="/users"> <UserList /> </Route>
                  </Switch>
               </Router>


            </div>
         </MainSection>
      </Container>
   );
}

export default App;
