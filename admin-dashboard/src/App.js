import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/"></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
