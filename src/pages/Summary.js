/* IMAGE ATTRIBUTIONS:
Halloween:
Image by <a href="https://pixabay.com/users/yuri_b-2216431/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1702677">Yuri</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1702677">Pixabay</a>
Happy pumpkin:
<a href="https://www.flaticon.com/free-icons/pumpkin" title="pumpkin icons">Pumpkin icons created by riajulislam - Flaticon</a>
Sad pumpkin:
<a href="https://www.flaticon.com/free-icons/halloween-party" title="halloween party icons">Halloween party icons created by riajulislam - Flaticon</a>
*/

import React from 'react';
// TINAS ADDITION:
import { useDispatch } from 'react-redux';
import { NextButton } from 'components/NextButton';
import { quiz } from 'reducers/quiz';
// END
import { OuterWrapper } from '../components/MainStyles';

export const Summary = () => {
  // TINAS ADDITION:
  const dispatch = useDispatch();
  const restartQuiz = () => {
    dispatch(quiz.actions.restart())
  }
  // END

  return (
    <OuterWrapper>
      <p>Images by: riajulislam from Flaticon, Yuri from Pixabay</p>
      <p>Images by: riajulislam from Flaticon, Yuri from Pixabay</p>
      <NextButton clickAction={restartQuiz} content="Restart Quiz" />
    </OuterWrapper>
  )
}