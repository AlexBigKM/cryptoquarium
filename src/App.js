import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import FishPage from './components/FishPage/FishPage'
import Contact from './components/Contact/Contact'
import Faq from './components/Faq/Faq'
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
            <Route exact path='/main' component={Main} />
            <Route path='/fishpage/:id' component={FishPage} />
            <Route path='/contact' component={Contact} />
            <Route path='/faq' component={Faq} />
          </div>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
