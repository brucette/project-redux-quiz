/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components'
import { NextButton } from 'components/NextButton';
import { OuterWrapper, MainQuestion, Devices } from '../components/MainStyles';

export const Welcome = () => {
  return (
    <OuterWrapper>
      <Container>
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
        <h4>Developed and designed by</h4>
        <FooterContainer>
          <Link
            href="https://www.linkedin.com/in/linda-malm-7aa8866b/"
            target="_blank">
          Linda Malm
          </Link>
          <Link
            href="https://www.linkedin.com/in/tina-bruce-9b1a0813a/"
            target="_blank">
          Tina Bruce
          </Link>
          <Link
            href="https://www.linkedin.com/in/jesshansson/"
            target="_blank">
          Jessica Hansson
          </Link>
          <Link
            href="https://www.linkedin.com/in/emil-bergvik/"
            target="_blank">
          Emil Bergvik
          </Link>
          <Link
            href="https://www.linkedin.com/in/ceciliaraden/"
            target="_blank">
          Cecilia Rådén
          </Link>
        </FooterContainer>
      </Container>
    </OuterWrapper>
  )
}

const Container = styled.div`
display: flex;
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
flex-direction: column;
color: white;
`

const TextContainer = styled.div`
display: flex;
color: white;
justify-content: center;
width: 50%;
height: 50%;

.Button {
 text-align: center;
 padding: 15px;
}

@media ${Devices.laptop} {
width: 50%;
height: 50%;
}

@media ${Devices.desktop} {
width: 50%;
height: 50%;
}
`

const FooterContainer = styled.div`
color: white;
display: flex;
width: 50%;
justify-content: center;
align-items: center;
flex-direction: column;
@media ${Devices.laptop} {
flex-direction: row;
}

@media ${Devices.desktop} {
  flex-direction: row;
}
`
const Link = styled.a`
color: white;
text-decoration: none;
flex-direction: column;
display:flex;
margin: 5px;

&:hover {
  color: #B74F26;
  transition: all .2s ease-in-out;
  transform: scale(1.1);
}
`