import { CSSProperties, memo } from 'react'
import clsx from 'clsx'
import s from './Skeleton.module.scss'

interface SkeletonProps {
    className?: string
    width?: string
    height?: string
    circle?: boolean
}

export const Skeleton = memo((props: SkeletonProps) => {
    const { className, width, height, circle } = props

    const styles: CSSProperties = {
        width,
        height: circle ? width : (height ?? width),
        borderRadius: circle ? '50%' : 'none'
    }

    return (
        <div className={clsx([s.Skeleton, className])} style={styles}>
        </div>
    )
})
