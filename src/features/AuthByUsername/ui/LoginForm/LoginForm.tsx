import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import s from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = (props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(s.loginForm, {}, [className])}>
            <Input type="text" className={s.input} label={t('userName')} />
            <Input type="text" className={s.input} label={t('password')} />
            <Button className={s.button}>
                {t('translation:signIn')}
            </Button>
        </div>
    );
};
