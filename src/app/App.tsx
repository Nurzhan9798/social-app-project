import React, { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRoute } from 'app/providers/routes';
import { Navbar } from 'widget/Navbar';
import './style/index.scss';
import { Sidebar } from 'shared/ui/Sidebar';
import { PageLoader } from 'shared/ui/PageLoader';

function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                {/* <Navbar /> */}
                <div className="content-page">
                    <Sidebar />
                    <AppRoute />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
