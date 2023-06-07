import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './ArticlesPage.module.scss'
import { memo } from 'react'

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props
    const { t } = useTranslation()

    return (
        <div className={clsx([s.ArticlesPage, className])}>
            {t('pokemons')}
        </div>
    )
}

export default memo(ArticlesPage)
