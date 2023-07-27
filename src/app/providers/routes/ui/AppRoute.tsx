import React, { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routre/routeConfig';
import { PageLoader } from 'widget/PageLoader';
import { RequireAuth } from 'app/providers/routes/ui/RequireAuth';
import { RequireRoles } from './RequireRoles';

export function AppRoute() {
    const renderRoute = useCallback((route: AppRoutesProps) => {
        let element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        );

        if (route.roles?.length > 0) {
            element = <RequireRoles roles={route.roles}>{element}</RequireRoles>;
        }

        if (route.authOnly) {
            element = <RequireAuth>{element}</RequireAuth>;
        }

        return (
            <Route
                key={route.path}
                path={route.path}
                element={element}
            />
        );
    }, []);
    return (
        <Routes>
            {Object.values(routeConfig).map(renderRoute)}
        </Routes>
    );
}
