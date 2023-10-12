import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './ProfileCard.module.scss'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text'
import { Input } from 'shared/ui/Input'
import { IProfile } from '../model/types/profile'
import { Loader } from 'shared/ui/Loader'
import { Placeholder } from 'shared/ui/Placeholder'
import { Currency, CurrencySelect } from 'entities/Currency'

interface ProfileCardProps {
    className?: string
    data?: IProfile
    isLoading?: boolean
    error?: string
    onChangeFirstname?: (value?: string) => void
    onChangeLastname?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangePlaceholder?: (value?: string) => void
    onChangeUsername?: (value?: string) => void
    onChangeCurrency?: (currency?: Currency) => void
    readOnly?: boolean
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangePlaceholder,
        onChangeUsername,
        onChangeCurrency,
        readOnly
    } = props
    const { t } = useTranslation()

    if (isLoading) {
        return (
            <div className={clsx([s.profileCard, s.loading, className])}>
                <Loader/>
            </div>
        )
    }

    if (error) {
        return (
            <div className={clsx([s.profileCard, s.error, className])}>
                <Text
                    title={error}
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                />

            </div>
        )
    }

    return (
        <div className={clsx([s.profileCard, className])}>
            <div className={s.data}>
                {data?.placeholder && (
                    <div className={s.placeholderWrapper}>
                        <Placeholder src={data.placeholder} size={'20rem'}/>
                    </div>
                )}
                <div className={s.inputsWrapper}>
                    <Input
                        value={data?.firstname}
                        label={t('firstname')}
                        onChange={onChangeFirstname}
                        readOnly={readOnly}
                    />
                    <Input
                        value={data?.lastname}
                        label={t('lastname')}
                        onChange={onChangeLastname}
                        readOnly={readOnly}
                    />
                    <Input
                        value={data?.age}
                        label={t('age')}
                        onChange={onChangeAge}
                        readOnly={readOnly}
                        type='number'
                    />
                    <Input
                        value={String(data?.city)}
                        label={t('city')}
                        onChange={onChangeCity}
                        readOnly={readOnly}
                    />
                    <Input
                        value={String(data?.username)}
                        label={t('username')}
                        onChange={onChangeUsername}
                        readOnly={readOnly}
                    />
                    <Input
                        value={String(data?.placeholder)}
                        label={t('placeholder')}
                        onChange={onChangePlaceholder}
                        readOnly={readOnly}
                    />
                    <CurrencySelect
                        value={data?.currency}
                        onChange={onChangeCurrency}
                        readOnly={readOnly}
                    />
                </div>
            </div>
        </div>
    )
}
