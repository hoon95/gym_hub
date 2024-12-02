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

interface ActiveState {
  active: string;
  setActive: (active: string) => void;
  clickIdx: number;
  setClickIdx: (hoverIdx: number) => void;
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
      answers: ['0회', '주 1 ~ 2회', '주 3 ~ 4회', '주 5회 이상']
    },
    { 
      question: '하루에 얼마나 많은 물을 마시나요?', 
      answers: ['500ml 미만', '500ml ~ 1L', '1L~2L', '2L 이상']
    },
    { 
      question: '주말에 얼마나 활동적으로 시간을 보내나요?', 
      answers: ['전혀 활동적이지 않음', '가끔 활동적임', '자주 활동적임', '매우 활동적임']
    },
    { 
      question: '하루에 얼마나 많은 과일을 섭취하나요?', 
      answers: ['0개', '1 ~2개', '3~4개', '5개 이상']
    },
    { 
      question: '하루에 얼마나 많은 채소를 섭취하나요?', 
      answers: ['0회', '1 ~ 2회', '3~4회', '5회 이상']
    },
    { 
      question: '하루에 얼마나 많은 시간을 앉아 있나요?', 
      answers: ['1시간 미만', '1 ~3시간', '3~5시간', '5시간 이상']
    },
    { 
      question: '하루에 얼마나 많은 수면을 취하나요?', 
      answers: ['4시간 미만', '4 ~ 6시간', '6~8시간', '8시간 이상']
    },
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

export const useActiveStore = create<ActiveState>((set) => ({
  active: 'wod',
  setActive: (active) => set({ active }),
  clickIdx: 99,
  setClickIdx: (clickIdx) => set({ clickIdx })
}))