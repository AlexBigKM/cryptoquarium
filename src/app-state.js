import { createContext, useContext } from 'react';
import { logAppStateChanges } from './util/helpers';

export const appInitialState = {
    isCorrectNetwork: null,
    selectedAccountAddress: null,
    web3Provider: null,
    nftContract: null,
    marketplaceContract: null,
};

export function appStateReducer(state, action) {
    const newState = reducer(state, action);
    logAppStateChanges(action, newState);
    return newState;
}

function reducer(state, action) {
    switch (action.type) {
        case 'UPDATE_STATE':
            return { ...state, ...action.payload };

        case 'SET_ACCOUNT':
            return { ...appInitialState, selectedAccountAddress: action.payload };

        case 'SET_CONTRACT_INSTANCES':
            return { ...state, ...action.payload };

        default:
            throw new Error(`Unknown action type ${action.type}`);
    }
}

export const AppContext = createContext({ state: appInitialState, actions: {}, dispatch: null });

/**
 *
 * @returns {{dispatch: null, state: {nftContract: null, isCorrectNetwork: null, selectedAccountAddress: null, web3Provider: null, marketplaceContract: null}, actions: {}}}
 */
export function useAppState() {
    return useContext(AppContext);
}
