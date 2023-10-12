import { memo } from 'react'
import clsx from 'clsx'
import s from './PokemonListItem.module.scss'
import { PokemonView } from '../../model/types/pokemon'
import { Card } from 'shared/ui/Card/Card'

import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

interface PokemonListItemSkeletonProps {
    className?: string
    view: PokemonView
}

export const PokemonListItemSkeleton = memo((props: PokemonListItemSkeletonProps) => {
    const { view, className } = props

    if (view === PokemonView.LIST) {
        return (
            <div className={clsx([s.PokemonListItem, className, s[view]])}>
                <Card className={s.card}>
                    <div>
                        <Skeleton className={s.name}/>
                    </div>
                    <div className={s.body}>
                        <Skeleton className={s.img}/>
                        <Skeleton className={s.textBlock} height={'10rem'}/>
                    </div>
                    <div className={s.footer}>
                        <Skeleton width={'10rem'} height={'50px'}/>
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <div className={clsx([s.PokemonListItem, s[view], className])}>
            <Card className={s.card}>
                <div className={s.imageWrapper}>
                    <Skeleton className={s.img}/>
                </div>
                <div className={s.infoWrapper}>
                    <Skeleton className={s.types}/>
                </div>
            </Card>
        </div>
    )
})
