import React, { useEffect, useState } from 'react';
import { useAppState } from '../../app-state';
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { NavLink } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { WEBURL, NETWORK_TYPE } from '../../constants';
import {useStyles} from "../../style.js"

import logo from '../../assets/img/logo.svg'

const Header = () => {
    const { state, actions } = useAppState();
    const [metaMaskCheck, setMetaMaskCheck] = useState(false);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    useEffect(() => {
        if (state.selectedAccountAddress === null) {
            setMetaMaskCheck(true)
        } else {
            setMetaMaskCheck(false)
        }
    }, [state.selectedAccountAddress])


    const toggleBtn = () => {
        setOpen(!open);
    }

    // const handleClick  = () => {
    //     setOpen((prev) => !prev);
    // };
    //
    // const handleClickAway  = () => {
    //     setOpen(false);
    // };

    return (
        <>
        {/*<ClickAwayListener onClickAway={handleClickAway }>*/}
            <div onClick={toggleBtn} className={classes.burgerMenuBtn}>
                <span className={classes.headerBtnSpan}></span>
                <span className={classes.headerBtnSpan}></span>
                <span className={classes.headerBtnSpan}></span>
            </div>
            {/*{ open ? (*/}
            {/*    <ul className={classes.burgerBtnNavActive}>*/}
            {/*        <li className={classes.burgerBtnNavLi}>*/}
            {/*            <NavLink  to="/main">MARKETPLACE</NavLink>*/}
            {/*        </li>*/}
            {/*        <li className={classes.burgerBtnNavLi}>*/}
            {/*            <NavLink  to="/faq">FAQ</NavLink>*/}
            {/*        </li>*/}
            {/*        <li className={classes.burgerBtnNavLi}>*/}
            {/*            <NavLink  to="/contact">CONTACT</NavLink>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*) : null }*/}
            <ul className={open ? classes.burgerBtnNavActive : classes.burgerBtnNav}>
                <li className={classes.burgerBtnNavLi}>
                    <NavLink  to="/main">MARKETPLACE</NavLink>
                </li>
                <li className={classes.burgerBtnNavLi}>
                    <NavLink  to="/faq">FAQ</NavLink>
                </li>
                <li className={classes.burgerBtnNavLi}>
                    <NavLink  to="/contact">CONTACT</NavLink>
                </li>
            </ul>

        {/*</ClickAwayListener>*/}
        <header className={classes.header}>
            <Container fixed style={{display: 'flex', padding: 0}}>
                <div className={classes.headerLogo}>
                    <NavLink  to="/main">
                        <img className={classes.headerLogo} src={logo} />
                    </NavLink>
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
                        <span className={classes.headerMessage}>
                            Please connect your <a href={WEBURL.METAMASKURL}>metamask</a> wallet
                        </span> : null
                    }
                <div className={classes.headerAuth}>

                </div>
            </Container>
        </header>
        </>
    );
}

export default Header;
