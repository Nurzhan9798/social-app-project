import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget } from 'react';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    isLoading?: boolean;
    articles: Article[];
    target?: HTMLAttributeAnchorTarget;
    view?: ArticleView
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.CARD ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton
            key={index}
            view={view}
        />
    ));

export const ArticleList = (props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.CARD,
        target,
    } = props;

    const { t } = useTranslation();

    const renderArticle = (article: Article) => (
        <ArticleListItem
            isLoading={false}
            article={article}
            key={article.id}
            view={view}
            target={target}
        />
    );

    if (!isLoading && articles.length === 0) {
        return <Text text={t('Articles not found')} />;
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0 && articles.map(renderArticle)}
            {isLoading && getSkeletons(view)}
        </div>
    );
};
