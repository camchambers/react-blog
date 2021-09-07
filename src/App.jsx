import React from 'react';
import HomePage from './pages/HomePage';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" component={HomePage} exact />
    </Router>
  );
}

export default App;
