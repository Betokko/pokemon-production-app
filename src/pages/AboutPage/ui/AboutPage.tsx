import { useTranslation } from 'react-i18next'
import { Page } from 'shared/Page/Page'

const AboutPage = () => {
    const { t } = useTranslation()
    return (
        <Page>
            {t('about')}
        </Page>
    )
}

export default AboutPage
