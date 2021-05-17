import { MarketplaceAbi, NFTAbi } from './config';

export const DEBUG_MODE = process.env.REACT_APP_DEBUG_MODE === '1';
export const NETWORK_TYPE = process.env.REACT_APP_NETWORK_TYPE;
export const FALLBACK_PROVIDER_URL = process.env.REACT_APP_INFURA_URL;
export const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

export const NFT_CONTRACT = {
    ADDRESS: process.env.REACT_APP_NFT_ADDRESS,
    ABI: NFTAbi,
};

export const MARKETPLACE_CONTRACT = {
    ADDRESS: process.env.REACT_APP_MARKETPLACE_ADDRESS,
    ABI: MarketplaceAbi,
};

export const ROUTES = {
    HOME: '/',
    MAIN: '/main',
    FISH_PAGE: '/fishpage/:id',
    CONTACT: '/contact',
    FAQ: '/faq',
};

export const ERROR_MSG = {
    COMMON: 'Unexpected error happened!',
    METAMASK_IS_NOT_INSTALLED: 'Metamask is not installed!',
    NO_CONNECTION: 'You have no connected account!',
    COULD_NOT_LOAD_DATA: 'Could not load data!',
    COULD_NOT_LOAD_DATA_CARDS: 'Could not data for fish cards!',
    INCORRECT_NETWORK: 'Please switch to Rinkeby network first',
    COULD_NOT_LOAD_FISH_AUTHOR: 'Could not load fish author!',
    COULD_NOT_BUY_FISH: 'Could not buy fish!',
};

export const ACTION_TYPES = {
    UPDATE_STATE: 'UPDATE_STATE',
    SET_ACCOUNT: 'SET_ACCOUNT',
    SET_CONTRACT_INSTANCES: 'SET_CONTRACT_INSTANCES',
    SET_FISH_CARDS: 'SET_FISH_CARDS',
};

export const ANIMATIONS = [
    'animationFive',
    'animationTen',
    'animationFour',
    'animationThree',
    'animationEleven',
    'animationSix',
    'animationTwo',
    'animationEight',
    'animationNine',
    'fishPicture',
    'animationSeven',
    'animationTwelve',
];
export const WEBURL = {
    METAMASKURL: 'https://metamask.io/download.html'
}
