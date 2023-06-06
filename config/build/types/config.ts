export type TBuildMode = 'production' | 'development'

export interface IBuildPaths {
    entry: string
    build: string
    html: string
    src: string
}

export interface IBuildEnv {
    mode: TBuildMode
    port: number
    apiURL: string
}

export interface IBuildOptions {
    mode: TBuildMode
    paths: IBuildPaths
    isDev: boolean
    port: number
    apiURL: string
}
