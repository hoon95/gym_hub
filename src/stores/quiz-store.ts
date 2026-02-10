"use client";

import { create } from "zustand";
import { QUIZ_QUESTIONS } from "@/data/quiz-questions";

interface QuizState {
  currentQuestion: number;
  progress: number;
  age: number;
  finalResult: number;
  isComplete: boolean;
  setAge: (age: number) => void;
  handleNextQuestion: (selectedWeight: number) => void;
  reset: () => void;
}

const TOTAL_QUESTIONS = QUIZ_QUESTIONS.length;

export const useQuizStore = create<QuizState>((set) => ({
  currentQuestion: 0,
  progress: 0,
  age: 0,
  finalResult: 0,
  isComplete: false,

  setAge: (age) => set({ age }),

  handleNextQuestion: (weight) =>
    set((state) => {
      const nextQuestion = state.currentQuestion + 1;
      const updatedResult = state.age + weight;
      const clampedResult = Math.max(
        state.age - 5,
        Math.min(updatedResult, state.age + 5)
      );
      const newProgress = (nextQuestion / TOTAL_QUESTIONS) * 100;
      const isComplete = nextQuestion >= TOTAL_QUESTIONS;

      return {
        currentQuestion: nextQuestion,
        progress: newProgress,
        finalResult: clampedResult,
        age: updatedResult,
        isComplete,
      };
    }),

  reset: () =>
    set({
      currentQuestion: 0,
      progress: 0,
      age: 0,
      finalResult: 0,
      isComplete: false,
    }),
}));
