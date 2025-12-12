import { create } from 'zustand';

interface HeightStore {
  height: number;
  setHeight: (height: number) => void;
}

export const useHeightStore = create<HeightStore>(set => ({
  height: 700,
  setHeight: (height: number) => set({ height }),
}));
