import React, { useReducer } from 'react';
import { AppContext, appInitialState, appStateReducer } from '../app-state';
import { ACTION_TYPES } from '../constants';

/**
 * @typedef ContractInstances
 * @property {Web3} web3Provider
 * @property {Contract} nftContract
 * @property {Contract} marketplaceContract
 */

const ContextProvider = (props) => {
    const [state, dispatch] = useReducer(appStateReducer, appInitialState);

    const updateState = (changedState) => {
        dispatch({
            type: ACTION_TYPES.UPDATE_STATE,
            payload: changedState,
        });
    };

    /** @param {string} address */
    const setAccount = (address) => {
        dispatch({
            type: ACTION_TYPES.SET_ACCOUNT,
            payload: address,
        });
    };

    /** @param {ContractInstances} instances */
    const setContractInstances = (instances) => {
        dispatch({
            type: ACTION_TYPES.SET_CONTRACT_INSTANCES,
            payload: instances,
        });
    };

    /** @param {FishCard[]} cards */
    const setFishCards = (cards) => {
        dispatch({
            type: ACTION_TYPES.SET_FISH_CARDS,
            payload: cards,
        });
    };

    return (
        <AppContext.Provider
            value={{
                state,
                dispatch,
                actions: {
                    updateState,
                    setAccount,
                    setContractInstances,
                    setFishCards,
                },
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default ContextProvider;
