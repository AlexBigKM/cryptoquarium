import React, { useEffect, useState } from 'react';
import { useAppState } from '../../app-state';
import { NavLink } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { WEBURL, NETWORK_TYPE } from '../../constants';
import {useStyles} from "../../style.js"

import logo from '../../assets/img/logo.svg'

const Header = () => {
    const { state, actions } = useAppState();
    const [metaMaskCheck, setMetaMaskCheck] = useState(false);

    const classes = useStyles();

    useEffect(() => {
        if (state.selectedAccountAddress === null) {
            setMetaMaskCheck(true)
        } else {
            setMetaMaskCheck(false)
        }
    }, [state.selectedAccountAddress])

    return (
        
        <header className={classes.header}>
            <Container maxWidth="lg" style={{display: 'flex', padding: 0}}>
            <div className={classes.headerLogo}>
                <img className={classes.headerLogo} src={logo} />
            </div>
            <nav className={classes.headerMenu}>
                <ul className={classes.headerMenuItem}>
                    <li className={classes.headerMenuItems}>
                        <NavLink  to="/main">MARKETPLACE</NavLink>
                    </li>
                    <li className={classes.headerMenuItems}>
                        <NavLink  to="/faq">FAQ</NavLink>
                    </li>
                    <li className={classes.headerMenuItems}>
                        <NavLink  to="/contact">CONTACT</NavLink>
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
                {
                    metaMaskCheck ?
                    <span style={{color: '#fff', fontSize: '17px', textTransform: 'uppercase'}}
                    >Please connect your <a href={WEBURL.METAMASKURL}>metamask</a> wallet</span> : null
                }
            <div className={classes.headerAuth}>

            </div>
            </Container>
        </header>
    );
}

export default Header;
