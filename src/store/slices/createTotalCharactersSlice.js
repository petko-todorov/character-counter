export const createTotalCharactersSlice = (set) => ({
    totalCharacters: 0,

    setTotalCharacters: (value) => set({ totalCharacters: value }),
});
