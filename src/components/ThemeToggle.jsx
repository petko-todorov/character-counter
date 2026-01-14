import { Button } from '@radix-ui/themes';
import { useStore } from '../store/useStore';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export function ThemeToggle() {
    const isDark = useStore((state) => state.isDark);
    const toggleTheme = useStore((state) => state.toggleTheme);

    return (
        <Button onClick={toggleTheme}>
            {isDark ? <SunIcon /> : <MoonIcon />}
        </Button>
    );
}
