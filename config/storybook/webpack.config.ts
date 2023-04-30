import type webpack from 'webpack'
import { type RuleSetRule } from 'webpack'
import path from 'path'
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
    // @ts-expect-error
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        // @ts-expect-error
        if (/svg/.test(rule.test)) {
            return { ...rule, exclude: /\.svg$/i }
        } else {
            return rule
        }
    })
    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
    })
    config.module?.rules?.push(buildCssLoader(true))
    return config
}
