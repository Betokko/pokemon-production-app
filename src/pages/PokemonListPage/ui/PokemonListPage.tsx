import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { memo } from 'react'

interface PokemonListPageProps {
    className?: string
}

const PokemonListPage = (props: PokemonListPageProps) => {
    const { className } = props
    const { t } = useTranslation()

    return (
        <div className={clsx([className])}>
            {t('pokemon')}
        </div>
    )
}

export default memo(PokemonListPage)
