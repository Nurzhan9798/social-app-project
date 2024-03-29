import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import CardTileIcon from 'shared/assets/icons/card-tile.svg';
import ListIcon from 'shared/assets/icons/list.svg';
import { HStack } from 'shared/ui/Stack';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView,
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.CARD,
        icon: CardTileIcon,
    },
    {
        view: ArticleView.LIST,
        icon: ListIcon,
    },
];
export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
    const {
        className,
        view,
        onViewClick,
    } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <HStack
            gap="8"
            className={classNames('', {}, [className])}
        >
            {
                viewTypes.map((viewType, index) => (
                    <Button
                        theme={ButtonTheme.CLEAR}
                        onClick={onClick(viewType.view)}
                        key={index}
                    >
                        <Icon
                            Svg={viewType.icon}
                            className={classNames(cls.icons, { [cls.selected]: viewType.view === view }, [])}
                            width={20}
                            height={20}
                        />
                    </Button>
                ))
            }
        </HStack>
    );
};
