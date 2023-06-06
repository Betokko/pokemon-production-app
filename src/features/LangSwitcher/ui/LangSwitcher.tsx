import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import TranslateIcon from 'shared/assets/icons/g_translate_black_24dp.svg'
import { Button, ThemeButton } from 'shared/ui/Button'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
    const { className } = props
    const { t, i18n } = useTranslation()
    const toggle = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')

    return (
        <Button
            className={clsx([className])}
            onClick={toggle}
            theme={ThemeButton.CLEAR}
            label={t('lng')}
        >
            <TranslateIcon fill={'var(--primary-color)'}/>
        </Button>
    )
})
