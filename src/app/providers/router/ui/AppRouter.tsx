import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routesConfig } from 'app/providers/router/config/routesConfig';
import { useTranslation } from 'react-i18next';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

export const AppRouter = () => {
    const { t } = useTranslation();

    return (
        <Suspense fallback={<PageLoader />}>
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
