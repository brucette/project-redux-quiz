/* eslint-disable max-len */
/* IMAGE ATTRIBUTIONS:
 <p>Images by: riajulislam from Flaticon, Yuri from Pixabay</p>
Halloween:
<p>Image by <a href="https://pixabay.com/users/yuri_b-2216431/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1702677">Yuri</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1702677">Pixabay</a></p>
<p>Happy pumpkin: <a href="https://www.flaticon.com/free-icons/pumpkin" title="pumpkin icons">Pumpkin icons created by riajulislam - Flaticon</a></p>
<p>Sad pumpkin: <a href="https://www.flaticon.com/free-icons/halloween-party" title="halloween party icons">Halloween party icons created by riajulislam - Flaticon</a></p>
*/

import React from 'react';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { StyledButton } from 'components/NextButton';
import { quiz } from 'reducers/quiz';
import { OuterWrapper, Devices } from '../components/MainStyles';
// import { HappyPumpkin } from './images/pumpkinHappy.png'
// import { SadPumpkin } from './images/pumpkinSad.png'
// import { StyledButton } from './components/AnswerButton'

/*

const finalImage = () => {
  if (correctAnswers === 7) {
    return <HappyPumpkin />
  } else {
    return <SadPumpkin />
  }
}
<div>{finalImage()} </div> */

export const Summary = () => {
  const dispatch = useDispatch();

  const restartQuiz = () => {
    dispatch(quiz.actions.restart())
  }

  const correctAnswers = useSelector((state) => state.quiz.answers.filter((answer) => answer.isCorrect === true).length)

  return (
    <OuterWrapper>
      <InnerWrapper>
        <SummaryTitle>Results</SummaryTitle>
        <Score>{`You got ${correctAnswers} out of 7 right`}</Score>

        <SummaryText>
          <p>Want to give it another try?</p>
          <RestartButton clickAction={restartQuiz}> Restart quiz</RestartButton>
        </SummaryText>
        <Credits>
          <p>Images by: riajulislam from Flaticon, Yuri from Pixabay</p>
        </Credits>
      </InnerWrapper>
    </OuterWrapper>
  )
}

const InnerWrapper = styled.section`
  font-family: 'Courier Prime', monospace;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  
  @media ${Devices.tablet} {
    font-size: 25px;
  }
`

const Score = styled.div`
  margin-bottom: 10vh;
`

const SummaryTitle = styled.h1`
  margin-top: 7vh;
  font-family: 'Special Elite', cursive;
`

const SummaryText = styled.div`
  align-items: center;
  justify-content: center;
  width: 70%;
  text-align: center;
  

  @media ${Devices.tablet} {
    width: 80%;
  }                                                                                                                                                                        

`
const RestartButton = styled(StyledButton)`
  border-radius: 5px;
  color: black;
  font-size: 18px;
  padding: 10px;
  font-family: 'Courier Prime', monospace;
  margin-top: 0;

  @media ${Devices.tablet} {
    font-size: 20px;
    padding: 15px;
  }

  &:hover {
  transition: all .3s ease-in-out;
  transform: scale(1.1);
  }
`
const Credits = styled.div`
  width: 80%;
  text-align: center;
  font-size: 14px;
  position: absolute;
  bottom: 0;
`