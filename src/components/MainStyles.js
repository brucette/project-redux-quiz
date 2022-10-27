/* eslint-disable linebreak-style */
import styled from 'styled-components';
import startImage from '../images/startImage.png';
import mobileBG2 from '../images/mobileBG2.png';

const sizes = {
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

export const Devices = {
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`
};

export const InnerWrapper = styled.section`
  max-width: 900px;
`

export const OuterWrapper = styled.div`
  background-image: url(${mobileBG2});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  background-position: center;
  overflow-x: hidden;

  @media ${Devices.tablet} {
    background-image: url(${startImage});
    
  }
`

export const MainQuestion = styled.h1`
  color: white;
  font-family: 'Special Elite', cursive;
`