import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import TranslateIcon from 'shared/assets/icons/translate.svg';
import s from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string
    withText?: boolean
}

export const LangSwitcher = (props: LangSwitcherProps) => {
    const { className, withText = true } = props;
    const { t, i18n } = useTranslation();
    const toggle = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(s.langSwitcher, {}, [className])}
            onClick={toggle}
            theme={ThemeButton.CLEAR}
        >
            <div className={s.wrapper}>
                <TranslateIcon fill="var(--primary-color)" />
                <p>
                    {
                        withText && `${t('language')}: ${
                            i18n.language === 'ru'
                                ? t('languageRu')
                                : t('languageEn')}`
                    }
                </p>
            </div>
        </Button>
    );
};
