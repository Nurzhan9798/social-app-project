import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widget/Page';
import { Text } from 'shared/ui/Text/Text';

function MainPage() {
    const { t } = useTranslation();
    return (
        <Page>
            {t('MAIN PAGE')}
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Text title="Users" />
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Text title="Admin" text="login=admin  password=123" />
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Text title="User" text="login=user  password=123" />
        </Page>
    );
}

export default MainPage;
