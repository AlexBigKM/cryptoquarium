import React, { useEffect } from 'react';
import { appInitialState, useAppState } from '../app-state';
import { log } from '../util/helpers';

const MetamaskAccountDetector = (props) => {
  const { state, actions } = useAppState();

  useEffect(() => {
    detectAccountAddress();
  }, []);

  useEffect(() => {
    if (state.selectedAccountAddress) {
      window.ethereum.addListener('accountsChanged', subscribeToAccountChanges);
      window.ethereum.addListener('disconnect', handleLogOut);

      return () => {
        window.ethereum.removeListener('accountsChanged', subscribeToAccountChanges);
        window.ethereum.removeListener('disconnect', handleLogOut);
      };
    } else if (state.web3Provider) {
      handleLogOut();
    }
  }, [state.selectedAccountAddress]);

  const detectAccountAddress = async () => {
    let isMetamaskUnlocked = false;
    if (!!window.ethereum && !!window.ethereum._metamask) {
      isMetamaskUnlocked = await window.ethereum._metamask.isUnlocked();
    }

    if (isMetamaskUnlocked) {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      if (accounts.length !== 0) {
        log('Metamask unlocked! Set account!');
        actions.setAccount(accounts[0]);
      }
    }
  };

  const subscribeToAccountChanges = (accounts) => {
    if (accounts.length === 0) {
      handleLogOut();
      return;
    }

    const address = accounts[0];
    if (address !== state.selectedAccountAddress) {
      log('Account changed: ', address);
      actions.setAccount(address);
    }
  };

  const handleLogOut = () => {
    log('LogOut! Reset state!');
    actions.updateState(appInitialState);
  };

  return <>{props.children}</>;
};

export default MetamaskAccountDetector;
