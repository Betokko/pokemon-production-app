import { lazy } from 'react'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line promise/param-names,max-len
export const ArticlesPageLazy = lazy(() => new Promise((res) => setTimeout(() => { res(import('./ArticlesPage')) }, 1000)))
