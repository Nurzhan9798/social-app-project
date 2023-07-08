import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widget/Page';

function AboutPage() {
    const { t } = useTranslation();
    return (
        <Page>
            {t('ABOUT PAGE')}
        </Page>
    );
}

export default AboutPage;
