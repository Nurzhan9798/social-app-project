import { render } from 'react-dom';
import App from 'app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import './shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';

render(
    <StoreProvider>
        <ErrorBoundary>
            <ThemeProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </ErrorBoundary>
    </StoreProvider>,
    document.getElementById('root'),
);
