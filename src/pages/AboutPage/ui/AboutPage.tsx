import React from 'react';
import { useTranslation } from 'react-i18next';

function AboutPage() {
    const { t } = useTranslation();
    return (
        <div>
            {t('ABOUT PAGE')}
        </div>
    );
}

export default AboutPage;
