import { createContext, useContext } from 'react';
import { logAppStateChanges } from './util/helpers';
import { ACTION_TYPES } from './constants';

/**
 * @typedef FishCard
 * @property {string} fishId
 * @property {string} fishName
 * @property {string} fishUri
 * @property {string} feeAmount
 * @property {string} price - Price in WEI.
 * @property {string} priceEth - Price in ETH.
 * @property {string} seller - Seller address.
 * @property {string} imgUrl
 * @property {string} imgBigUrl
 * @property {string} animationClass
 * @property {string} fishArtist - Is null by default, the record should be updated on fish page.
 */

/**
 * @typedef AppState
 * @property {boolean} isCorrectNetwork
 * @property {boolean} isMetamaskAvailable
 * @property {string|null} selectedAccountAddress
 * @property {Web3|null} web3Provider
 * @property {Contract|null} nftContract
 * @property {Contract|null} marketplaceContract
 * @property {FishCard[]} fishCards
 */

/** @type {AppState} */
export const appInitialState = {
    isCorrectNetwork: false,
    isMetamaskAvailable: false,
    selectedAccountAddress: null,
    web3Provider: null,
    nftContract: null,
    marketplaceContract: null,
    fishCards: [],
};

export function appStateReducer(state, action) {
    const newState = reducer(state, action);
    logAppStateChanges(action, newState);
    return newState;
}

function reducer(state, action) {
    switch (action.type) {
        case ACTION_TYPES.UPDATE_STATE:
            return { ...state, ...action.payload };

        case ACTION_TYPES.SET_ACCOUNT:
            return { ...appInitialState, selectedAccountAddress: action.payload };

        case ACTION_TYPES.SET_CONTRACT_INSTANCES:
            return { ...state, ...action.payload };

        case ACTION_TYPES.SET_FISH_CARDS:
            return { ...state, fishCards: action.payload };

        default:
            throw new Error(`Unknown action type ${action.type}`);
    }
}

/** @type {React.Context<{dispatch: null, state: AppState, actions: {}}>} */
export const AppContext = createContext({ state: appInitialState, actions: {}, dispatch: null });

/**
 *
 * @returns {{dispatch: null, state: AppState, actions: {}}}
 */
export function useAppState() {
    return useContext(AppContext);
}
