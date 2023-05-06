import { lazy } from 'react'

export const LoginFormLazy = lazy(() => new Promise((resolve) => {
    setTimeout(() => { // @ts-ignore
        resolve(import('./LoginForm'))
    }, 0)
}))
