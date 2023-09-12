import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './LoginForm.module.scss'
import { useSelector } from 'react-redux'
import { loginActions, loginReducer } from '../../model/slices/loginSlice'
import {
    getLoginError,
    getLoginIsLoading,
    getLoginPassword,
    getLoginUsername
} from '../../model/selectors/selectLoginState'
import { loginByUsername } from 'features/AuthByUserName/model/services/loginByUsername'
import { Button, ThemeButton } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import { Loader } from 'shared/ui/Loader'
import { Text, TextTheme } from 'shared/ui/Text/ui/Text'
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

interface LoginFormProps {
    className?: string
}

const initialReducers: TReducersList = {
    login: loginReducer
}

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginIsLoading)
    const error = useSelector(getLoginError)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onClickLoginSubmit = useCallback(async () => {
        await dispatch(loginByUsername({ username, password }))
    }, [dispatch, password, username])

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            {isLoading
                ? <Loader/>
                : <div className={clsx([s.loginForm, className])}>
                    <Text title={t('authorization')} className={s.loginTitle}/>
                    {error && <Text text={error} theme={TextTheme.ERROR} className={s.loginError}/>}
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
                </div>}
        </DynamicModuleLoader>
    )
})

export default LoginForm
