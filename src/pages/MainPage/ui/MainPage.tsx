import { useTranslation } from 'react-i18next'
import { Loader } from 'shared/ui/Loader'

const MainPage = () => {
    const { t } = useTranslation()
    return (
        <div>
            {t('main')}
        </div>
    )
}

export default MainPage
