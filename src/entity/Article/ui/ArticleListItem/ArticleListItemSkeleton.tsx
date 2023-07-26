import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { HStack, VStack } from 'shared/ui/Stack';
import cls from './ArticleListItem.module.scss';
import { ArticleView } from '../../model/types/article';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.LIST) {
        return (
            <Card className={classNames('', {}, [className, cls[view]])}>
                <VStack align="start" gap="16" max>
                    <HStack align="center" justify="between" max>
                        <HStack gap="8">
                            <Skeleton border="50%" height={30} width={30} />
                            <Skeleton height={16} width={150} />
                        </HStack>
                        <Skeleton
                            height={16}
                            width={150}
                        />
                    </HStack>
                    <Skeleton height={24} width="50%" />
                    <Skeleton height={200} width="100%" />
                    <Skeleton height={36} width="80%" />
                </VStack>
            </Card>
        );
    }

    return (
        <Card className={cls[view]}>
            <VStack gap="8" align="start">
                <div className={cls.imgWrapper}>
                    <Skeleton width={200} height={200} className={cls.img} />
                </div>
                <Skeleton width={130} height={16} />
            </VStack>
        </Card>
    );
});
