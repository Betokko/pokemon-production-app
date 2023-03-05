import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Input } from 'shared/ui/Input/Input';

const MainPage: FC = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');
    const onChange = (value: string) => setValue(value);

    return (
        <div>
            {t('main')}
            <BugButton />
            <Input value={value} onChange={onChange} label="Введите текст" />
        </div>
    );
};

export default MainPage;
