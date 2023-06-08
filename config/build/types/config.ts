export type BuildMode = 'development' | 'production';

export interface BuildPath {
    entry: string;
    output: string;
    html: string;
    src: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPath,
    isDev: boolean;
    port: number;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}
