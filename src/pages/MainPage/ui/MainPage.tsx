import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button'

const MainPage = () => {
    const { t } = useTranslation()
    return (
        <div>
            {t('main')}
        </div>
    )
}

export default MainPage
