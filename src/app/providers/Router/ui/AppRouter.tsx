import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from '../lib/routeConfig'

export const AppRouter = () => {
    return (
        <Suspense fallback={null}>
            <Routes>
                {routeConfig.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className={'page-wrapper'}>
                                {element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};
