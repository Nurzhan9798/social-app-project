import React, {Suspense} from 'react';
import {classNames} from "shared/lib/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRoute} from "app/providers/routes";
import {Navbar} from "widget/Navbar";
import './style/index.scss'
import {Sidebar} from "shared/ui/Sidebar";


const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames("app", {hovered: false}, [theme, 'cls1'])}>
            <Suspense fallback={<div>Loading... </div>}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRoute />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
