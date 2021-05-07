import React from 'react'
import {useStyles} from "../../style.js"
import Container from '@material-ui/core/Container'

import iconTable from '../../assets/img/icontable.png'
import fishMark from '../../assets/img/fishmark.png'
import fishOne from '../../assets/img/f1.png'
import fishTwo from '../../assets/img/f2.png'
import fishThree from '../../assets/img/f3.png'
import fishFour from '../../assets/img/f4.png'


const Marketplace = () => {
    const classes = useStyles();

    return (
        <div className={classes.market}>
            <Container maxWidth="lg" style={{padding: '50px 0'}}>
                <div className={classes.marketItem}>
                    <div className={classes.marketItemImg}>
                        <img className={classes.animationBigFish} src={fishMark} alt="fish"/>
                    </div>
                    <div className={classes.marketItemDescr}>
                        <h1 className={classes.marketItemTitle}>FISH NAME</h1>
                        <h2 className={classes.marketItemTitleItem}>by David Welker</h2>
                        <span className={classes.marketItemLine}></span>
                        <p className={classes.marketItemDescrText}>EDITION SIZE</p>
                        <span className={classes.marketItemDescrTitle}>500</span>
                        <p className={classes.marketItemDescrText}>SOLD BY</p>
                        <span className={classes.marketItemDescrTitle}>89 COLLECTORS</span>
                        <p className={classes.marketItemDescrText}>LOWEST ASK </p>
                        <span className={classes.marketItemDescrTitle}>USD $1000</span>
                        <p className={classes.marketItemDescrText}>TOP SALE </p>
                        <span className={classes.marketItemDescrTitle}>USD $10000</span>
                        <button className={classes.marketItemBtn} type="submit">SELECT & BUY</button>
                    </div>
                </div>
                <div className={classes.tableBlock}>
                    <h2 className={classes.marketTableTitle}>TOP SALES</h2>
                    <table classname={classes.marketTableTitle} frame="border" rules="all">
                        <tr classname={classes.tableTr}>
                            <th>BUYER</th>
                            <th>SALE PRICE</th>
                            <th>EDITION NUMBER</th>
                            <th>DATE / TIME</th>
                            <th style={{textAlign: 'right'}}>TX</th>
                        </tr>
                        <tr classname={classes.tableTr}>
                            <td><span className={classes.tdAvatar}></span>WhipperSnapper</td>
                            <td>$1000<span className={classes.topSale}>#1 Top Sale</span></td>
                            <td>1/500</td>
                            <td>February 25, 2021 / 5:12 PM</td>
                            <td style={{textAlign: 'right'}}><img src={iconTable} alt="icon"/></td>
                        </tr>
                        <tr classname={classes.tableTr}>
                            <td><span className={classes.tdAvatar}></span>FinSanity</td>
                            <td>$950<span className={classes.topSale}>#2 Top Sale</span></td>
                            <td>2/500</td>
                            <td>March 5, 2021 / 3:00 PM</td>
                            <td style={{textAlign: 'right'}}><img src={iconTable} alt="icon"/></td>
                        </tr>
                        <tr classname={classes.tableTr}>
                            <td><span className={classes.tdAvatar}></span>Flipper</td>
                            <td>$950<span className={classes.topSale}>#3 Top Sale</span></td>
                            <td>3/500</td>
                            <td>January 3, 2021 / 1:20 PM</td>
                            <td style={{textAlign: 'right'}}><img src={iconTable} alt="icon"/></td>
                        </tr>
                    </table>
                    <h2 className={classes.marketTableTitle}>RECENT SALES</h2>
                    <table classname={classes.marketTableTitle} frame="border" rules="all">
                        <tr>
                            <th>BUYER</th>
                            <th>SALE PRICE</th>
                            <th>EDITION NUMBER</th>
                            <th>DATE / TIME</th>
                            <th style={{textAlign: 'right'}}>TX</th>
                        </tr>
                        <tr>
                            <td><span className={classes.tdAvatar}></span>WhipperSnapper</td>
                            <td>$1000</td>
                            <td>1/500</td>
                            <td>February 25, 2021 / 5:12 PM</td>
                            <td style={{textAlign: 'right'}}><img src={iconTable} alt="icon"/></td>
                        </tr>
                        <tr>
                            <td><span className={classes.tdAvatar}></span>FinSanity</td>
                            <td>$950</td>
                            <td>2/500</td>
                            <td>March 5, 2021 / 3:00 PM</td>
                            <td style={{textAlign: 'right'}}><img src={iconTable} alt="icon"/></td>
                        </tr>
                        <tr>
                            <td><span className={classes.tdAvatar}></span>Flipper</td>
                            <td>$950</td>
                            <td>3/500</td>
                            <td>January 3, 2021 / 1:20 PM</td>
                            <td style={{textAlign: 'right'}}><img src={iconTable} alt="icon"/></td>
                        </tr>
                        <tr>
                            <td><span className={classes.tdAvatar}></span>SebastianTheLobster</td>
                            <td>$950</td>
                            <td>3/500</td>
                            <td>January 3, 2021 / 1:20 PM</td>
                            <td style={{textAlign: 'right'}}><img src={iconTable} alt="icon"/></td>
                        </tr>
                        <tr>
                            <td><span className={classes.tdAvatar}></span>BruceTheShark</td>
                            <td>$950</td>
                            <td>3/500</td>
                            <td>January 3, 2021 / 1:20 PM</td>
                            <td style={{textAlign: 'right'}}><img src={iconTable} alt="icon"/></td>
                        </tr>
                        <tr>
                            <td><span className={classes.tdAvatar}></span>CuddleFish</td>
                            <td>$950</td>
                            <td>3/500</td>
                            <td>January 3, 2021 / 1:20 PM</td>
                            <td style={{textAlign: 'right'}}><img src={iconTable} alt="icon"/></td>
                        </tr>
                        <tr>
                            <td><span className={classes.tdAvatar}></span>GillMan</td>
                            <td>$950</td>
                            <td>3/500</td>
                            <td>January 3, 2021 / 1:20 PM</td>
                            <td style={{textAlign: 'right'}}><img src={iconTable} alt="icon"/></td>
                        </tr>
                    </table>
                </div>
                <h2 className={classes.marketTableTitle}>MORE AQUATIC CREATURES</h2>
                <div className={classes.aquaCreatures}>
                    <div className={classes.mainFishes}>
                    <div className={classes.mainFishesBlock}>
                        <div className={classes.mainFishesBlockImg}>
                            <img img className={classes.animationThree} src={fishOne} alt="fish"/>
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
                            <img img className={classes.animationEight} src={fishTwo} alt="fish"/>
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
                            <img img className={classes.animationTwo} src={fishThree} alt="fish"/>
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
                            <img img className={classes.animationTen} src={fishFour} alt="fish"/>
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
        </div>
    );
}

export default Marketplace;