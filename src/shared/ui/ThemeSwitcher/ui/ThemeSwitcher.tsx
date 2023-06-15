import { useTheme } from 'app/providers/ThemeProvider';
import ThemeSwitcherIcon from 'shared/assets/icons/theme-switcher.svg';
import { Icon } from 'shared/ui/Icon';
import { memo } from 'react';

export const ThemeSwitcher = memo(() => {
    const { toggleTheme } = useTheme();
    return (
        <Icon Svg={ThemeSwitcherIcon} clickable onClick={toggleTheme} />
    );
});
