import { MutableRefObject, ReactNode, useRef } from 'react'
import clsx from 'clsx'
import s from './Page.module.scss'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll'

interface PageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

export const Page = (props: PageProps) => {
    const { className, children, onScrollEnd } = props
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

    useInfiniteScroll({
        callback: onScrollEnd,
        triggerRef,
        wrapperRef
    })

    return (
        <section ref={wrapperRef} className={clsx([s.page, className])}>
            {children}
            <div ref={triggerRef}/>
        </section>
    )
}
