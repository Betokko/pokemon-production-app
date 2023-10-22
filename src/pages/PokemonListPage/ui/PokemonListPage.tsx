import { memo, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { PokemonList } from 'entities/Pokemon'
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/DynamicModuleLoader'
import { getPokemonList, pokemonListActions, pokemonListReducer } from '../model/slices/pokemonListSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchPokemonList } from '../model/services/fetchPokemonList'
import {
    getPokemonListPageHasMore,
    getPokemonListPageIsLoading,
    getPokemonListPageNum,
    getPokemonListPageView
} from '../model/selectors/pokemonListSelectors'
import { ViewSwitcher } from 'features/ViewSwitcher'
import s from './PokemonListPage.module.scss'
import { Page } from 'shared/Page/Page'
import { initPokemonListPage } from '../model/services/initPokemonListPage'

interface PokemonListPageProps {
    className?: string
}

const reducers: TReducersList = {
    pokemonList: pokemonListReducer
}

const PokemonListPage = (props: PokemonListPageProps) => {
    const { className } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const pokemones = useSelector(getPokemonList.selectAll)
    const isLoading = useSelector(getPokemonListPageIsLoading)
    const view = useSelector(getPokemonListPageView)
    const page = useSelector(getPokemonListPageNum)
    const hasMore = useSelector(getPokemonListPageHasMore)

    const onLoadNextPart = useCallback(() => {
        if (hasMore && !isLoading) {
            dispatch(pokemonListActions.setPage(page + 1))
            dispatch(fetchPokemonList({
                page: page + 1
            }))
        }
    }, [dispatch, hasMore, isLoading, page])

    useEffect(() => {
        dispatch(initPokemonListPage())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true} >
            <Page className={clsx([className])} onScrollEnd={onLoadNextPart}>
                <div className={s.header}>
                    <ViewSwitcher view={view} />
                    {t('pokemon')}
                </div>
                <PokemonList
                    pokemones={pokemones}
                    isLoading={isLoading}
                    view={view}
                />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(PokemonListPage)
