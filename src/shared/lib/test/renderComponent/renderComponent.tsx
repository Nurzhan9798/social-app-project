import React, { ReactNode } from 'react';

import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTest from 'shared/config/i18n/i18nForTest';
import { MemoryRouter } from 'react-router-dom';
import { StateScheme, StoreProvider } from 'app/providers/StoreProvider';

interface RenderComponentProps {
    initialState?: DeepPartial<StateScheme>;
}
export function renderComponent(component: ReactNode, options: RenderComponentProps = {}) {
    const { initialState } = options;
    return render(
        <MemoryRouter initialEntries={['/']}>
            <StoreProvider initialState={initialState}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,

    );
}
