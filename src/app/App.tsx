import React, { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRoute } from 'app/providers/routes';
import { Sidebar } from 'shared/ui/Sidebar';
import { PageLoader } from 'shared/ui/PageLoader';
import { Navbar } from 'widget/Navbar';
import { useDispatch } from 'react-redux';
import { userAction } from 'entity/User';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userAction.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRoute />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
