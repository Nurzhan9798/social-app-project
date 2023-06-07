import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {MainPageAsync} from "./pages/Main.async";
import {AboutPageAsync} from "./pages/About.async";
import './style/index.scss'
import {useTheme} from "./providers/ThemeProvider/useTheme";
import {classNames} from "./helpers/classNames";

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
                    <Route path="/" element={<MainPageAsync />}/>
                    <Route path="/about" element={<AboutPageAsync />} />
                </Routes>
            </Suspense>

        </div>
    );
};

export default App;
