import React, { useEffect, useState } from 'react';
import { generatePath, NavLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import { useStyles } from '../../style.js';
import viewIcon from '../../assets/img/view-icon.png';
import sortIcon from '../../assets/img/sort-icon.png';
import { useAppState } from '../../app-state';
import { ROUTES } from '../../constants';
import { act } from '@testing-library/react';

const Main = () => {
    const { state, actions } = useAppState();

    const classes = useStyles();

    const [term, setTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState(false);
    const [fishData, setFishData] = useState([]);

    useEffect(() => {
        const data = term.length ? state.fishCards.filter((name) => name.fishName.toLowerCase().includes(term.toLowerCase())) : state.fishCards;
        const dataId = term.length ? state.fishCards.filter((num) => num.fishId.toLowerCase().includes(term.toLowerCase())) : state.fishCards;
        if (!parseInt(term)) {
            setFishData(data)
        } else {
            setFishData(dataId)
        }
    },[activeFilter, state])


    const searchClick = (event) => {
        event.preventDefault();
        setActiveFilter(!activeFilter);
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
                            <img className={classes.mainBarItemImg} src={viewIcon} alt="view" />
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
                                autoComplete="off"
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
                    {fishData.map((fish) => (
                        <NavLink
                            to={generatePath(ROUTES.FISH_PAGE, { id: fish.fishId })}
                            key={fish.fishId}
                            className={classes.mainFishes}
                        >
                            <div className={classes.mainFishesBlock}>
                                <div className={classes.mainFishesBlockImg}>
                                    <img
                                        className={classes[fish.animationClass]}
                                        src={fish.imgUrl}
                                        alt={fish.fishName}
                                    />
                                </div>
                                <h2 className={classes.mainFishesTitle}>{fish.fishName}</h2>
                                <p className={classes.mainFishesTitleText}>001/100 EDITION</p>
                                <p className={classes.mainFishesPriceText}>LOWEST ASK</p>
                                <h2 className={classes.mainFishesPriceTitle}>ETH {fish.priceEth}</h2>
                                {/* TODO: Should be soon! */}
                                {/*<h2 className={classes.mainFishesPriceTitle}>USD ${price}</h2>*/}
                                <p className={classes.mainFishesPriceText}>100000 LISTINGS</p>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </Container>
        </main>
    );
};

export default Main;
