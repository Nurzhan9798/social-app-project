import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import React from 'react';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import { useInitialEffect } from 'shared/hooks/useInitialEffect';
import { HStack, VStack } from 'shared/ui/Stack';
import { articleDetailsReducers } from '../../model/slices/articleDetailsSlice';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleVideoBlockComponent } from '../ArticleVideoBlockComponent/ArticleVideoBlockComponent';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { fetchArticleDetailsById } from '../../model/services/fetchArticleDetailsById/fetchArticleDetailsById';
import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError/getArticleDetailsError';
import { getArticleDetailsData } from '../../model/selectors/getArticleDetailsData/getArticleDetailsData';
import { getArticleDetailsLoading } from '../../model/selectors/getArticleDetailsLoading/getArticleDetailsLoading';

interface ArticleDetailsProps {
    articleId: string;
    className?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducers,
};

export const ArticleDetails = (props: ArticleDetailsProps) => {
    const {
        className,
        articleId,
    } = props;
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();
    const loading = useSelector(getArticleDetailsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    useInitialEffect(() => {
        dispatch(fetchArticleDetailsById(articleId));
    });

    const renderBlock = (block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    block={block}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    block={block}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    block={block}
                />
            );
        case ArticleBlockType.VIDEO:
            return (
                <ArticleVideoBlockComponent
                    key={block.id}
                    block={block}
                />
            );
        default:
            return null;
        }
    };
    let content;

    if (loading) {
        content = (
            <>
                <HStack max justify="center">
                    <Skeleton width={200} height={200} border="50%" />
                </HStack>
                <Skeleton width={300} height={32} />
                <Skeleton width={600} height={24} />
                <Skeleton width="100%" height={200} />
                <Skeleton width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
                title={t('An error occurred while loading the article.')}
            />
        );
    } else {
        content = (
            <>
                <HStack max justify="center">
                    <Avatar
                        size={200}
                        src={article?.img}
                    />
                </HStack>
                <Text
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <VStack align="start" gap="8">
                    <HStack gap="8">
                        <Icon Svg={EyeIcon} height={20} width={20} />
                        <Text text={String(article?.views)} />
                    </HStack>
                    <HStack gap="8">
                        <Icon Svg={CalendarIcon} height={20} width={20} />
                        <Text text={article?.createdAt} />
                    </HStack>
                </VStack>

                {article?.blocks.map(renderBlock)}
            </>

        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack
                align="start"
                gap="16"
                max
                className={className}
            >
                {content}
            </VStack>
        </DynamicModuleLoader>

    );
};
