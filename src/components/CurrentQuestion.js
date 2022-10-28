import React from 'react';
import { useSelector } from 'react-redux';
// import styled from 'styled-components';
// import { quiz } from '../reducers/quiz';
import { AnswerButton } from './AnswerButton';
import { MainQuestion } from './MainStyles';

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <>
      <MainQuestion>Question: {question.questionText}</MainQuestion>
      {question.options.map((option, index) => {
        return <AnswerButton
          key={option}
          option={option}
          index={index} />
      })}
    </>
  );
}