import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './PokemonListPage.module.scss'
import { memo } from 'react'
import { PokemonPage } from 'pages/PokemonPage'

interface PokemonListPageProps {
    className?: string
}

const PokemonListPage = (props: PokemonListPageProps) => {
    const { className } = props
    const { t } = useTranslation()

    return (
        <div className={clsx([s.PokemonListPage, className])}>
            {t('pokemon')}
        </div>
    )
}

export default memo(PokemonListPage)
