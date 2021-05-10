import { useSnackbar } from 'notistack';
import MetaMaskOnboarding from '@metamask/onboarding';
import { useAppState } from '../app-state';
import { ERROR_MSG } from '../constants';

export function useCustomSnackbar() {
    const { state } = useAppState();
    const { enqueueSnackbar } = useSnackbar();

    const showConnectionError = () => {
        if (!MetaMaskOnboarding.isMetaMaskInstalled()) {
            showError(ERROR_MSG.METAMASK_IS_NOT_INSTALLED);
        } else if (!state.selectedAccountAddress) {
            showError(ERROR_MSG.NO_CONNECTION);
        } else if (!state.isCorrectNetwork) {
            showError(ERROR_MSG.INCORRECT_NETWORK);
        } else {
            showError(ERROR_MSG.COMMON);
        }
    };

    const showError = (msgType = ERROR_MSG.COMMON, error = null) => {
        enqueueSnackbar(msgType, { variant: 'error' });
        error && console.error(msgType, error);
    };

    return {
        showError,
        showConnectionError,
        ERROR_MSG,
    };
}
