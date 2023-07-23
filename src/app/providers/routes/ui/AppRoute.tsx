import React, { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routre/routeConfig';
import { PageLoader } from 'widget/PageLoader';
import { RequireAuth } from 'app/providers/routes/ui/RequireAuth';

export function AppRoute() {
    const renderRoute = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);
    return (
        <Routes>
            {Object.values(routeConfig).map(renderRoute)}
        </Routes>
    );
}
