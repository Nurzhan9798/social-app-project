import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPath} from "./config/build/types/config";
import path from "path";

const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
}

export default (env: BuildEnv) => {


    const mode = env.mode || "development"
    const port = env.port || 4000;

    const isDev = mode === "development"

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port
    });
}
