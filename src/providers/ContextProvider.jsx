import React, { useReducer } from 'react';
import { AppContext, appInitialState, appStateReducer } from '../app-state';

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
      type: 'UPDATE_STATE',
      payload: changedState,
    });
  };

  /** @param {string} address */
  const setAccount = (address) => {
    dispatch({
      type: 'SET_ACCOUNT',
      payload: address,
    });
  };

  /**
   * @param {ContractInstances} instances
   */
  const setContractInstances = (instances) => {
    dispatch({
      type: 'SET_CONTRACT_INSTANCES',
      payload: instances,
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
        },
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
