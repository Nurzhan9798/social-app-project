import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widget/Page';

interface AdminPanelProps {
    className?: string;
}

export const AdminPanel = memo((props: AdminPanelProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <Page>
            {t('AdminPanel')}
        </Page>
    );
});
