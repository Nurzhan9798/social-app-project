import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routre/routeConfig';

export function AppRoute() {
    return (
        <div className="page-wrapper">
            <Suspense fallback={<p />}>
                <Routes>
                    {
                        Object.values(routeConfig)
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
