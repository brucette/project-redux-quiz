/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components'
import { NextButton } from 'components/NextButton';
// import ghost from '../images/ghost.png';
import { OuterWrapper, MainQuestion, Devices } from '../components/MainStyles';

export const Welcome = () => {
  return (
    <OuterWrapper>
      <TextContainer>
        <div className="Intro-Text">
          <MainQuestion>Halloween Quiz</MainQuestion>
          <p>
            Get ready for a spooky quiz! Gather your friends
            and family and find out who&apos;s the real king or queen of horror
          </p>
          <div className="Button">
            <NextButton />
          </div>
        </div>
      </TextContainer>
      <FooterContainer>
        <div className="Footer">
          <h4>Developed and designed by</h4>
          <p>Linda, Emil, Tina, Jessica & Cecilia</p>
        </div>
      </FooterContainer>
    </OuterWrapper>
  )
}

const TextContainer = styled.div`
display: flex;
color: white;
justify-content: center;
margin-top: 20%;
margin-left: 25%;
width: 50%;
height: 50%;

.Button {
 text-align: center;
 padding: 15px;
}


@media ${Devices.desktop} {
margin-top: 10%;
margin-left: 25%;
width: 50%;
height: 50%;
color: khaki;
}
`

const FooterContainer = styled.div`
color: white;
display: flex;
margin-left: 25%;
width: 50%;
height: 50%;
justify-content: center;
align-items: center;
`