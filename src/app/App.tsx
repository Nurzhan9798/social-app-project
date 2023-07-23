import React, { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRoute } from 'app/providers/routes';
import { Sidebar } from 'widget/Sidebar';
import { PageLoader } from 'widget/PageLoader';
import { Navbar } from 'widget/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { userAction, getUserInited } from 'entity/User';
import { useTheme } from 'app/providers/ThemeProvider';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const isUserInited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userAction.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {isUserInited && <AppRoute />}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
