import React from 'react';
import styled from 'styled-components';

export const NextButton = ({ clickAction, content }) => {
  return (
    <div>
      <StyledButton type="button" onClick={clickAction}>{content}</StyledButton>
    </div>
  )
}

export const StyledButton = styled.button`
  background-color: white;
  color: aqua;
  font-weight: bold;
  font-size: 25px;
  padding: 20px;
  margin: 5px;
  cursor: pointer;
`