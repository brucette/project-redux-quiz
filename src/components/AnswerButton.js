/* eslint-disable no-nested-ternary */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { quiz } from '../reducers/quiz';

export const AnswerButton = ({ index, option }) => {
  const dispatch = useDispatch();

  // Gets all question in the store
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);

  // Gets the answers the user has given
  const usersAnswer = useSelector((state) => state.quiz.answers[state.quiz.currentQuestionIndex]);

  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({
      questionId, answerIndex
    }));
  }

  const correctAnswer = question.correctAnswerIndex === usersAnswer && option.id

  return (
    <StyledButton
      className={correctAnswer ? 'correct' : !correctAnswer ? 'wrong' : 'default'}
      onClick={() => onAnswerSubmit(question.id, index)}
      disabled={usersAnswer}
      type="button">{option}
    </StyledButton>
  )
};

export const StyledButton = styled.button`
  background-color: aqua;
  color: white;
  font-weight: bold;
  font-size: 25px;
  padding: 20px;
  margin: 5px;

  &.correct {
    background-color: green;   
  }

  &.wrong {
    background-color: red;
  }
`