import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
// import axios from 'axios'
import Data from '../../FishData.js';

import { useStyles } from '../../style.js';
import viewIcon from '../../assets/img/view-icon.png';
import sortIcon from '../../assets/img/sort-icon.png';
import { useAppState } from '../../app-state';
import { log } from '../../util/helpers';

const Main = () => {
    const { state, actions } = useAppState();

    useEffect(() => {
        const { nftContract } = state;
        if (!nftContract) {
            log('No nft instance!');
            return;
        }

        nftContract.methods
            .totalSupply()
            .call()
            .then((res) => {
                log('totalSupply: ', res);
            })
            .catch((err) => {
                log('totalSupply err: ', err);
            });
    }, [state.nftContract]);

    useEffect(() => {
        const { nftContract, selectedAccountAddress } = state;
        if (!nftContract || !selectedAccountAddress) {
            log('No address!');
            return;
        }

        nftContract.methods
            .balanceOf(selectedAccountAddress)
            .call()
            .then((res) => {
                log('balanceOf: ', res);
            })
            .catch((err) => {
                log('balanceOf err: ', err);
            });
    }, [state.selectedAccountAddress, state.nftContract]);

    const classes = useStyles();

    const [term, setTerm] = useState('');
    const [local, setLocal] = useState(Data);

    const searchClick = (event) => {
        event.preventDefault();
        setLocal(Data.filter((fish) => fish.name.toLowerCase().includes(term.toLowerCase())));
    };

    return (
        <main className={classes.main}>
            <div className={classes.mainBar}>
                <Container
                    maxWidth="lg"
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: 0,
                    }}
                >
                    <div className={classes.mainBarLeft}>
                        <a className={classes.mainBarItem} href="#">
                            <img className={classes.mainBarItemImg} src={sortIcon} alt="sort" />
                        </a>
                        <a className={classes.mainBarItem} href="#">
                            <img img className={classes.mainBarItemImg} src={viewIcon} alt="view" />
                        </a>
                        <form className={classes.mainForm}>
                            <input
                                onChange={(e) => setTerm(e.target.value)}
                                value={term}
                                className={classes.mainFormInput}
                                type="text"
                                list="search"
                                name="search"
                                placeholder="SEARCH BY ARTISTS & AQUATIC CREATURES"
                                autocomplete="off"
                            />
                            <button onClick={searchClick} className={classes.mainFormBtn} type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                    <div className={classes.mainBarRight}>
                        {/* <form className={classes.mainForm}>
                            <label className={classes.mainFormLabel}>SORT BY</label>
                            <input className={classes.mainFormInputRight} type="text" list="sort" name="sort" placeholder="LISTING DATE (NEWEST)" />
                            <datalist id="sort">
                            </datalist>
                        </form> */}
                    </div>
                </Container>
            </div>
            <Container maxWidth="lg">
                <div className={classes.fishMarket}>
                    {local.map(({ name, url, price, id, animation }) => {
                        return (
                            <NavLink to={`/fishpage/${id}`} key={id} className={classes.mainFishes}>
                                <div className={classes.mainFishesBlock}>
                                    <div className={classes.mainFishesBlockImg}>
                                        <img className={classes[animation]} src={url} alt="fish" />
                                    </div>
                                    <h2 className={classes.mainFishesTitle}>{name}</h2>
                                    <p className={classes.mainFishesTitleText}>001/100 EDITION</p>
                                    <p className={classes.mainFishesPriceText}>LOWEST ASK</p>
                                    <h2 className={classes.mainFishesPriceTitle}>USD ${price}</h2>
                                    <p className={classes.mainFishesPriceText}>100000 LISTINGS</p>
                                </div>
                            </NavLink>
                        );
                    })}
                </div>
            </Container>
        </main>
    );
};

export default Main;
