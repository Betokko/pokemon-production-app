import path from 'path'
import type webpack from 'webpack'
import { type IBuildPaths } from '../build/types/config'
import { buildCssLoader } from '../build/loaders/buildCssLoader'

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: IBuildPaths = {
        src: path.resolve(__dirname, '..', '..', 'src'),
        entry: '',
        build: '',
        html: ''
    }
    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('.ts', '.tsx')
    config.module?.rules?.push(buildCssLoader(true))
    return config
}
