import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widget/Page';

function MainPage() {
    const { t } = useTranslation();
    return (
        <Page>
            {t('MAIN PAGE')}
        </Page>
    );
}

export default MainPage;
