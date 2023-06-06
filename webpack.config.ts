import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { IBuildEnv, IBuildPaths } from './config/build/types/config'
import path from 'path'

export default (env: IBuildEnv) => {
    const paths: IBuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }
    const mode = env.mode || 'development'
    const isDev = mode === 'development'
    const PORT = env.port || 3000
    const apiURL = env.apiURL || 'http://localhost:8080'

    const config = () => buildWebpackConfig({ paths, mode, isDev, port: PORT, apiURL })

    return config()
}
