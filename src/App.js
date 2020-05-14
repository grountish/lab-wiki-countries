import React from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetailsPage from './components/CountryDetailsPage';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
   <Navbar />
   <div className="container">
   <CountriesList />

   <Route path="/:cca3" component={CountryDetailsPage} />
   </div>
   </Router>
    </div>
  );
}

export default App;
