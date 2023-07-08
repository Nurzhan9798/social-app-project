import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page';

function AboutPage() {
    const { t } = useTranslation();
    return (
        <Page>
            {t('ABOUT PAGE')}
        </Page>
    );
}

export default AboutPage;
