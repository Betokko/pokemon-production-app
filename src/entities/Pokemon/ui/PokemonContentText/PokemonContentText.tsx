import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './PokemonContentText.module.scss'
import { memo } from 'react'
import { IPokemonContent } from 'entities/Pokemon/model/types/pokemon'
import { Text, TextTheme } from 'shared/ui/Text'

interface PokemonContentTextProps {
    className?: string
    block: IPokemonContent
}

export const PokemonContentText = memo((props: PokemonContentTextProps) => {
    const { className, block } = props
    const { t } = useTranslation()

    return (
        <div key={block.id} className={clsx([s.PokemonContentText, className])}>
            {block.title && <Text title={block.title} theme={TextTheme.PRIMARY} className={s.title} />}
            {block.paragraphs?.map((paragraph, i) => <Text key={i} text={paragraph} className={s.paragraph} />)}
        </div>
    )
})
