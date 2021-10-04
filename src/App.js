import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  BrowserRouter, 
  Switch, 
  Route 
  } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import About from './Components/About Us/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
          
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
