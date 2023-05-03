import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './LoginForm.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../../model/slice/loginSlice'
import { selectLoginState } from '../../model/selectors/selectLoginState'
import { loginByUsername } from 'features/AuthByUserName/model/services/loginByUsername'
import { Text, ThemeText } from 'shared/ui/Text/ui/Text'

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { username, password, isLoading, error } = useSelector(selectLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onClickLoginSubmit = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, password, username])

    return (
        <div className={clsx([s.loginForm, className])}>
            <Text title={t('authorization')} className={s.loginTitle} />
            {error && <Text text={error} theme={ThemeText.ERROR} className={s.loginError} />}
            <Input
                value={username}
                onChange={onChangeUsername}
                label={t('username')}
            />
            <Input
                value={password}
                type='password'
                onChange={onChangePassword}
                label={t('password')}
            />
            <Button
                theme={ThemeButton.PRIMARY}
                className={s.loginButton}
                onClick={onClickLoginSubmit}
                disabled={isLoading}
            >
                {t('sign in')}
            </Button>
        </div>
    )
})
