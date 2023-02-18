import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';

interface BugButtonProps {
    className?: string
}

// Компонент для тетсирования ErrorBoundary
export const BugButton = ({ className }: BugButtonProps) => {
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={() => setError(true)}
            /* eslint-disable-next-line i18next/no-literal-string */
        >
            throw error
        </Button>
    );
};
