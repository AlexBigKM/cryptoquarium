import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '@material-ui/core/Container'
import {useStyles} from "../../style.js";

import logo from '../../assets/img/logo.png';

const Header = () => {
    const classes = useStyles();

    return (
        
        <header className={classes.header}>
            <Container maxWidth="lg" style={{display: 'flex', padding: 0}}>
            <div className={classes.headerLogo}>
                <img className={classes.headerLogo} src={logo} />
            </div>
            <nav className={classes.headerMenu}>
                <ul className={classes.headerMenuItem}>
                    <li className={classes.headerMenuItems}>
                        <NavLink to="/">RELEASE ARCHIVE</NavLink>
                    </li>
                    <li className={classes.headerMenuItems}>
                        <NavLink  to="/marketplace">MARKETPLACE</NavLink>
                    </li>
                    <li className={classes.headerMenuItems}>
                        <NavLink  to="/">FAQ</NavLink>
                    </li>
                    <li className={classes.headerMenuItems}>
                        <NavLink  to="/">CONTACT</NavLink>
                    </li>
                </ul>
                <ul className={classes.headerMenuAuth}>
                    <li className={classes.headerMenuItemsLi}>
                        <a className={classes.headerMenuItemsLink} href="#">SIGN UP</a>
                    </li>
                    <li className={classes.headerMenuItems}>
                        <a className={classes.headerMenuItemsLink} href="#">LOG IN</a>
                    </li>
                </ul>
            </nav>
            <div className={classes.headerAuth}>

            </div>
            </Container>
        </header>
    );
}

export default Header;
