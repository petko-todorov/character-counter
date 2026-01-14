import { Button } from '@radix-ui/themes';
import { useThemeStore } from '../store/useThemeStore';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export function ThemeToggle() {
    const isDark = useThemeStore((state) => state.isDark);
    const toggleTheme = useThemeStore((state) => state.toggleTheme);

    return (
        <Button onClick={toggleTheme}>
            {isDark ? <SunIcon /> : <MoonIcon />}
        </Button>
    );
}
