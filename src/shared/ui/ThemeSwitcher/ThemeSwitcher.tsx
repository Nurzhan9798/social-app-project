import { useTheme } from 'app/providers/ThemeProvider';
import ThemeSwitcherIcon from 'shared/assets/icons/theme-switcher.svg';
import { memo } from 'react';
import { Icon } from '../Icon/Icon';

export const ThemeSwitcher = memo(() => {
    const { toggleTheme } = useTheme();
    return (
        <Icon
            Svg={ThemeSwitcherIcon}
            clickable
            onClick={toggleTheme}
            width={20}
            height={20}
        />
    );
});
