import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/DynamicModuleLoader'
import { fetchProfileData, profileReducer } from 'entities/Profile'
import { useEffect } from 'react'
import { ProfileCard } from 'entities/Profile/ui/ProfileCard'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

const reducers: TReducersList = {
    profile: profileReducer
}

const ProfilePage = () => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                <ProfileCard/>
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
