import type { QuizQuestion } from "@/types";

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: "하루에 얼마나 걷나요?",
    answers: [
      { text: "10분 미만", weight: 2 },
      { text: "10분 이상 ~ 30분 미만", weight: 0 },
      { text: "30분 이상 ~ 1시간 미만", weight: -2 },
      { text: "1시간 이상", weight: -4 },
    ],
  },
  {
    question: "일주일에 얼마나 숨차는 운동을 하나요?",
    answers: [
      { text: "0회", weight: 3 },
      { text: "주 1 ~ 2회", weight: 1 },
      { text: "주 3 ~ 4회", weight: -2 },
      { text: "주 5회 이상", weight: -3 },
    ],
  },
  {
    question: "하루에 얼마나 많은 물을 마시나요?",
    answers: [
      { text: "500ml 미만", weight: 3 },
      { text: "500ml ~ 1L", weight: 0 },
      { text: "1L ~ 2L", weight: -2 },
      { text: "2L 이상", weight: -4 },
    ],
  },
  {
    question: "하루에 얼마나 많은 채소를 섭취하나요?",
    answers: [
      { text: "0회", weight: 3 },
      { text: "1 ~ 2회", weight: 0 },
      { text: "3 ~ 4회", weight: -2 },
      { text: "5회 이상", weight: -4 },
    ],
  },
  {
    question: "하루에 얼마나 많은 수면을 취하나요?",
    answers: [
      { text: "4시간 미만", weight: 3 },
      { text: "4 ~ 6시간", weight: 1 },
      { text: "6 ~ 8시간", weight: -2 },
      { text: "8시간 이상", weight: -4 },
    ],
  },
];
