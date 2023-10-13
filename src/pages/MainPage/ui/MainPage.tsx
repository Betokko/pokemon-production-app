import { useTranslation } from 'react-i18next'
import { Page } from 'shared/Page/Page'

const MainPage = () => {
    const { t } = useTranslation()
    return (
        <Page>
            {t('main')}
        </Page>
    )
}

export default MainPage
