import React from 'react'
import Container from '@material-ui/core/Container'
import {useStyles} from "../../style.js"
import viewIcon from '../../assets/img/view-icon.png'
import sortIcon from '../../assets/img/sort-icon.png'
import fishOne from '../../assets/img/f1.png'
import fishTwo from '../../assets/img/f2.png'
import fishThree from '../../assets/img/f3.png'
import fishFour from '../../assets/img/f4.png'
import fishFive from '../../assets/img/f5.png'
import fishSix from '../../assets/img/f6.png'
import fishSeven from '../../assets/img/f7.png'
import fishEight from '../../assets/img/f8.png'
import fishNine from '../../assets/img/f9.png'
import fishTen from '../../assets/img/f10.png'

const Main = () => {
    const classes = useStyles();

    return (
        <main className={classes.main}>
            <div className={classes.mainBar}>
                <Container maxWidth="lg" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 0}}>
                    <div className={classes.mainBarLeft}>
                        <a className={classes.mainBarItem} href="#">
                            <img className={classes.mainBarItemImg} src={sortIcon} alt="sort"/>
                        </a>
                        <a className={classes.mainBarItem} href="#">
                            <img img className={classes.mainBarItemImg} src={viewIcon} alt="view"/>
                        </a>
                        <form className={classes.mainForm}>
                            <input className={classes.mainFormInput} type="text" list="search" name="search" placeholder="SEARCH BY ARTISTS & AQUATIC CREATURES" />
                            <datalist id="search">
                                <option>Sam</option>
                                <option>Shon</option>
                                <option>Ti</option>
                                <option>Kate</option>
                            </datalist>
                            <button className={classes.mainFormBtn} type="submit">Filters</button>
                        </form>
                    </div>
                    <div className={classes.mainBarRight}>
                        <form className={classes.mainForm}>    
                            <label className={classes.mainFormLabel}>SORT BY</label>
                            <input className={classes.mainFormInputRight} type="text" list="sort" name="sort" placeholder="LISTING DATE (NEWEST)" />
                            <datalist id="sort">
                                <option>Sam</option>
                                <option>Shon</option>
                                <option>Ti</option>
                                <option>Kate</option>
                            </datalist>
                        </form>
                    </div>
                    </Container>
            </div>
            <Container maxWidth="lg">
            <div className={classes.fishMarket}>
                <div className={classes.mainFishes}>
                    <div className={classes.mainFishesBlock}>
                        <div className={classes.mainFishesBlockImg}>
                            <img img className={classes.fishPicture} src={fishOne} alt="fish"/>
                        </div>
                        <h2 className={classes.mainFishesTitle}>FISH NAME</h2>
                        <p className={classes.mainFishesTitleText}>001/100 EDITION</p>
                        <p className={classes.mainFishesPriceText}>LOWEST ASK</p>
                        <h2 className={classes.mainFishesPriceTitle}>USD $000</h2>
                        <p className={classes.mainFishesPriceText}>100000 LISTINGS</p>
                    </div>
                </div>
                <div className={classes.mainFishes}>
                    <div className={classes.mainFishesBlock}>
                        <div className={classes.mainFishesBlockImg}>
                            <img img className={classes.animationTwo} src={fishTwo} alt="fish"/>
                        </div>
                        <h2 className={classes.mainFishesTitle}>FISH NAME</h2>
                        <p className={classes.mainFishesTitleText}>001/100 EDITION</p>
                        <p className={classes.mainFishesPriceText}>LOWEST ASK</p>
                        <h2 className={classes.mainFishesPriceTitle}>USD $000</h2>
                        <p className={classes.mainFishesPriceText}>100000 LISTINGS</p>
                    </div>
                </div>
                <div className={classes.mainFishes}>
                    <div className={classes.mainFishesBlock}>
                        <div className={classes.mainFishesBlockImg}>
                            <img img className={classes.fishPicture} src={fishThree} alt="fish"/>
                        </div>
                        <h2 className={classes.mainFishesTitle}>FISH NAME</h2>
                        <p className={classes.mainFishesTitleText}>001/100 EDITION</p>
                        <p className={classes.mainFishesPriceText}>LOWEST ASK</p>
                        <h2 className={classes.mainFishesPriceTitle}>USD $000</h2>
                        <p className={classes.mainFishesPriceText}>100000 LISTINGS</p>
                    </div>
                </div>
                <div className={classes.mainFishes}>
                    <div className={classes.mainFishesBlock}>
                        <div className={classes.mainFishesBlockImg}>
                            <img img className={classes.animationTwo} src={fishFour} alt="fish"/>
                        </div>
                        <h2 className={classes.mainFishesTitle}>FISH NAME</h2>
                        <p className={classes.mainFishesTitleText}>001/100 EDITION</p>
                        <p className={classes.mainFishesPriceText}>LOWEST ASK</p>
                        <h2 className={classes.mainFishesPriceTitle}>USD $000</h2>
                        <p className={classes.mainFishesPriceText}>100000 LISTINGS</p>
                    </div>
                </div>
                <div className={classes.mainFishes}>
                    <div className={classes.mainFishesBlock}>
                        <div className={classes.mainFishesBlockImg}>
                            <img img className={classes.animationTwo} src={fishFive} alt="fish"/>
                        </div>
                        <h2 className={classes.mainFishesTitle}>FISH NAME</h2>
                        <p className={classes.mainFishesTitleText}>001/100 EDITION</p>
                        <p className={classes.mainFishesPriceText}>LOWEST ASK</p>
                        <h2 className={classes.mainFishesPriceTitle}>USD $000</h2>
                        <p className={classes.mainFishesPriceText}>100000 LISTINGS</p>
                    </div>
                </div>
                <div className={classes.mainFishes}>
                    <div className={classes.mainFishesBlock}>
                        <div className={classes.mainFishesBlockImg}>
                            <img img className={classes.fishPicture} src={fishSix} alt="fish"/>
                        </div>
                        <h2 className={classes.mainFishesTitle}>FISH NAME</h2>
                        <p className={classes.mainFishesTitleText}>001/100 EDITION</p>
                        <p className={classes.mainFishesPriceText}>LOWEST ASK</p>
                        <h2 className={classes.mainFishesPriceTitle}>USD $000</h2>
                        <p className={classes.mainFishesPriceText}>100000 LISTINGS</p>
                    </div>
                </div>
                <div className={classes.mainFishes}>
                    <div className={classes.mainFishesBlock}>
                        <div className={classes.mainFishesBlockImg}>
                            <img img className={classes.animationTwo} src={fishSeven} alt="fish"/>
                        </div>
                        <h2 className={classes.mainFishesTitle}>FISH NAME</h2>
                        <p className={classes.mainFishesTitleText}>001/100 EDITION</p>
                        <p className={classes.mainFishesPriceText}>LOWEST ASK</p>
                        <h2 className={classes.mainFishesPriceTitle}>USD $000</h2>
                        <p className={classes.mainFishesPriceText}>100000 LISTINGS</p>
                    </div>
                </div>
                <div className={classes.mainFishes}>
                    <div className={classes.mainFishesBlock}>
                        <div className={classes.mainFishesBlockImg}>
                            <img img className={classes.fishPicture} src={fishEight} alt="fish"/>
                        </div>
                        <h2 className={classes.mainFishesTitle}>FISH NAME</h2>
                        <p className={classes.mainFishesTitleText}>001/100 EDITION</p>
                        <p className={classes.mainFishesPriceText}>LOWEST ASK</p>
                        <h2 className={classes.mainFishesPriceTitle}>USD $000</h2>
                        <p className={classes.mainFishesPriceText}>100000 LISTINGS</p>
                    </div>
                </div>
                <div className={classes.mainFishes}>
                    <div className={classes.mainFishesBlock}>
                        <div className={classes.mainFishesBlockImg}>
                            <img img className={classes.animationTwo} src={fishSeven} alt="fish"/>
                        </div>
                        <h2 className={classes.mainFishesTitle}>FISH NAME</h2>
                        <p className={classes.mainFishesTitleText}>001/100 EDITION</p>
                        <p className={classes.mainFishesPriceText}>LOWEST ASK</p>
                        <h2 className={classes.mainFishesPriceTitle}>USD $000</h2>
                        <p className={classes.mainFishesPriceText}>100000 LISTINGS</p>
                    </div>
                </div>
                <div className={classes.mainFishes}>
                    <div className={classes.mainFishesBlock}>
                        <div className={classes.mainFishesBlockImg}>
                            <img img className={classes.fishPicture} src={fishEight} alt="fish"/>
                        </div>
                        <h2 className={classes.mainFishesTitle}>FISH NAME</h2>
                        <p className={classes.mainFishesTitleText}>001/100 EDITION</p>
                        <p className={classes.mainFishesPriceText}>LOWEST ASK</p>
                        <h2 className={classes.mainFishesPriceTitle}>USD $000</h2>
                        <p className={classes.mainFishesPriceText}>100000 LISTINGS</p>
                    </div>
                </div>
                <div className={classes.mainFishes}>
                    <div className={classes.mainFishesBlock}>
                        <div className={classes.mainFishesBlockImg}>
                            <img img className={classes.animationTwo} src={fishNine} alt="fish"/>
                        </div>
                        <h2 className={classes.mainFishesTitle}>FISH NAME</h2>
                        <p className={classes.mainFishesTitleText}>001/100 EDITION</p>
                        <p className={classes.mainFishesPriceText}>LOWEST ASK</p>
                        <h2 className={classes.mainFishesPriceTitle}>USD $000</h2>
                        <p className={classes.mainFishesPriceText}>100000 LISTINGS</p>
                    </div>
                </div>
                <div className={classes.mainFishes}>
                    <div className={classes.mainFishesBlock}>
                        <div className={classes.mainFishesBlockImg}>
                            <img img className={classes.fishPicture} src={fishTen} alt="fish"/>
                        </div>
                        <h2 className={classes.mainFishesTitle}>FISH NAME</h2>
                        <p className={classes.mainFishesTitleText}>001/100 EDITION</p>
                        <p className={classes.mainFishesPriceText}>LOWEST ASK</p>
                        <h2 className={classes.mainFishesPriceTitle}>USD $000</h2>
                        <p className={classes.mainFishesPriceText}>100000 LISTINGS</p>
                    </div>
                </div>
            </div>
            </Container>
        </main>
    );
}

export default Main;
