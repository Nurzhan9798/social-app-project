import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';

function MainPage() {
    const { t } = useTranslation();
    return (
        <div>
            {t('MAIN PAGE')}
        </div>
    );
}

export default MainPage;
