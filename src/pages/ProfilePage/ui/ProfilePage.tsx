import { useTranslation } from 'react-i18next'
import s from './ProfilePage.module.scss'
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/DynamicModuleLoader'
import {
    fetchProfileData,
    getProfileForm,
    getProfileReadOnly,
    profileActions,
    ProfileCard,
    profileReducer
} from 'entities/Profile'
import { useCallback, useEffect } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import { getProfileError, getProfileIsLoading } from 'entities/Profile/model/selectors/profileSelectors'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { Currency } from 'entities/Currency'
import { useParams } from 'react-router-dom'

const reducers: TReducersList = {
    profile: profileReducer
}

const ProfilePage = () => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const fromData = useSelector(getProfileForm)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsLoading)
    const readOnly = useSelector(getProfileReadOnly)
    const { id } = useParams<{ id: string }>()

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ firstname: value }))
    }, [dispatch])

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value }))
    }, [dispatch])

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value) }))
    }, [dispatch])

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value }))
    }, [dispatch])

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value }))
    }, [dispatch])

    const onChangePlaceholder = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ placeholder: value ?? 'https://placehold.co/200x200' }))
    }, [dispatch])

    const onChangeCurrency = useCallback((value?: Currency) => {
        dispatch(profileActions.updateProfile({ currency: value }))
    }, [dispatch])

    useEffect(() => {
        if (id && __PROJECT__ !== 'storybook') dispatch(fetchProfileData(id))
    }, [dispatch, id])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={s.profilePage}>
                <ProfilePageHeader/>
                <ProfileCard
                    data={fromData}
                    isLoading={isLoading}
                    error={error}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangePlaceholder={onChangePlaceholder}
                    onChangeCurrency={onChangeCurrency}
                    readOnly={readOnly}
                />
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
