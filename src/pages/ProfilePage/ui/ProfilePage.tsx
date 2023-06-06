import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/DynamicModuleLoader'
import { profileReducer } from 'entities/Profile'

const reducers: TReducersList = {
    profile: profileReducer
}

const ProfilePage = () => {
    const { t } = useTranslation()

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                {t('profile page')}
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
