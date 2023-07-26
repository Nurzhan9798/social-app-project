import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { ArticleTextBlock } from '../../model/types/article';

interface ArticleTextBlockProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = (props: ArticleTextBlockProps) => {
    const { className, block } = props;

    return (
        <VStack
            gap="16"
            align="start"
            max
            className={classNames('', {}, [className])}
        >
            {
                block.title && <Text title={block.title} />
            }
            <VStack
                gap="8"
                align="start"
                max
            >

                {
                    block.paragraphs.map((paragraph, index) => (
                        <Text
                            key={index}
                            text={paragraph}
                        />
                    ))
                }
            </VStack>

        </VStack>
    );
};
