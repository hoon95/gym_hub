import WodImg1 from '../assets/img/community/wod/wod_1.png';
import WodImg2 from '../assets/img/community/wod/wod_2.png';
import WodImg3 from '../assets/img/community/wod/wod_3.png';
import DietImg1 from '../assets/img/community/diet/diet_1.png';
import DietImg2 from '../assets/img/community/diet/diet_2.png';
import DietImg3 from '../assets/img/community/diet/diet_3.png';
import WodAvt1 from '../assets/img/community/wod/wod_avatar_1.png'
import WodAvt2 from '../assets/img/community/wod/wod_avatar_2.png'
import WodAvt3 from '../assets/img/community/wod/wod_avatar_3.png'
import DietAvt1 from '../assets/img/community/diet/diet_avatar_1.png'
import DietAvt2 from '../assets/img/community/diet/diet_avatar_2.png'
import DietAvt3 from '../assets/img/community/diet/diet_avatar_3.png'

import { create } from 'zustand';

interface QnA {
  question: string;
  answers: {text: string, weight: number}[];
}

interface ModalState {
  open: boolean;
  currentQuestion: number;
  progress: number;
  quizStart: boolean;
  setQuizStart: (start: boolean) => void;
  age: number;
  setAge: (age: number) => void;
  setFinalResult: (result: number) => void;
  qna: QnA[];
  setOpen: (open: boolean) => void;
  handleNextQuestion: (selectedWeight: number) => void;
  finalResult: number;
  resetModal: () => void;
}

// Share - Left.tsx
interface LeftTxtType {
  name: string;
  age: number;
  content: string;
}

// Share - Insta.tsx
interface ImgType {
  avatar: string;
  url: string;
  title: string;
}

interface ActiveState {
  active: string;
  setActive: (active: string) => void;

  clickIdx: number;
  setClickIdx: (clickIdx: number) => void;

  // Share - Left.tsx
  leftWodTxt: LeftTxtType[];
  leftDietTxt: LeftTxtType[];
  getLeftTxt: () => LeftTxtType[];

  // Share - Insta.tsx
  wodData: ImgType[];
  dietData: ImgType[];
  getCurrentData: () => ImgType[];
}

export const useModalStore = create<ModalState>((set) => ({
  open: false,
  currentQuestion: 0,
  progress: 0,
  quizStart: true,
  setQuizStart: (start) => set({ quizStart: start }),
  age: 0,
  setAge: (age) => set({ age }),
  setFinalResult: (result) => set({ finalResult: result }),
  qna: [
    {
      question: '하루에 얼마나 걷나요?',
      answers: [
        { text: '10분 미만', weight: 2 },
        { text: '10분 이상 ~ 30분 미만', weight: 0 },
        { text: '30분 이상 ~ 1시간 미만', weight: -2 },
        { text: '1시간 이상', weight: -4 }
      ]
    },
    {
      question: '일주일에 얼마나 숨차는 운동을 하나요?',
      answers: [
        { text: '0회', weight: 3 },
        { text: '주 1 ~ 2회', weight: 1 },
        { text: '주 3 ~ 4회', weight: -2 },
        { text: '주 5회 이상', weight: -3 }
      ]
    },
    {
      question: '하루에 얼마나 많은 물을 마시나요?',
      answers: [
        { text: '500ml 미만', weight: 3 },
        { text: '500ml ~ 1L', weight: 0 },
        { text: '1L ~ 2L', weight: -2 },
        { text: '2L 이상', weight: -4 }
      ]
    },
    {
      question: '하루에 얼마나 많은 채소를 섭취하나요?',
      answers: [
        { text: '0회', weight: 3 },
        { text: '1 ~ 2회', weight: 0 },
        { text: '3 ~ 4회', weight: -2 },
        { text: '5회 이상', weight: -4 }
      ]
    },
    {
      question: '하루에 얼마나 많은 수면을 취하나요?',
      answers: [
        { text: '4시간 미만', weight: 3 },
        { text: '4 ~ 6시간', weight: 1 },
        { text: '6 ~ 8시간', weight: -2 },
        { text: '8시간 이상', weight: -4 }
      ]
    }
  ],  
  setOpen: (open) => set({ open }),
  handleNextQuestion: (weight) => set((state) => {
    const initialResult = state.age;
    const updatedResult = initialResult + weight;
    const clampedResult = Math.max(initialResult - 10, Math.min(updatedResult, initialResult + 10));
  
    return {
      currentQuestion: (state.currentQuestion + 1) % state.qna.length,
      progress: state.progress + (100 / state.qna.length),
      finalResult: clampedResult,
    };
  }),
  finalResult: 0,
  quizComplete: false,
  resetModal: () => set({
    currentQuestion: 0,
    progress: 0,
    open: false,
    quizStart: true,
    age: 0,
    finalResult: 0
  })
}));


export const useModalProgress = () => useModalStore((state) => state.progress);

export const useActiveStore = create<ActiveState>((set, get) => ({
  active: 'wod',
  setActive: (active) => set({ active }),

  clickIdx: 0,
  setClickIdx: (clickIdx) => set({ clickIdx }),

  // Share - Left.tsx
  leftWodTxt: [
    {'name': '김희연', 'age': 21, 'content': '헬린이의 운동 도전기'},
    {'name': '이정훈', 'age': 57, 'content': '디지털 디톡스와 헬스의 조합'},
    {'name': '박민지', 'age': 35, 'content': '꾸준함이 생명이다!'},
  ],
  leftDietTxt: [
    {'name': '박으뜸', 'age': 25, 'content': '식습관 변화로 건강 관리'},
    {'name': '김민', 'age': 33, 'content': '바디프로필 식단 꿀팁'},
    {'name': '송아름', 'age': 42, 'content': '직장인의 점심시간 활용법'},
  ],
  getLeftTxt: () => {
    const state = get();
    const data = state.active === 'wod' ? state.leftWodTxt : state.leftDietTxt;
    return data ? data : [];
  },

  // Share - Insta.tsx
  wodData: [
    {'avatar':WodAvt1, 'url': WodImg1, 'title': '#헬린이 #운동인증 #오운완 #운동기록 #피트니스도전'},
    {'avatar':WodAvt2, 'url': WodImg2, 'title': '#디지털디톡스 #헬스 #건강한삶 #균형잡힌생활 #운동루틴공유'},
    {'avatar':WodAvt3, 'url': WodImg3, 'title': '#꾸준함 #운동의중요성 #포기하지않기 #건강관리 #운동습관'},
  ] as ImgType[],
  dietData: [
    {'avatar':DietAvt1, 'url': DietImg1, 'title': '#식습관개선 #건강한식사 #라이프스타일 #건강관리 #웰빙'},
    {'avatar':DietAvt2, 'url': DietImg2, 'title': '#바프준비 #다이어트팁 #식단관리 #체지방감량 #운동과식단'},
    {'avatar':DietAvt3, 'url': DietImg3, 'title': '#직장인운동 #점심시간활용 #시간관리 #건강관리 #워라밸'},
  ] as ImgType[],
  getCurrentData: () => {
    const state = get();
    const data = state.active === 'wod' ? state.wodData : state.dietData;
    return data ? data : [];
  }
}));