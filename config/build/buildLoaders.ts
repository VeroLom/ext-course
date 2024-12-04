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
            {
                loader: "css-loader",
                options: {
                    modules: {
                        localIdentName: options.isDev
                            ? '[path][name]__[local]--[hash:base64:4]'
                            : '[hash:base64:8]'
                    },
                }
            },
            "less-loader",
        ],
    }

    return [
        typescriptLoader,
        lessLoader
    ]
}