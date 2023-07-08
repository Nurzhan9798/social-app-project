import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleListItem } from 'entity/Article/ui/ArticleListItem/ArticleListItem';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { ArticleListItemSkeleton } from 'entity/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    isLoading?: boolean;
    articles: Article[];
    view?: ArticleView
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.CARD ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton
            className={cls.card}
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
    } = props;

    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {getSkeletons(view)}
            </div>
        );
    }

    const renderArticle = (article: Article) => (
        <ArticleListItem
            isLoading={false}
            article={article}
            key={article.id}
            view={view}
        />
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length
                ? articles.map(renderArticle)
                : <Text text={t('Articles not found')} />}
        </div>
    );
};
