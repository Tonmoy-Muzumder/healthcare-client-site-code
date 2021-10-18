import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Shared/Header/Header'
import Footer from './pages/Shared/Footer/Footer'
import Home from './pages/Home/Home/Home';
import Services from './pages/Home/Services/Services';
import Doctors from './pages/Doctors/Doctors/Doctors';
import Shops from './pages/Shop/Shops/Shops'
import Details from './pages/Details/Details/Details';
import Login from './pages/Login/Login/Login'
import Register from './pages/Login/Register/Register';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
     <Router>
       <Header></Header>
        <Switch>
          <Route exact path="/">
             <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/details/:serviceId">
          <Details></Details>
          </Route>
          <Route path ="/doctors">
            <Doctors></Doctors>
          </Route>
          <Route path="/shops">
            <Shops></Shops>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>

        <Route path="*">
          <NotFound></NotFound>
        </Route>
        </Switch>
        <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
