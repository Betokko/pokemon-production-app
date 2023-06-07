import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { IBuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildBabelLoaders } from './loaders/buildBabelLoaders'

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
    const scssLoader = buildCssLoader(isDev)
    const babelLoader = buildBabelLoaders(isDev)

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        tsLoader,
        scssLoader
    ]
}
