import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui/Code';
import { ArticleCodeBlock } from '../../model/types/article';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = (props: ArticleCodeBlockProps) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.ArticleCodeBlock, {}, [className])}>
            <Code text={block.code} />
        </div>
    );
};
