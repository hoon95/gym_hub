import { create } from 'zustand';

interface Program {
  id: number;
  name: string;
}

interface Store {
  programs: Program[];
  addProgram: (program: Program) => void;
}

// Zustand 상태 생성
export const useStore = create<Store>((set) => ({
  programs: [],
  addProgram: (program: Program) => set((state) => ({
    programs: [...state.programs, program],
  })),
}));
