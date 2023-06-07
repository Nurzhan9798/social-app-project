import {render} from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./providers/ThemeProvider/ThemeProvider";

render(
    <ThemeProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById("root")
)
