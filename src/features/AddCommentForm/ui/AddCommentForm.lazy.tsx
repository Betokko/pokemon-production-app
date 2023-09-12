
import { FC, lazy } from 'react'
import { IAddCommentFormProps } from './AddCommentForm'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// eslint-disable-next-line promise/param-names,max-len
export const AddCommentFormLazy = lazy<FC<IAddCommentFormProps>>(() => new Promise((res) => setTimeout(() => { res(import('./AddCommentForm')) }, 1000)))
