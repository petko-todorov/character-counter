export const createThemeSlice = (set) => ({
    isDark: window.matchMedia('(prefers-color-scheme: dark)').matches,

    toggleTheme: () => set((state) => ({ isDark: !state.isDark })),

    setDark: (val) => set({ isDark: val }),
});
