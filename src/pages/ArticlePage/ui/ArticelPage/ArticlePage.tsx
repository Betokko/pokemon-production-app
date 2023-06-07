import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './ArticlePage.module.scss'
import { memo } from 'react'

interface ArticlePageProps {
    className?: string
}

const ArticlePage = (props: ArticlePageProps) => {
    const { className } = props
    const { t } = useTranslation()

    return (
        <div className={clsx([s.ArticlePage, className])}>
        </div>
    )
}
export default memo(ArticlePage)
