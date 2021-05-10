import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FishPage from './components/FishPage/FishPage';
import Contact from './components/Contact/Contact';
import Faq from './components/Faq/Faq';
import { useStyles } from './style.js';
import Main from './components/Main/Main';
import './App.css';
import { ROUTES } from './constants';
import ScrollToTop from './components/ScrollToTop';

function App() {
    const classes = useStyles();

    return (
        <Router>
            <div className="App">
                <Header />
                <ScrollToTop />
                <div className={classes.wrapper}>
                    <Route exact path={ROUTES.HOME} component={Main} />
                    <Route path={ROUTES.MAIN} component={Main} />
                    <Route path={ROUTES.FISH_PAGE} component={FishPage} />
                    <Route path={ROUTES.CONTACT} component={Contact} />
                    <Route path={ROUTES.FAQ} component={Faq} />
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
