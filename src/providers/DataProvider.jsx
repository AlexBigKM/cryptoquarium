import React, { memo, useEffect, useRef, useState } from 'react';
import { useAppState } from '../app-state';
import { getMetamaskProvider, initializeContracts, log } from '../util/helpers';
import { CHAIN_ID, FALLBACK_PROVIDER_URL } from '../constants';
import { loadDataForLots } from '../components/Main/util';
import { useCustomSnackbar } from '../hooks/custom-snackbars';

const DataProvider = (props) => {
    const { state, actions } = useAppState();
    const { showError, ERROR_MSG } = useCustomSnackbar();
    const timerRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        createContractInstances();
    }, [state.selectedAccountAddress, state.isCorrectNetwork]);

    useEffect(() => {
        if (!state.web3Provider) return;

        timerRef.current = watchForNetworkChanging();
        return () => {
            clearTimeout(timerRef.current);
        };
    }, [state.web3Provider]);

    const createContractInstances = () => {
        const instances = initializeContracts(FALLBACK_PROVIDER_URL, !state.isCorrectNetwork);

        actions.setContractInstances(instances);
    };

    /**
     * TODO: Find correct way to listen network changing
     * @returns {number}
     */
    const watchForNetworkChanging = () => {
        const TIMEOUT_IN_MILLIS = 2000;
        const timeoutId = setInterval(() => checkNetworkType(), TIMEOUT_IN_MILLIS);

        const checkNetworkType = () => {
            const metamaskProvider = getMetamaskProvider();

            if (!metamaskProvider) {
                if (state.isMetamaskAvailable !== false) {
                    actions.updateState({
                        isCorrectNetwork: false,
                        isMetamaskAvailable: false,
                    });
                }

                return;
            }

            metamaskProvider.eth.net.getId().then((chainId) => {
                if (chainId !== parseInt(CHAIN_ID)) {
                    if (state.isCorrectNetwork !== false) {
                        actions.updateState({
                            isCorrectNetwork: false,
                            isMetamaskAvailable: true,
                        });
                    }
                } else {
                    clearInterval(timeoutId);
                    actions.updateState({
                        isCorrectNetwork: true,
                        isMetamaskAvailable: true,
                    });
                }
            });
        };

        return timeoutId;
    };

    useEffect(() => {
        const { nftContract, marketplaceContract, fishCards } = state;
        if (isLoading || !nftContract || !marketplaceContract || fishCards.length !== 0) {
            log('No address!');
            return;
        }

        setIsLoading(true);
        loadDataForLots(state)
            .then((cards) => actions.setFishCards(cards))
            .catch((err) => {
                showError(ERROR_MSG.COULD_NOT_LOAD_DATA_CARDS);
                console.error(err);
            })
            .finally(() => setIsLoading(false));
    }, [state.nftContract, state.marketplaceContract]);

    return <>{props.children}</>;
};

export default memo(DataProvider);
