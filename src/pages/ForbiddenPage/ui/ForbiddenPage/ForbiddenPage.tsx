import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widget/Page';
import { HStack } from 'shared/ui/Stack';
import { Text, TextTheme } from 'shared/ui/Text/Text';

export const ForbiddenPage = memo(() => {
    const { t } = useTranslation();

    return (
        <Page>
            <HStack max justify="center">
                <Text title={t('Access denied')} theme={TextTheme.ERROR} />
            </HStack>
        </Page>
    );
});
