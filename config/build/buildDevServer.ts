import { IBuildOptions } from './types/config'
import { Configuration } from 'webpack-dev-server'

export function buildDevServer (options: IBuildOptions): Configuration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true
    }
}
