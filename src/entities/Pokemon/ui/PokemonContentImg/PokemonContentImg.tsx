import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './PokemonContentImg.module.scss'
import { memo } from 'react'
import { IPokemonContent } from 'entities/Pokemon/model/types/pokemon'
import { Text, TextAlign } from 'shared/ui/Text/ui/Text'

interface PokemonContentImgProps {
    className?: string
    block: IPokemonContent
}

export const PokemonContentImg = memo((props: PokemonContentImgProps) => {
    const { className, block } = props
    const { t } = useTranslation()

    return (
        <div key={block.id} className={clsx([s.PokemonContentImg, className])}>
            <img src={block.src} />
            <Text text={block.title} align={TextAlign.CENTER}/>
        </div>
    )
})
