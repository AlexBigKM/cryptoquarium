import React, { useEffect, useState } from 'react';
import { useStyles } from '../../style.js';
import { generatePath, NavLink, useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import iconTable from '../../assets/img/icontable.png';
import { useAppState } from '../../app-state';
import { useCustomSnackbar } from '../../hooks/custom-snackbars';
import { ROUTES } from '../../constants';
import { getRandInt } from '../../util/helpers';
import clsx from 'clsx';

const FishPage = () => {
    const { state, actions } = useAppState();
    const [fish, setFish] = useState(/** @type {FishCard|null} */ null);
    const [otherFishCards, setOtherFishCards] = useState([]);
    const [isBuyBtnDisabled, setIsBuyBtnDisabled] = useState(true);

    const classes = useStyles();
    const params = useParams();
    const { enqueueSnackbar, closeSnackbar, showError, showSuccess, ERROR_MSG } = useCustomSnackbar();

    useEffect(() => {
        if (fish || state.fishCards.length === 0) return;
        const fishIndex = state.fishCards.findIndex((fish) => fish.fishId === params.id);
        if (fishIndex < 0) return;
        const foundFish = state.fishCards[fishIndex];
        console.log(foundFish);
        setFish(foundFish);
        setOtherFishCards(getRandomFish(foundFish.fishId));
    }, [state.fishCards.length]);



    useEffect(() => {
        if (state.isCorrectNetwork && state.selectedAccountAddress) {
            setIsBuyBtnDisabled(false);
        } else {
            setIsBuyBtnDisabled(true);
        }
    }, [state.isCorrectNetwork, state.selectedAccountAddress]);

    const getRandomFish = (fishIdToExclude, resultAmount = 4) => {
        const randomFishArr = [];

        while (randomFishArr.length < resultAmount) {
            const randIndex = getRandInt(0, state.fishCards.length - 1);
            const fish = state.fishCards[randIndex];
            const isFishAdded = randomFishArr.some(({ fishId }) => fishId === fish.fishId);

            if (fish.fishId !== fishIdToExclude && !isFishAdded) {
                randomFishArr.push(fish);
            }
        }

        return randomFishArr;
    };

    const startPaymentProcess = async () => {
        setIsBuyBtnDisabled(true);
        const { marketplaceContract, selectedAccountAddress } = state;
        const { fishId, price } = fish;
        const snackbarKey = enqueueSnackbar('Processing...', {
            variant: 'info',
            persist: true,
        });

        try {
            await marketplaceContract.methods.buy(fishId).send({
                from: selectedAccountAddress,
                value: price,
            });

            closeSnackbar(snackbarKey);
            showSuccess('Payment successful!');
        } catch (error) {
            closeSnackbar(snackbarKey);
            showError(ERROR_MSG.COULD_NOT_BUY_FISH, error);
        }
        setIsBuyBtnDisabled(false);
    };

    return (
        <div className={classes.market}>
            <Container maxWidth="lg" style={{ padding: '50px 0' }}>
                {fish && (
                    <>
                        <div className={classes.marketItem}>
                            <div className={classes.marketItemImg}>
                                <img className={classes.animationBigFish} src={fish.imgBigUrl} alt="fish" />
                            </div>
                            <div className={classes.marketItemDescr}>
                                <h1 className={classes.marketItemTitle}>{fish.fishName}</h1>
                                <h2 className={classes.marketItemTitleItem}>by {fish.fishArtist}</h2>
                                <span className={classes.marketItemLine}></span>
                                <p className={classes.marketItemDescrText}>EDITION SIZE</p>
                                <span className={classes.marketItemDescrTitle}>500</span>
                                <p className={classes.marketItemDescrText}>SOLD BY</p>
                                <span className={classes.marketItemDescrTitle}>89 COLLECTORS</span>
                                <p className={classes.marketItemDescrText}>LOWEST ASK </p>
                                <span className={classes.marketItemDescrTitle}>ETH {fish.priceEth}</span>
                                <p className={classes.marketItemDescrText}>TOP SALE </p>
                                <span className={classes.marketItemDescrTitle}>USD $10000</span>
                                <button
                                    className={clsx(classes.marketItemBtn, {
                                        [classes.enabledBuyBtn]: !isBuyBtnDisabled,
                                        [classes.disabledBuyBtn]: isBuyBtnDisabled,
                                    })}
                                    disabled={isBuyBtnDisabled}
                                    onClick={startPaymentProcess}
                                >
                                    SELECT & BUY
                                </button>
                                <button className={classes.marketItemBtn}>Not for sale</button>
                            </div>
                        </div>
                    </>
                )}

                <div className={classes.tableBlock}>
                    <h2 className={classes.marketTableTitle}>TOP SALES</h2>
                    <table className={classes.marketTableTitle} frame="border" rules="all">
                        <tr className={classes.tableTr}>
                            <th>BUYER</th>
                            <th>SALE PRICE</th>
                            <th>EDITION NUMBER</th>
                            <th>DATE / TIME</th>
                            <th style={{ textAlign: 'right' }}>TX</th>
                        </tr>
                        <tr className={classes.tableTr}>
                            <td>
                                <span className={classes.tdAvatar}></span>WhipperSnapper
                            </td>
                            <td>
                                $1000<span className={classes.topSale}>#1 Top Sale</span>
                            </td>
                            <td>1/500</td>
                            <td>February 25, 2021 / 5:12 PM</td>
                            <td style={{ textAlign: 'right' }}>
                                <img src={iconTable} alt="icon" />
                            </td>
                        </tr>
                        <tr className={classes.tableTr}>
                            <td>
                                <span className={classes.tdAvatar}></span>FinSanity
                            </td>
                            <td>
                                $950<span className={classes.topSale}>#2 Top Sale</span>
                            </td>
                            <td>2/500</td>
                            <td>March 5, 2021 / 3:00 PM</td>
                            <td style={{ textAlign: 'right' }}>
                                <img src={iconTable} alt="icon" />
                            </td>
                        </tr>
                        <tr className={classes.tableTr}>
                            <td>
                                <span className={classes.tdAvatar}></span>Flipper
                            </td>
                            <td>
                                $950<span className={classes.topSale}>#3 Top Sale</span>
                            </td>
                            <td>3/500</td>
                            <td>January 3, 2021 / 1:20 PM</td>
                            <td style={{ textAlign: 'right' }}>
                                <img src={iconTable} alt="icon" />
                            </td>
                        </tr>
                    </table>
                    <h2 className={classes.marketTableTitle}>RECENT SALES</h2>
                    <table className={classes.marketTableTitle} frame="border" rules="all">
                        <tr>
                            <th>BUYER</th>
                            <th>SALE PRICE</th>
                            <th>EDITION NUMBER</th>
                            <th>DATE / TIME</th>
                            <th style={{ textAlign: 'right' }}>TX</th>
                        </tr>
                        <tr>
                            <td>
                                <span className={classes.tdAvatar}></span>WhipperSnapper
                            </td>
                            <td>$1000</td>
                            <td>1/500</td>
                            <td>February 25, 2021 / 5:12 PM</td>
                            <td style={{ textAlign: 'right' }}>
                                <img src={iconTable} alt="icon" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className={classes.tdAvatar}></span>FinSanity
                            </td>
                            <td>$950</td>
                            <td>2/500</td>
                            <td>March 5, 2021 / 3:00 PM</td>
                            <td style={{ textAlign: 'right' }}>
                                <img src={iconTable} alt="icon" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className={classes.tdAvatar}></span>Flipper
                            </td>
                            <td>$950</td>
                            <td>3/500</td>
                            <td>January 3, 2021 / 1:20 PM</td>
                            <td style={{ textAlign: 'right' }}>
                                <img src={iconTable} alt="icon" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className={classes.tdAvatar}></span>SebastianTheLobster
                            </td>
                            <td>$950</td>
                            <td>3/500</td>
                            <td>January 3, 2021 / 1:20 PM</td>
                            <td style={{ textAlign: 'right' }}>
                                <img src={iconTable} alt="icon" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className={classes.tdAvatar}></span>BruceTheShark
                            </td>
                            <td>$950</td>
                            <td>3/500</td>
                            <td>January 3, 2021 / 1:20 PM</td>
                            <td style={{ textAlign: 'right' }}>
                                <img src={iconTable} alt="icon" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className={classes.tdAvatar}></span>CuddleFish
                            </td>
                            <td>$950</td>
                            <td>3/500</td>
                            <td>January 3, 2021 / 1:20 PM</td>
                            <td style={{ textAlign: 'right' }}>
                                <img src={iconTable} alt="icon" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className={classes.tdAvatar}></span>GillMan
                            </td>
                            <td>$950</td>
                            <td>3/500</td>
                            <td>January 3, 2021 / 1:20 PM</td>
                            <td style={{ textAlign: 'right' }}>
                                <img src={iconTable} alt="icon" />
                            </td>
                        </tr>
                    </table>
                </div>
                <h2 className={classes.marketTableTitle}>MORE AQUATIC CREATURES</h2>
                <div className={classes.aquaCreatures}>
                    {otherFishCards.map((fish) => (
                        <NavLink
                            to={generatePath(ROUTES.FISH_PAGE, { id: fish.fishId })}
                            key={fish.fishId}
                            className={classes.mainFishes}>
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
                                <p className={classes.mainFishesPriceText}>100000 LISTINGS</p>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default FishPage;
