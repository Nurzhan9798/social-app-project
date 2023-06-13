import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/storeConfig';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';

interface StoreProviderProps {
   children: ReactNode;
    initialState?: DeepPartial<StateScheme>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState } = props;
    const store = createReduxStore(initialState as StateScheme);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
