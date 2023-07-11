import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleVideoBlock } from '../../model/types/article';
import cls from './ArticleVideoBlockComponent.module.scss';

interface ArticleVideoBlockComponentProps {
    className?: string;
    block: ArticleVideoBlock;
}

export const ArticleVideoBlockComponent = (props: ArticleVideoBlockComponentProps) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.ArticleVideoBlockComponent, {}, [className])}>
            <iframe
                title={block.src}
                className={cls.video}
                src={block.src}
            />
        </div>
    );
};
