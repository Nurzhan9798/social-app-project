import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {useTheme} from "./providers/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

import './style/index.scss'

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames("app", {hovered: false}, [theme, 'cls1'])}>
            <button onClick={toggleTheme}>Theme switch</button>
            <hr/>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
            <Suspense fallback={<p>Loading..</p>}>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </Suspense>

        </div>
    );
};

export default App;
