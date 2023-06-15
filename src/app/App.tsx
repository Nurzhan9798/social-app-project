import React, { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRoute } from 'app/providers/routes';
import { Sidebar } from 'widget/Sidebar';
import { PageLoader } from 'shared/ui/PageLoader';
import { Navbar } from 'widget/Navbar';
import { useDispatch } from 'react-redux';
import { userAction } from 'entity/User';
import { useNavigate } from 'react-router-dom';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
