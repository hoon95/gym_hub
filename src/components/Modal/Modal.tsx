import React, { useState } from 'react';
import { Overlay, ModalContainer, Question, Button, CloseButton } from './Modal.styled';

interface ModalProps {
  closeModal: () => void;
}

const questions = [
  '1. 하루에 얼마나 걷나요?',
  '2. 얼마나 자주 운동을 하나요?',
  '3. 하루 수면 시간은?',
  '4. 스트레스를 얼마나 받나요?',
  '5. 건강한 식습관을 유지하나요?',
  '6. 흡연 여부?',
  '7. 음주 빈도는?',
  '8. 체력 테스트: 팔굽혀펴기 가능 수?',
  '9. 심박수 측정이 가능한가요?',
  '10. 건강검진을 정기적으로 받나요?',
];

export const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (points: number) => {
    setScore(score + points);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`당신의 신체나이는 ${calculateAge(score)}살입니다!`);
      closeModal();
    }
  };

  const calculateAge = (totalScore: number) => {
    return 20 + Math.floor((100 - totalScore) / 10);
  };

  return (
    <Overlay>
      <ModalContainer>
        <Question>{questions[currentQuestion]}</Question>
        <Button onClick={() => handleAnswer(10)}>예</Button>
        <Button onClick={() => handleAnswer(5)}>아니요</Button>
        <CloseButton onClick={closeModal}>X</CloseButton>
      </ModalContainer>
    </Overlay>
  );
};
