export const createIncludeSpacesHandlerSlice = (set) => ({
    includeSpaces: false,

    toggleIncludeSpaces: () =>
        set((state) => ({ includeSpaces: !state.includeSpaces })),
});
