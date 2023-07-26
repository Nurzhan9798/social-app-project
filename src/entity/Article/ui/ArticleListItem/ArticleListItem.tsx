import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';
import { RoutePath } from 'shared/config/routre/routeConfig';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget } from 'react';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { HStack, VStack } from 'shared/ui/Stack';
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
            <Card className={classNames('', {}, [className, cls[view]])}>
                <VStack align="start" gap="16" max>
                    <HStack justify="between" max>
                        <HStack gap="8">
                            <Avatar size={30} src={article.user.avatar} />
                            <Text text={article.user.username} />
                        </HStack>
                        <Text text={article.createdAt} />
                    </HStack>
                    <VStack gap="4" align="start">
                        <Text title={article.title} />
                        <Text text={article.type.join(', ')} />
                    </VStack>
                    <img src={article.img} className={cls.img} alt={article.title} />
                    <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    <HStack justify="between" max>
                        <AppLink to={`${RoutePath.article_details}${article.id}`} target={target}>
                            {t('Read more')}
                        </AppLink>
                        <HStack gap="4">
                            <Text text={String(article.views)} />
                            <Icon Svg={EyeIcon} width={20} height={20} />
                        </HStack>
                    </HStack>
                </VStack>
            </Card>
        );
    }

    return (
        <AppLink
            to={`${RoutePath.article_details}${article.id}`}
            target={target}
            className={classNames('', {}, [className, cls[view]])}
        >
            <Card className={cls[view]}>
                <VStack gap="8" align="start">
                    <div className={cls.imgWrapper}>
                        <img src={article.img} alt={article.title} className={cls.img} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <HStack justify="between" max>
                        <Text text={article.type.join(', ')} className={cls.types} />
                        <HStack gap="4">
                            <Text text={String(article.views)} />
                            <Icon Svg={EyeIcon} width={20} height={20} />
                        </HStack>
                    </HStack>
                    <Text title={article.title} className={cls.title} />
                </VStack>
            </Card>
        </AppLink>

    );
};
