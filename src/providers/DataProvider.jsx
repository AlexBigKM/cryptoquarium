import React, { useEffect } from 'react';
import { useAppState } from '../app-state';
import { initializeContracts, log } from '../util/helpers';
import { FALLBACK_PROVIDER_URL } from "../constants";

const DataProvider = (props) => {
  const { state, actions } = useAppState();

  useEffect(() => {
    // if (state.selectedAccountAddress) {
    log();
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

  // useEffect(() => {
  //   if (state?.masterPoolInstance?.options?.address && state.isCorrectNetwork) {
  //     log('Initialize pools');
  //   }
  // }, [state.masterPoolInstance?.options?.address, state.selectedAccountAddress, state.isCorrectNetwork]);

  const createContractInstances = () => {
    const instances = initializeContracts(FALLBACK_PROVIDER_URL);
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
      web3Provider.eth.net.getId().then((_chainId) => {
        // if (chainId !== parseInt(CHAIN_ID)) {
        //   actions.updateState({ isCorrectNetwork: false });
        // } else {
        clearInterval(timeoutId);
        actions.updateState({ isCorrectNetwork: true });
        // }
      });
    };

    return timeoutId;
  };

  return <>{props.children}</>;
};

export default DataProvider;
