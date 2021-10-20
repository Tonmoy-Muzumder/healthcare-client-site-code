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
import PrivateRoute from './pages/Login/Login/PrivateRoute/PrivateRoute'
import AuthProvider from './contexts/AuthProvider';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
     <AuthProvider>
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

          <PrivateRoute path="/details/:serviceId">
          <Details></Details>
          </PrivateRoute>

          <PrivateRoute path ="/doctors">
            <Doctors></Doctors>
          </PrivateRoute>

          <PrivateRoute path="/shops">
            <Shops></Shops>
          </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="*">
          <NotFound></NotFound>
        </Route>
        
        </Switch>
        <Footer></Footer>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
