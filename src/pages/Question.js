import React from 'react';
import styled from 'styled-components';
import { CurrentQuestion } from 'components/CurrentQuestion';
import { Devices } from '../components/MainStyles';
import halloween from '../images/halloween.jpg';
import mobileBG from '../images/mobileBG.jpeg';

export const Question = () => {
  return (
    <OuterWrapperQuestion>
      <CurrentQuestion />
      <p>testing</p>
      <p>testing</p>
    </OuterWrapperQuestion>
  )
}

const OuterWrapperQuestion = styled.div`
  background-image: url(${mobileBG});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  background-position: center;
  overflow-x: hidden;

  @media ${Devices.tablet} {
    background-image: url(${halloween});
    
  }
`