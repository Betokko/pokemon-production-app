import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './PokemonListItem.module.scss'
import { IPokemon, IPokemonContent, PokemonView } from '../../model/types/pokemon'
import { Text, TextAlign, TextSize } from 'shared/ui/Text'
import { Card } from 'shared/ui/Card/Card'
import { Button, ThemeButton } from 'shared/ui/Button'
import { PokemonContentText } from '../PokemonContentText/PokemonContentText'

import { RoutePath } from 'app/providers/Router/lib/routeConfig'
import { useNavigate } from 'react-router-dom'

interface PokemonListItemProps {
    className?: string
    pokemon: IPokemon
    view: PokemonView
}

export const PokemonListItem = memo((props: PokemonListItemProps) => {
    const { className, pokemon, view } = props
    const { t } = useTranslation()
    const navigate = useNavigate()

    const onOpenPokemon = useCallback(() => {
        navigate(`${RoutePath.pokemon}/${pokemon.id}`)
    }, [navigate, pokemon.id])

    if (view === PokemonView.LIST) {
        const textBlocks = pokemon.content.find(content => content.type === 'text')

        return (
            <div className={clsx([s.PokemonListItem, className, s[view]])}>
                <Card className={s.card}>
                    <div>
                        <Text title={pokemon.type.join(', ')} className={s.types}/>
                        <Text title={pokemon.name} size={TextSize.L} className={s.name}/>
                    </div>
                    <div className={s.body}>
                        <img src={pokemon.img} className={s.img} alt={pokemon.name}/>
                        {textBlocks && <PokemonContentText block={textBlocks} className={s.textBlock}/>}
                    </div>
                    <div className={s.footer}>
                        <Button onClick={onOpenPokemon} theme={ThemeButton.OUTLINE}>
                            {t('learn more')}
                        </Button>
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <div className={clsx([s.PokemonListItem, s[view], className])}>
            <Card onClick={onOpenPokemon} className={s.card}>
                <div className={s.imageWrapper}>
                    <img src={pokemon.img} className={s.img} alt={pokemon.name}/>
                    <Text text={pokemon.id} className={s.id}/>
                </div>
                <div className={s.infoWrapper}>
                    <Text title={pokemon.type.join(', ')} className={s.types}/>
                    <Text title={pokemon.name} size={TextSize.L} className={s.name}/>
                </div>
            </Card>
        </div>
    )
})
