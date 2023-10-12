import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './PokemonList.module.scss'
import { IPokemon, PokemonView } from '../../model/types/pokemon'
import { PokemonListItem } from '../PokemonListItem/PokemonListItem'
import { PokemonListItemSkeleton } from 'entities/Pokemon/ui/PokemonListItem/PokemonListItemSkeleton'

interface PokemonListProps {
    className?: string
    pokemones: IPokemon[]
    isLoading?: boolean
    view: PokemonView
}

export const PokemonList = memo((props: PokemonListProps) => {
    const { className, pokemones, view = PokemonView.LIST, isLoading } = props
    const { t } = useTranslation()

    const renderPokemon = (pokemon: IPokemon) => <PokemonListItem pokemon={pokemon} view={view} key={pokemon.id}/>

    if (isLoading) {
        return (
            <div className={clsx([s.PokemonList, s[view], className])}>
                {new Array(view === PokemonView.LIST ? 2 : 16)
                    .fill(null)
                    .map((_, i) => <PokemonListItemSkeleton view={view} key={i} />)}
            </div>
        )
    }

    return (
        <div className={clsx([s.PokemonList, s[view], className])}>
            {pokemones.length > 0
                ? pokemones.map(pokemon => renderPokemon(pokemon))
                : null}
        </div>
    )
})
