import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entity/Counter';

function AboutPage() {
    const { t } = useTranslation();
    return (
        <div>
            {t('ABOUT PAGE')}
            <Counter />
        </div>
    );
}

export default AboutPage;
