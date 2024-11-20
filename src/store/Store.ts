import { create } from 'zustand';

interface QnA {
  question: string;
  answers: string[];
}

interface ModalState {
  open: boolean;
  currentQuestion: number;
  progress: number;
  qna: QnA[];
  setOpen: (open: boolean) => void;
  handleNextQuestion: () => void;
  resetModal: () => void;
}

export const useModalProgress = () => useModalStore((state) => state.progress);

export const useModalStore = create<ModalState>((set) => ({
  open: false,
  currentQuestion: 0,
  progress: 0,
  qna: [
    { 
      question: '하루에 얼마나 걷나요?', 
      answers: ['10분 미만', '10분 이상 ~ 30분 미만', '30분 이상 ~ 1시간 미만', '1시간 이상']
    },
    { 
      question: '일주일에 얼마나 숨차는 운동을 하나요?', 
      answers: ['0회', '주 1~2회', '주 3~4회', '주 5회 이상']
    }
  ],
  setOpen: (open) => set({ open }),
  handleNextQuestion: () => set((state) => ({
    currentQuestion: (state.currentQuestion + 1) % state.qna.length,
    progress: state.progress + (100 / state.qna.length)
  })),
  resetModal: () => set({
    currentQuestion: 0,
    progress: 0,
    open: false
  })
}));