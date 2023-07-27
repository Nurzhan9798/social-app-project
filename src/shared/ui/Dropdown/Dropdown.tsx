import { classNames } from 'shared/lib/classNames/classNames';
import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/ui';
import { AppLink } from '../AppLink/AppLink';
import cls from './Dropdown.module.scss';

export interface DropdownOption {
    content: string;
    disabled?: boolean;
    onClick?: () => void;
    href?: string;
}
interface DropdownProps {
    className?: string;
    trigger: ReactNode;
    options: DropdownOption[];
    direction?: DropdownDirection;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top right': cls.optionsTopRight,
    'top left': cls.optionsTopLeft,
};

export const Dropdown = (props: DropdownProps) => {
    const {
        className,
        trigger,
        options,
        direction = 'bottom right',
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
            <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {
                    options.map((item, index) => {
                        const content = ({ active }: {active: boolean}) => (
                            <button
                                type="button"
                                disabled={item.disabled}
                                onClick={item.onClick}
                                className={classNames(cls.item, { [cls.active]: active })}
                            >
                                {item.content}
                            </button>
                        );

                        if (item.href) {
                            return (
                                <Menu.Item key={item.content} as={AppLink} to={item.href} disabled={item.disabled}>
                                    {content}
                                </Menu.Item>
                            );
                        }

                        return (
                            <Menu.Item key={item.content} as={Fragment} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    })
                }

            </Menu.Items>
        </Menu>
    );
};
