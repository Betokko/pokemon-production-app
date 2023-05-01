import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './LoginForm.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const { className } = props
    const { t } = useTranslation()
    const [login, setLogin] = useState('')
    const onChangeLogin = (val: string) => { setLogin(val); console.log(val) }

    return (
        <div className={clsx([s.loginForm, className])}>
            <Input value={login} onChange={onChangeLogin}/>
            <Input type='password'/>
            <Button theme={ThemeButton.PRIMARY} className={s.loginButton}>
                {t('sign in')}
            </Button>
        </div>
    )
}
