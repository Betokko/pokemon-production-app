import { lazy } from 'react'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line promise/param-names
export const MainPageLazy = lazy(() => new Promise((res) => setTimeout(() => { res(import('./MainPage')) }, 1000)))
