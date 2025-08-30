// SnackbarContext.tsx

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
// import SnackbarComponent from '../controls/';
import { MyThemeProviderProp } from '../layout/MyThemeProvider';

export type SnackbarMessage = {
    message: string;
    severity: 'success' | 'warning' | 'error' | 'info';
    position?: 'right' | 'left' | 'center';
};

type SnackbarContextValue = {
    showMessage: (message: SnackbarMessage) => void;
    hideMessage: () => void;
    message: SnackbarMessage | null;
};

export const SnackbarContext = createContext<SnackbarContextValue>({
    showMessage: () => {},
    hideMessage: () => {},
    message: null,
});

export const useSnackbar = () => useContext(SnackbarContext);

export const SnackbarProvider = ({ children }: MyThemeProviderProp) => {
    const [message, setMessage] = useState<SnackbarMessage | null>(null);

    const showMessage = useCallback((message: SnackbarMessage) => {
        setMessage(message);
    }, []);

    const hideMessage = useCallback(() => {
        setMessage(null);
    }, []);

    const contextValue = useMemo(() => ({ showMessage, hideMessage, message }), [showMessage, hideMessage, message]);

    return (
        <SnackbarContext.Provider value={contextValue}>
            {children}
            {/* <SnackbarComponent /> Include SnackbarComponent here */}
        </SnackbarContext.Provider>
    );
};