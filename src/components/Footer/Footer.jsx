import React from 'react'
import Container from '@material-ui/core/Container'
import twitter from '../../assets/img/twitter.svg'
import facebook from '../../assets/img/facebook.svg'
import instagram from '../../assets/img/instagram.svg'
import telegram from '../../assets/img/telegram.svg'
import {useStyles} from "../../style.js"
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg" style={{display: 'flex', justifyContent: 'space-between', padding: 0}}>
                <div className={classes.footerSocials}>
                    <h2 className={classes.footerSocialsTitle}>Follow us</h2>
                    <a className={classes.footerSocialsItems} href="#">
                        <img src={twitter} alt="twitter"/>
                    </a>
                    <a className={classes.footerSocialsItems} href="#">
                        <img src={facebook} alt="facebook"/>
                    </a>
                    <a className={classes.footerSocialsItems} href="#">
                        <img src={instagram} alt="facebook"/>
                    </a>
                    <a className={classes.footerSocialsItems} href="#">
                        <img src={telegram} alt="telegram"/>
                    </a>
                </div>
                <div className={classes.footerNav}>
                    <ul className={classes.footerMenu}>
                        <li className={classes.footerMenuItems}>
                            <NavLink  to="/faq" className={classes.footerMenuItemsLink} href="#">
                                FAQ
                            </NavLink>
                        </li>
                        <li className={classes.footerMenuItems}>
                            <NavLink  to="/contact" className={classes.footerMenuItemsLink} href="#">
                                CONTACT
                            </NavLink>
                        </li>
                        <li className={classes.footerMenuItems}>
                            <a className={classes.footerMenuItemsLink} href="#">
                                TERMS
                            </a>
                        </li>
                        <li className={classes.footerMenuItems}>
                            <a className={classes.footerMenuItemsLink} href="#">
                                PRIVACY POLICY
                            </a>
                        </li>
                    </ul>
                    <form className={classes.footerForm}>
                        <label className={classes.footerFormLabel}>SUBSCRIBE TO <br/> OUR NEWSLETTER</label>
                        <input className={classes.footerFormInput} type="text" placeholder="EMAIL ADDRESS" />
                        <button className={classes.footerFormInputBtn} type="submit">Sign up</button>
                    </form>
                    <p className={classes.footerCopyRights}>© 2021 CRYPTOQUARIUM</p>
                </div>
                
            </Container>
        </footer>
    );
}

export default Footer;
