import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { useMemo } from 'react';
import { SortOrder } from 'shared/types/SortOrder';
import { useTranslation } from 'react-i18next';
import { HStack } from 'shared/ui/Stack';
import { ArticleSortField } from '../../model/types/article';

interface ArticleSortSelectorProps {
    className?: string;
    order: SortOrder,
    sort: ArticleSortField,
    onSortChange: (value: ArticleSortField) => void;
    onOrderChange: (value: SortOrder) => void;
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
    const {
        className,
        sort,
        order,
        onSortChange,
        onOrderChange,
    } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => ([
        {
            value: 'asc',
            content: t('ascending'),
        },
        {
            value: 'desc',
            content: t('descending'),
        },
    ]), [t]);

    const sortOptions = useMemo<SelectOption<ArticleSortField>[]>(() => ([
        {
            value: ArticleSortField.CREATED,
            content: t('created at'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('views'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('title'),
        },
    ]), [t]);

    return (
        <HStack
            gap="8"
            className={classNames('', {}, [className])}
        >
            <Select
                options={sortOptions}
                label={t('Sort')}
                onChange={onSortChange}
                value={sort}
            />
            <Select
                options={orderOptions}
                label={t('Order')}
                onChange={onOrderChange}
                value={order}
            />
        </HStack>
    );
};
