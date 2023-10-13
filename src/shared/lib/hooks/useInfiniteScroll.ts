import { MutableRefObject, useEffect, useRef } from 'react'

export interface IUseInfiniteScrollOptions {
    callback?: () => void
    triggerRef: MutableRefObject<HTMLElement>
    wrapperRef: MutableRefObject<HTMLElement>
}

export const useInfiniteScroll = ({ callback, wrapperRef, triggerRef }: IUseInfiniteScrollOptions) => {
    const observer = useRef<IntersectionObserver | null>(null)

    useEffect(() => {
        const wrapperElement = wrapperRef.current
        const triggerElement = triggerRef.current

        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '10px 10px 10px 10px',
                threshold: 1.0
            }

            observer.current = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) callback()
            }, options)

            observer.current.observe(triggerElement)
        }

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (observer.current && triggerElement) observer.current.unobserve(triggerElement)
        }
    }, [callback, triggerRef, wrapperRef])
}
