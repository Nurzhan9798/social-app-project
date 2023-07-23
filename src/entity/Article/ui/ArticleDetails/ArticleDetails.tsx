import { classNames } from 'shared/lib/classNames/classNames';
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
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleVideoBlockComponent } from '../ArticleVideoBlockComponent/ArticleVideoBlockComponent';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { articleDetailsReducers } from '../../model/slices/articleDetailsSlice';
import { fetchArticleDetailsById } from '../../model/services/fetchArticleDetailsById/fetchArticleDetailsById';
import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError/getArticleDetailsError';
import { getArticleDetailsData } from '../../model/selectors/getArticleDetailsData/getArticleDetailsData';
import { getArticleDetailsLoading } from '../../model/selectors/getArticleDetailsLoading/getArticleDetailsLoading';
import cls from './ArticleDetails.module.scss';

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
                    className={cls.block}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
        case ArticleBlockType.VIDEO:
            return (
                <ArticleVideoBlockComponent
                    key={block.id}
                    className={cls.block}
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
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
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
                <div className={cls.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={cls.avatar}
                    />
                </div>
                <Text
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <div className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={EyeIcon} height={20} width={20} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={CalendarIcon} height={20} width={20} />
                    <Text text={article?.createdAt} />
                </div>
                {article?.blocks.map(renderBlock)}
            </>

        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>

    );
};
