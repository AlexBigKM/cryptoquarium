import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Marketplace from './components/Marketplace/Marketplace'
import {useStyles} from "./style.js";
import Main from './components/Main/Main'
import './App.css';

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className="App">
          <Header />
          <div className={classes.wrapper}>
            <Route exact path='/' component={Main} />
            <Route path='/marketplace' component={Marketplace} />
          </div>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
