import webpack, { DefinePlugin, RuleSetRule } from 'webpack'

import path from 'path'
import { IBuildPaths } from '../build/types/config'
import { buildCssLoader } from '../build/loaders/buildCssLoader'

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: IBuildPaths = {
        src: path.resolve(__dirname, '..', '..', 'src'),
        entry: '',
        build: '',
        html: ''
    }
    config.resolve?.modules?.unshift(paths.src)
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
    config.plugins?.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('')
    }))
    return config
}
