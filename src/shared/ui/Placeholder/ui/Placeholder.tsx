import clsx from 'clsx'
import s from './Placeholder.module.scss'
import { CSSProperties, SVGProps, useMemo, VFC } from 'react'

interface PlaceholderProps {
    className?: string
    src?: string
    size?: string
    alt?: string
}

export const Placeholder = (props: PlaceholderProps) => {
    const { className, src, size, alt = 'placeholder' } = props

    const styles = useMemo<CSSProperties>(() => {
        return {
            height: size,
            width: size,
            backgroundColor: src ? 'transparent' : 'var(--bg-inverted-color)'
        }
    }, [size, src])

    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={clsx([s.placeholder, className])}
        />
    )
}
