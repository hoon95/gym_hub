import create from 'zustand';

const useStore = create(set => ({
  programs: [],
  addProgram: (program) => set(state => ({ programs: [...state.programs, program] })),
}));

export default useStore;