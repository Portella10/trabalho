// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SeriesDetails from './pages/SeriesDetails';
import CastMember from './pages/CastMember';
import ProductionCompany from './pages/ProductionCompany';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Sobre</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/series/:id" component={SeriesDetails} />
          <Route path="/cast-member/:id" component={CastMember} />
          <Route path="/production-company/:id" component={ProductionCompany} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
