export const createdEnteredTextSlice = (set) => ({
    enteredText: '',
    cleanEnteredText: '',
    
    setEnteredText: (value) => set({ enteredText: value }),
    setCleanEnteredText: (value) => set({ cleanEnteredText: value }),
});
