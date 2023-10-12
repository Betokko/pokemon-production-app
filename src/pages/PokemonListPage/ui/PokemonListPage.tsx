import { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { PokemonList } from 'entities/Pokemon'
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/DynamicModuleLoader'
import { getPokemonList, pokemonListActions, pokemonListReducer } from '../model/slices/pokemonListSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchPokemonList } from '../model/services/fetchPokemonList'
import { getPokemonListPageIsLoading, getPokemonListPageView } from '../model/selectors/pokemonListSelectors'
import { ViewSwitcher } from 'features/ViewSwitcher'
import s from './PokemonListPage.module.scss'

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

    useEffect(() => {
        dispatch(fetchPokemonList())
        dispatch(pokemonListActions.initState())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={clsx([className])}>
                <div className={s.header}>
                    <ViewSwitcher view={view} />
                    {t('pokemon')}
                </div>
                <PokemonList
                    pokemones={pokemones}
                    isLoading={isLoading}
                    view={view}
                />
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(PokemonListPage)
