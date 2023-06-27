import React, { Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routre/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader';
import { getUserAuthData } from 'entity/User/model/selectors/getUserAuthData/getUserAuthData';
import { useSelector } from 'react-redux';

export function AppRoute() {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
        if (route.authOnly && !isAuth) {
            return false;
        }

        return true;
    }), [isAuth]);
    return (
        <div className="page-wrapper">
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    {
                        routes
                            .map(({ path, element }) => (
                                <Route
                                    key={path}
                                    path={path}
                                    element={element}
                                />
                            ))

                    }
                </Routes>
            </Suspense>
        </div>
    );
}
