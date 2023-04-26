import type webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type IBuildOptions } from './types/config'

export function buildLoaders (options: IBuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }
    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')), /// \.module\.\w+$/i.test(filename)
                        localIdentName: isDev ? '[local]--[hash:base64:4]' : '[hash:base64:8]'
                    }
                }
            },
            'sass-loader'
        ]
    }
    const babelLoader = {
        test: /\.(?:js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env']
                ]
            }
        }
    }

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        tsLoader,
        scssLoader
    ]
}
