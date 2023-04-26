import { type IBuildOptions } from './types/config'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

export function buildPlugins ({ paths, isDev }: IBuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: 'css/[name].[contenthash].css'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        })
    ]
    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin())
        plugins.push(new webpack.HotModuleReplacementPlugin())
    }
    return plugins
}
