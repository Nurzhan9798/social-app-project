import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Icon } from 'shared/ui/Icon';
import { Card } from 'shared/ui/Card';
import { AppLink } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routre/routeConfig';
import { Avatar } from 'shared/ui/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
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
}

export const ArticleListItem = (props: ArticleListItemProps) => {
    const {
        className,
        isLoading,
        article,
        view = ArticleView.CARD,
    } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(`${RoutePath.article_details}${article.id}`);
    }, [article.id, navigate]);

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
                    <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}>
                        {t('Read more')}
                    </Button>
                    <Text text={String(article.views)} className={cls.views} />
                    <Icon Svg={EyeIcon} width={20} height={20} />
                </div>
            </Card>
        );
    }

    return (
        <Card
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            onClick={onOpenArticle}
        >
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
    );
};
