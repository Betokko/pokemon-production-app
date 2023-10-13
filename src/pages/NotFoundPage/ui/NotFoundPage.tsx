import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './NotFoundPage.module.scss'
import { Page } from 'shared/Page/Page'

interface NotFoundPageProps {
    className?: string
}
export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
    const { className } = props
    const { t } = useTranslation()

    return (
        <Page className={clsx([s.notFoundPage, className])}>
            {t('page not found')}
        </Page>
    )
}
