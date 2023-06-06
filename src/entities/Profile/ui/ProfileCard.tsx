import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './ProfileCard.module.scss'
import { useSelector } from 'react-redux'
import { getProfileData, getProfileError, getProfileIsLoading } from 'entities/Profile/model/selectors/profileSelectors'
import { Text } from 'shared/ui/Text/ui/Text'
import { Button, ThemeButton } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'

interface ProfileCardProps {
    className?: string
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { className } = props
    const { t } = useTranslation()
    const data = useSelector(getProfileData)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsLoading)

    return (
        <div className={clsx([s.profileCard, className])}>
            <div className={s.header}>
                <Text title={t('profile page')} />
                <Button theme={ThemeButton.SECONDARY}>
                    {t('edit')}
                </Button>
            </div>
            <div className={s.data}>
                <Input
                    value={data?.firstname}
                    label={t('firstname')}
                />
                <Input
                    value={data?.lastname}
                    label={t('lastname')}
                />
            </div>
        </div>
    )
}
