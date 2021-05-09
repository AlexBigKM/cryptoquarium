import { NFTAbi, MarketplaceAbi } from "./config";

export const NETWORK_TYPE = process.env.REACT_APP_NETWORK_TYPE;

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
}
