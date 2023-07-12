import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { Icon } from 'shared/ui/Icon';
import { Card } from 'shared/ui/Card';
import { RoutePath } from 'shared/config/routre/routeConfig';
import { Avatar } from 'shared/ui/Avatar';
import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget } from 'react';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { AppLink } from 'shared/ui/AppLink';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    isLoading: boolean;
    article: Article;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = (props: ArticleListItemProps) => {
    const {
        className,
        isLoading,
        article,
        view = ArticleView.CARD,
        target,
    } = props;
    const { t } = useTranslation();

    if (view === ArticleView.LIST) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <Card className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <div className={cls.header}>
                    <Avatar size={30} src={article.user.avatar} />
                    <Text text={article.user.username} className={cls.username} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <Text title={article.title} className={cls.title} />
                <Text text={article.type.join(', ')} className={cls.types} />
                <img src={article.img} className={cls.img} alt={article.title} />
                <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                <div className={cls.footer}>
                    <AppLink to={`${RoutePath.article_details}${article.id}`} target={target}>
                        {t('Read more')}
                    </AppLink>
                    <Text text={String(article.views)} className={cls.views} />
                    <Icon Svg={EyeIcon} width={20} height={20} />
                </div>
            </Card>
        );
    }

    return (
        <AppLink
            to={`${RoutePath.article_details}${article.id}`}
            target={target}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card>
                <div className={cls.imgWrapper}>
                    <img src={article.img} alt={article.title} className={cls.img} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    <Text text={article.type.join(', ')} className={cls.types} />
                    <Text text={String(article.views)} className={cls.views} />
                    <Icon Svg={EyeIcon} width={20} height={20} />
                </div>
                <Text title={article.title} className={cls.title} />
            </Card>
        </AppLink>

    );
};
