import { Theme } from '@radix-ui/themes';
import { useStore } from '../store/useStore';
import { useEffect } from 'react';

export const ThemeWrapper = ({ children }) => {
    const isDark = useStore((state) => state.isDark);
    const setDark = useStore((state) => state.setDark);

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

    return <Theme accentColor={isDark ? 'gray' : 'indigo'}>{children}</Theme>;
};
