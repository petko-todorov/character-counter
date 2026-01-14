import { create } from 'zustand';
import { createThemeSlice } from './slices/createThemeSlice';

export const useStore = create((set) => ({
    ...createThemeSlice(set),
}));
