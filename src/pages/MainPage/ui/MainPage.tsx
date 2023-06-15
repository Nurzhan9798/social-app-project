import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entity/Counter';

function MainPage() {
    const { t } = useTranslation();
    return (
        <div>
            {t('MAIN PAGE')}
            <Counter />

        </div>
    );
}

export default MainPage;
