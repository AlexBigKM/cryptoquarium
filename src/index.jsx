import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import theme from './theme';
import ContextProvider from './providers/ContextProvider';
import MetamaskAccountDetector from './providers/MetamaskAccountDetector';
import DataProvider from './providers/DataProvider';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <SnackbarProvider
            maxSnack={2}
            autoHideDuration={2000}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
            <ContextProvider>
                <MetamaskAccountDetector>
                    <DataProvider>
                        <App />
                    </DataProvider>
                </MetamaskAccountDetector>
            </ContextProvider>
        </SnackbarProvider>
    </ThemeProvider>,
    document.getElementById('root'),
);
