import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import s from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(s.notFoundPage, {}, [className])}>
            <span>404</span>
            <p>
                {
                    `${t('notFound')} 😥`
                }
            </p>
        </div>
    );
};
