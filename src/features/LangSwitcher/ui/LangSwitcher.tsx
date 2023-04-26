import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './LangSwitcher.module.scss'
import TranslateIcon from 'shared/assets/icons/g_translate_black_24dp.svg'
import { Button, ThemeButton } from 'shared/ui/Button'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const { className } = props
    const { t, i18n } = useTranslation()
    const toggle = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')

    return (
        <Button
            className={clsx([s.langSwitcher, className])}
            onClick={toggle}
            theme={ThemeButton.CLEAR}
        >
            {t('lng')}
            <TranslateIcon fill={'var(--primary-color)'}/>
        </Button>
    )
}
