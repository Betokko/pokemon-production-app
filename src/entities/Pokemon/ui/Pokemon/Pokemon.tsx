import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './Pokemon.module.scss'
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/DynamicModuleLoader'
import { pokemonReducer } from '../../model/slice/pokemonSlice'
import { memo, useCallback, useEffect } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchPokemonById } from '../../model/services/fetchPokemonById'
import { useSelector } from 'react-redux'
import { getPokemonData, getPokemonError, getPokemonIsLoading } from '../../model/selectors/pokemonSelectors'
import { Text, TextAlign, TextSize, TextTheme } from 'shared/ui/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Placeholder } from 'shared/ui/Placeholder'
import { IPokemonContent } from '../../model/types/pokemon'
import { PokemonContentText } from '../PokemonContentText/PokemonContentText'
import { PokemonContentImg } from '../PokemonContentImg/PokemonContentImg'

interface PokemonProps {
    className?: string
    id?: string
}

const reducers: TReducersList = {
    pokemon: pokemonReducer
}

export const Pokemon = memo((props: PokemonProps) => {
    const { className, id } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const isLoading = useSelector(getPokemonIsLoading)
    const error = useSelector(getPokemonError)
    const pokemon = useSelector(getPokemonData)

    useEffect(() => {
        if (id) dispatch(fetchPokemonById(id))
    }, [dispatch, id])

    const renderBlock = useCallback((block: IPokemonContent, index: number) => {
        switch (block.type) {
        case 'text':
            return <PokemonContentText block={block} key={index}/>
        case 'img':
            return <PokemonContentImg block={block} key={index}/>
        default:
            return null
        }
    },
    [])

    let content

    if (isLoading) {
        content = (
            <div className={s.skeletonWrapper}>
                <Skeleton className={s.placeholder} width='20rem' circle />
                <Skeleton width='40rem' height='2rem' />
                <Skeleton width='100%' height='20rem' />
                <Skeleton width='100%' height='20rem' />
            </div>
        )
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                theme={TextTheme.ERROR}
                title={t('error')}
            />
        )
    } else {
        content = (
            <div className={s.wrapper}>
                {pokemon?.img && <Placeholder src={pokemon?.img} size='20rem' className={s.placeholder}/>}
                <Text title={pokemon?.name} size={TextSize.L}/>
                {pokemon?.content.map(renderBlock)}
            </div>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={clsx([s.Pokemon, className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    )
})
