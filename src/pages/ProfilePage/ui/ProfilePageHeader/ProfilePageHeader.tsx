import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './ProfilePageHeader.module.scss'
import { Text } from 'shared/ui/Text'
import { Button, ThemeButton } from 'shared/ui/Button'
import { useSelector } from 'react-redux'
import { getProfileData, getProfileReadOnly, profileActions, updateProfileData } from 'entities/Profile'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { d } from '@pmmmwh/react-refresh-webpack-plugin/types/options'
import { getUserAuthData } from 'entities/User'

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const { className } = props
    const { t } = useTranslation()
    const readOnly = useSelector(getProfileReadOnly)
    const dispatch = useAppDispatch()
    const authData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)
    const canEdit = authData?.id === profileData?.id
    const isAdmin = profileData?.id === 1

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false))
    }, [dispatch])
    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])
    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch])

    return (
        <div className={clsx([s.profilePageHeader, className])}>
            <Text title={t('profile')} />
            {canEdit && <div>
                {readOnly
                    ? (<Button
                        theme={ThemeButton.OUTLINE}
                        onClick={onEdit}
                        disabled={isAdmin}
                    >
                        {t('edit')}
                    </Button>)
                    : (<div className={s.controls}>
                        <Button
                            theme={ThemeButton.OUTLINE}
                            onClick={onCancelEdit}
                        >
                            {t('cancel')}
                        </Button>
                        <Button
                            theme={ThemeButton.OUTLINE_RED}
                            onClick={onSave}
                        >
                            {t('save')}
                        </Button>
                    </div>)}
            </div>}
        </div>
    )
}
