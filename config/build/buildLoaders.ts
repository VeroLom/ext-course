import {RuleSetRule} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders(options: BuildOptions): RuleSetRule[] {

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const lessLoader = {
        test: /\.less$/i,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            "css-loader",
            "less-loader",
        ],
    }

    return [
        typescriptLoader,
        lessLoader
    ]
}