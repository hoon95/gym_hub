"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuizStore } from "@/stores/quiz-store";
import { QUIZ_QUESTIONS } from "@/data/quiz-questions";
import { Button } from "@/components/ui/Button";
import { RotateCcw, ArrowRight } from "lucide-react";
import Link from "next/link";

function AgeInput({ onStart }: { onStart: (age: number) => void }) {
  const [age, setAge] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold mb-2">내 몸은 몇 살일까?</h2>
      <p className="text-muted mb-8">
        먼저 나이를 입력해주세요. 5가지 생활습관 질문을 통해 체력나이를
        진단합니다.
      </p>

      <div className="mb-6">
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="나이를 입력하세요"
          min={10}
          max={100}
          className="w-full text-center text-4xl font-bold py-4 bg-transparent border-b-2 border-border focus:border-brand outline-none text-foreground placeholder:text-muted/40 transition-colors"
        />
      </div>

      <Button
        size="lg"
        disabled={!age || Number(age) < 10}
        onClick={() => onStart(Number(age))}
        className="gap-2"
      >
        진단 시작
        <ArrowRight size={18} />
      </Button>
    </motion.div>
  );
}

function QuizQuestion({
  questionIndex,
  onAnswer,
}: {
  questionIndex: number;
  onAnswer: (weight: number) => void;
}) {
  const question = QUIZ_QUESTIONS[questionIndex];

  return (
    <motion.div
      key={questionIndex}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="max-w-lg mx-auto"
    >
      <p className="text-sm text-brand font-medium mb-2">
        질문 {questionIndex + 1} / {QUIZ_QUESTIONS.length}
      </p>
      <h3 className="text-2xl font-bold mb-8">{question.question}</h3>

      <div className="flex flex-col gap-3">
        {question.answers.map((answer, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            onClick={() => onAnswer(answer.weight)}
            className="w-full text-left px-6 py-4 rounded-xl border border-border bg-surface hover:border-brand/50 hover:bg-brand/5 transition-all cursor-pointer"
          >
            <span className="text-base">{answer.text}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

function QuizResult({
  age,
  result,
  onReset,
}: {
  age: number;
  result: number;
  onReset: () => void;
}) {
  const diff = result - age;
  const isHealthy = diff <= 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center max-w-md mx-auto"
    >
      <p className="text-sm text-muted mb-4">진단 결과</p>

      <div className="relative inline-block mb-6">
        <div
          className={`text-7xl font-bold ${isHealthy ? "text-brand" : "text-red-400"}`}
        >
          {result}
          <span className="text-3xl">세</span>
        </div>
      </div>

      <p className="text-lg mb-2">
        실제 나이 <span className="font-bold">{age}세</span> 대비
      </p>
      <p
        className={`text-2xl font-bold mb-8 ${isHealthy ? "text-brand" : "text-red-400"}`}
      >
        {diff === 0
          ? "나이에 딱 맞는 체력입니다!"
          : diff < 0
            ? `${Math.abs(diff)}세 젊은 체력이에요!`
            : `${diff}세 더 많은 체력나이입니다`}
      </p>

      <p className="text-muted text-sm mb-8 leading-relaxed">
        {isHealthy
          ? "좋은 생활습관을 유지하고 계시네요. 꾸준한 운동으로 더 건강해지세요!"
          : "운동과 건강한 생활습관으로 체력나이를 낮출 수 있어요. 짐허브와 함께 시작해보세요!"}
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button variant="outline" onClick={onReset} className="gap-2">
          <RotateCcw size={16} />
          다시 진단하기
        </Button>
        <Link href="/equipment">
          <Button className="gap-2 w-full sm:w-auto">
            기구 둘러보기
            <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

export default function QuizPage() {
  const { currentQuestion, progress, age, finalResult, isComplete, setAge, handleNextQuestion, reset } =
    useQuizStore();
  const [started, setStarted] = useState(false);

  const handleStart = (inputAge: number) => {
    reset();
    setAge(inputAge);
    setStarted(true);
  };

  const handleReset = () => {
    reset();
    setStarted(false);
  };

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">
            <span className="text-brand">체력나이</span> 자가진단
          </h1>
          <p className="mt-3 text-muted text-lg">
            간단한 생활습관 질문으로 나의 체력나이를 알아보세요
          </p>
        </div>

        {/* Progress bar */}
        {started && !isComplete && (
          <div className="max-w-lg mx-auto mb-10">
            <div className="h-2 bg-surface-light rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-brand rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {!started ? (
            <AgeInput key="input" onStart={handleStart} />
          ) : isComplete ? (
            <QuizResult
              key="result"
              age={age}
              result={finalResult}
              onReset={handleReset}
            />
          ) : (
            <QuizQuestion
              key={`q-${currentQuestion}`}
              questionIndex={currentQuestion}
              onAnswer={handleNextQuestion}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
