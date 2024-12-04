import {RuleSetRule} from "webpack";

export function buildLoaders(): RuleSetRule[] {

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const lessLoader = {
        test: /\.less$/i,
        use: [
            "style-loader",
            "css-loader",
            "less-loader",
        ],
    }

    return [
        typescriptLoader,
        lessLoader
    ]
}