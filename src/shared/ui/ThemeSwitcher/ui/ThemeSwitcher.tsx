import { useTheme } from 'app/providers/ThemeProvider';
import ThemeSwitcherIcon from 'shared/assets/icons/theme-switcher.svg';
import { Icon } from 'shared/ui/Icon';

export function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme();
    return (
        <Icon Svg={ThemeSwitcherIcon} clickable onClick={toggleTheme} />
    );
}
