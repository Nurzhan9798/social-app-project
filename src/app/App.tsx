import React from 'react';
import {classNames} from "shared/lib/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRoute} from "app/providers/routes";
import {Navbar} from "widget/Navbar";
import './style/index.scss'

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames("app", {hovered: false}, [theme, 'cls1'])}>
            <Navbar />
            <button onClick={toggleTheme}>Theme switch</button>
            <AppRoute />
        </div>
    );
};

export default App;
