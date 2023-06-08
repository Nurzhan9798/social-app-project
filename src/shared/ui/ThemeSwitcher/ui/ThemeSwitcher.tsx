import { classNames } from 'shared/lib/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from 'shared/ui/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export function ThemeSwitcher(props: ThemeSwitcherProps) {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames(cls.ThemeSwitcher, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR} onClick={toggleTheme}>
                {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
            </Button>
        </div>
    );
}
