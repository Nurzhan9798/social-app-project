import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = (props: ArticleImageBlockProps) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.ArticleImageBlock, {}, [className])}>
            <img src={block.src} alt={block.title} className={cls.img} />
            {block.title && (
                <Text
                    text={block.title}
                    align={TextAlign.CENTER}
                />
            )}
        </div>
    );
};