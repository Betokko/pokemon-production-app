import { memo, useCallback } from 'react'
import clsx from 'clsx'
import s from './ViewSwitcher.module.scss'
import GridView from 'shared/assets/icons/grid_view.svg'
import ListView from 'shared/assets/icons/list_view.svg'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { pokemonListActions } from 'pages/PokemonListPage/model/slices/pokemonListSlice'
import { PokemonView } from 'entities/Pokemon'
import { Button } from 'shared/ui/Button'

interface ViewSwitcherProps {
    className?: string
    view?: PokemonView
}

export const ViewSwitcher = memo((props: ViewSwitcherProps) => {
    const { className, view } = props
    const dispatch = useAppDispatch()

    const onViewGrid = useCallback(() => dispatch(pokemonListActions.setView(PokemonView.GRID)), [dispatch])
    const onViewList = useCallback(() => dispatch(pokemonListActions.setView(PokemonView.LIST)), [dispatch])
    const isActive = useCallback((currentView: PokemonView) => view === currentView && s.active, [view])

    return (
        <div className={clsx([s.viewSwitcher, className])}>
            <Button>
                <GridView
                    onClick={onViewGrid}
                    fill={'var(--primary-color)'}
                    className={clsx([isActive(PokemonView.GRID)])}
                />
            </Button>
            <Button>
                <ListView
                    onClick={onViewList}
                    fill={'var(--primary-color)'}
                    className={clsx([isActive(PokemonView.LIST)])}
                />
            </Button>
        </div>
    )
})
