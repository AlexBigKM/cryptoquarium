import { getRandInt, log } from '../../util/helpers';
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

    // Means the fish with given index is not available on market.
    if (fishId === 0 || fishId === '0') {
        return null;
    }
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
 *
 * @param {number} fishId
 * @param {AppState} state
 * @returns {Promise<FishCard>}
 */
export async function loadFishDataById(fishId, state) {
    const { nftContract } = state;

    const animationClass = ANIMATIONS[getRandInt(0, ANIMATIONS.length)];

    const [fishName, fishUri, fishArtist] = await Promise.all([
        nftContract.methods.fishName(fishId).call(),
        nftContract.methods.tokenURI(fishId).call(),
        nftContract.methods.fishArtist(fishId).call(),
    ]);

    return {
        fishId,
        fishName,
        fishUri,
        feeAmount: '0',
        price: '0',
        seller: '0',
        priceEth: '0',
        imgUrl: `${fishUri}/fish.png`,
        imgBigUrl: `${fishUri}/fishBig.png`,
        animationClass,
        fishArtist,
    };
}

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
