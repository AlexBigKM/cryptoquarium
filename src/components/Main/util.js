import { log } from '../../util/helpers';
import { ANIMATIONS } from '../../constants';

/**
 *
 * @param {number} index
 * @param {string} animationClass
 * @param {AppState} state
 * @returns {Promise<FishCard>}
 */
export const loadDataForLotByIndex = async (index, animationClass, state) => {
    const { marketplaceContract, nftContract, web3Provider } = state;

    const { fishId, feeAmount, price, seller } = await marketplaceContract.methods.lots(index).call();
    const priceEth = web3Provider.utils.fromWei(price, 'ether');
    const [fishName, fishUri] = await Promise.all([
        nftContract.methods.fishName(fishId).call(),
        nftContract.methods.tokenURI(fishId).call(),
    ]);

    return {
        fishId,
        fishName,
        fishUri,
        feeAmount,
        price,
        seller,
        priceEth,
        imgUrl: 'https://cryptoquarium.netlify.app/logo192.png',
        imgBigUrl: 'https://cryptoquarium.netlify.app/logo192.png',
        animationClass,
    };
};

/**
 * @param {AppState} state
 * @return {Promise<FishCard[]>}
 */
export async function loadDataForLots(state) {
    const { marketplaceContract } = state;
    const lotsAmount = await marketplaceContract.methods.totalLots().call();
    const promises = [];

    log('Lots amount: ', lotsAmount);
    let animationCounter = 0;
    for (let fishIndex = 0; fishIndex < lotsAmount; fishIndex++) {
        const animationClass = ANIMATIONS[animationCounter];
        promises.push(async () => {
            try {
                return await loadDataForLotByIndex(fishIndex, animationClass, state);
            } catch (error) {
                console.error(`Could not load data for fish with index "${fishIndex}"`);
                console.error(error);
            }
        });

        if (animationCounter === ANIMATIONS.length) {
            animationCounter = 0;
        } else {
            animationCounter++;
        }
    }

    const fishCards = await Promise.all(promises.map((func) => func()));
    return fishCards.filter((card) => !!card);
}
