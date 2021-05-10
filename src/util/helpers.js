import Web3Provider from 'web3';
import { DEBUG_MODE, MARKETPLACE_CONTRACT, NFT_CONTRACT } from '../constants';

/**
 * Truncate number after point.
 * @param {number|string} value
 * @param {number=} digitAfterPoint
 * @param {boolean=} format
 */
export function truncNum(value, digitAfterPoint = 2, format = true) {
    value = typeof value === 'string' ? value : value.toString();

    const chars = value.split('.');
    if (chars.length === 1) {
        return value;
    } else if (chars.length > 2) {
        throw Error(`Incorrect value: ${value}`);
    }

    const leftPart = chars[0];
    const rightPart = chars[1];

    let newValue = leftPart + '.' + rightPart.split('').slice(0, digitAfterPoint).join('');

    if (format) {
        newValue =
            chars[1].length > digitAfterPoint
                ? formatNumberWithSpaces(newValue) + '...'
                : formatNumberWithSpaces(newValue);
    }

    return newValue;
}

/**
 * @param {number|string} value
 * @param {number=} digitAfterPoint
 * @returns {number}
 */
export function roundNum(value, digitAfterPoint = 4) {
    value = typeof value === 'string' ? parseFloat(value) : value;
    value = value.toFixed(digitAfterPoint);

    return parseFloat(value);
}

/**
 * @param {number|string} num
 * @returns {string}
 */
export function formatNumberWithSpaces(num) {
    let [numBase, numDigs] = num.toString().split('.');
    return numBase.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + (numDigs ? `.${numDigs}` : '');
}

export function addTokenToWallet(tokenData) {
    return window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
            type: 'ERC20',
            options: tokenData,
        },
    });
}

// export function addCustomTokens() {
//   window.ethereum.request({
//     method: 'wallet_watchAsset',
//     params: {
//       type: 'ERC20',
//       options: {
//         address: REWARDS_TOKEN.ADDRESS,
//         symbol: REWARDS_TOKEN.SYMBOL,
//         decimals: REWARDS_TOKEN.DECIMALS,
//         image: REWARDS_TOKEN.ICON_URL,
//       },
//     },
//   });
//
//   window.ethereum.request({
//     method: 'wallet_watchAsset',
//     params: {
//       type: 'ERC20',
//       options: {
//         address: STAKING_TOKEN.ADDRESS,
//         symbol: STAKING_TOKEN.SYMBOL,
//         decimals: STAKING_TOKEN.DECIMALS,
//         image: STAKING_TOKEN.ICON_URL,
//       },
//     },
//   });
// }

export function logAppStateChanges(action, newState) {
    if (DEBUG_MODE) {
        log('-');
        log('ACTION: ', action.type);
        log('PAYLOAD: ', action.payload);
        log('STATE: ', newState);
        log('-');
    }
}

export function log(...args) {
    if (DEBUG_MODE) {
        console.debug(...args);
    }
}

/**
 *
 * @param fallbackProvider
 * @param forceFallbackProvider
 * @returns {ContractInstances}
 */
export function initializeContracts(fallbackProvider, forceFallbackProvider = false) {
    let existingProvider = fallbackProvider
        ? window.ethereum || window?.web3?.currentProvider || fallbackProvider
        : window.ethereum || window?.web3?.currentProvider;

    existingProvider = forceFallbackProvider ? fallbackProvider : existingProvider;

    const web3Provider = new Web3Provider(existingProvider);
    const nftContract = new web3Provider.eth.Contract(NFT_CONTRACT.ABI, NFT_CONTRACT.ADDRESS);
    const marketplaceContract = new web3Provider.eth.Contract(MARKETPLACE_CONTRACT.ABI, MARKETPLACE_CONTRACT.ADDRESS);

    return {
        web3Provider,
        nftContract,
        marketplaceContract,
    };
}

export function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
