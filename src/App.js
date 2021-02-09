import './App.css';
import { Switch, Route, useRouteMatch } from 'react-router-dom'; 



import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home/Home';
import PokeDetails from './pages/PokeDetails/PokeDetails';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

function App() {

  const match = useRouteMatch();

  return (
    <div className="app">
      <div className="mb-3">
        <Header />
      </div>
      <div className="container-fluid">
        <Switch>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path={`${match.url}pokemon/:pokemonId`}>
            <PokeDetails />
          </Route>
          <Route exact path={match.url}>
            <Home />
          </Route>
        </Switch>
      </div>
      <div className="mb-3">
        <Footer />
      </div>
    </div>
  );
}

export default App;
