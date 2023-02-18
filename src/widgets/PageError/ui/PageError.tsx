import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import s from './PageError.module.scss';

interface PageErrorProps {
    className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(s.pageError, {}, [className])}>
            <p>{t('error')}</p>
            <Button
                onClick={reloadPage}
            >
                {t('refresh')}
            </Button>
        </div>
    );
};
