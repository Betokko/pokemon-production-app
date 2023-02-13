import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routesConfig } from 'shared/config/routesConfig/routesConfig';
import { useTranslation } from 'react-i18next';

export const AppRouter = () => {
    const { t } = useTranslation();

    return (
        <Suspense fallback={<div>{t('loading')}</div>}>
            <Routes>
                {routesConfig.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className="page-wrapper">
                                {element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};
