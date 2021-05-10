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
    const [fishName, fishUri, fishArtist] = await Promise.all([
        nftContract.methods.fishName(fishId).call(),
        nftContract.methods.tokenURI(fishId).call(),
        nftContract.methods.fishArtist(fishId).call(),
    ]);

    return {
        fishId,
        fishName,
        fishUri,
        feeAmount,
        price,
        seller,
        priceEth,
        imgUrl: `${fishUri}/fish.png`,
        imgBigUrl: `${fishUri}/fishBig.png`,
        animationClass,
        fishArtist,
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
    const animationsLength = ANIMATIONS.length - 1;
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

        if (animationCounter === animationsLength) {
            animationCounter = 0;
        } else {
            animationCounter++;
        }
    }

    const fishCards = await Promise.all(promises.map((func) => func()));
    return fishCards.filter((card) => !!card);
}
