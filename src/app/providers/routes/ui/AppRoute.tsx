import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {routeConfig} from "shared/config/routeConfig";

export const AppRoute = () => {
    return (
        <div className="page-wrapper">
            <Suspense fallback={<p>Loading..</p>}>
                <Routes>
                    {
                        Object.values(routeConfig)
                            .map(({path, element}) =>
                                <Route
                                    key={path}
                                    path={path}
                                    element={element}
                                />
                            )

                    }
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};
