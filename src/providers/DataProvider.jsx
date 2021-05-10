import React, { useEffect } from 'react';
import { useAppState } from '../app-state';
import { initializeContracts, log } from '../util/helpers';
import { CHAIN_ID, FALLBACK_PROVIDER_URL } from '../constants';
import { loadDataForLots } from '../components/Main/util';
import { useCustomSnackbar } from '../hooks/custom-snackbars';

const DataProvider = (props) => {
    const { state, actions } = useAppState();
    const { showError, ERROR_MSG } = useCustomSnackbar();

    useEffect(() => {
        // if (state.selectedAccountAddress) {
        createContractInstances();
        // }
    }, [state.selectedAccountAddress]);

    useEffect(() => {
        if (!state.web3Provider) return;

        const timeoutId = watchForNetworkChanging(state.web3Provider);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [state.web3Provider]);

    const createContractInstances = () => {
        const instances = initializeContracts(FALLBACK_PROVIDER_URL, !state.isCorrectNetwork);

        actions.setContractInstances(instances);
    };

    /**
     * TODO: Find correct way to listen network changing
     * @param {Web3} web3Provider
     * @returns {NodeJS.Timeout}
     */
    const watchForNetworkChanging = (web3Provider) => {
        const TIMEOUT_IN_MILLIS = 2000;
        const timeoutId = setInterval(() => checkNetworkType(), TIMEOUT_IN_MILLIS);

        const checkNetworkType = () => {
            web3Provider.eth.net.getId().then((chainId) => {
                if (chainId !== parseInt(CHAIN_ID)) {
                    actions.updateState({ isCorrectNetwork: false });
                } else {
                    clearInterval(timeoutId);
                    actions.updateState({ isCorrectNetwork: true });
                }
            });
        };

        return timeoutId;
    };

    useEffect(() => {
        const { nftContract, marketplaceContract } = state;
        if (!nftContract || !marketplaceContract) {
            log('No address!');
            return;
        }

        loadDataForLots(state)
            .then((cards) => {
                actions.setFishCards(cards);
            })
            .catch((err) => {
                showError(ERROR_MSG.COULD_NOT_LOAD_DATA_CARDS);
                console.error(err);
            });
    }, [state.nftContract, state.marketplaceContract]);

    return <>{props.children}</>;
};

export default DataProvider;
