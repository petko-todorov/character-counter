import { Theme } from '@radix-ui/themes';
import { useThemeStore } from '../store/useThemeStore';
import { useEffect } from 'react';

export const ThemeWrapper = ({ children }) => {
    const isDark = useThemeStore((state) => state.isDark);
    const setDark = useThemeStore((state) => state.setDark);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark);
        document.documentElement.classList.toggle('light', !isDark);
    }, [isDark]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => setDark(e.matches);

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [setDark]);

    return <Theme accentColor={isDark ? 'red' : 'blue'}>{children}</Theme>;
};
