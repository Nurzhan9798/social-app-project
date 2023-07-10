import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select';
import { useSelector } from 'react-redux';
import { getArticlesPageOrder, getArticlesPageSort } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { useCallback, useMemo } from 'react';
import { SelectOption } from 'shared/ui/Select/ui/Select';
import { SortOrder } from 'shared/types/SortOrder';
import { ArticleSortField } from 'entity/Article/model/types/article';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { useTranslation } from 'react-i18next';
import cls from './ArticleSortSelector.module.scss';

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
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                className={cls.select}
                options={sortOptions}
                label={t('Sort')}
                onChange={onSortChange}
                value={sort}
            />
            <Select
                className={cls.select}
                options={orderOptions}
                label={t('Order')}
                onChange={onOrderChange}
                value={order}
            />
        </div>
    );
};
