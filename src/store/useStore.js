import { create } from 'zustand';
import { createThemeSlice } from './slices/createThemeSlice';
import { createdEnteredTextSlice } from './slices/createEnteredTextSlice';
import { createTotalCharactersSlice } from './slices/createTotalCharactersSlice';

export const useStore = create((set) => ({
    ...createThemeSlice(set),
    ...createdEnteredTextSlice(set),
    ...createTotalCharactersSlice(set),
}));
