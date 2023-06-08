import React from 'react';
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
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <AppRoute />
            </div>
        </div>
    );
};

export default App;
