import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './Error.module.scss'

interface ErrorProps {
    className?: string
}

export const Error: FC<ErrorProps> = (props) => {
    const { className } = props
    const { t } = useTranslation()

    const refreshPage = () => { location.reload() }

    return (
        <div className={clsx([s.error, className])}>
            <p>{t('something went wrong')}</p>
            <button
                onClick={refreshPage}
            >
                {t('refresh page')}
            </button>
        </div>
    )
}
