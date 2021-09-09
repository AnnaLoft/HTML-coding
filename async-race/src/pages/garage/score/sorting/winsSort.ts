import createScore from '../create-score';
import delayOfBtn from '../../../../common/delay-btn';
import nowSortedBy from './sorting-state';
import { HandlerT } from '../../../types/types';

const winsSortBtnHandler: HandlerT = () => {
  const idSorcBtn: HTMLElement = document.querySelector('.winners-page__head__id');
  const timeSortBtn: HTMLElement = document.querySelector('.winners-page__head__best-time');
  const winsSortBtn: HTMLElement = document.querySelector('.winners-page__head__wins');
  delayOfBtn(winsSortBtn);
  if (nowSortedBy.wins === 0) {
    createScore('wins', 'ASC');
    nowSortedBy.id = 0;
    nowSortedBy.wins += 1;
    nowSortedBy.time = 0;
    idSorcBtn.style.color = '#F0F8FF';
    winsSortBtn.style.color = '#00C9D4';
    timeSortBtn.style.color = '#F0F8FF';
  } else if (nowSortedBy.wins === 1) {
    winsSortBtn.style.color = '#FF8800';
    createScore('wins', 'DESC');
    nowSortedBy.wins += 1;
  } else if (nowSortedBy.wins === 2) {
    winsSortBtn.style.color = '#F0F8FF';
    createScore();
    nowSortedBy.wins = 0;
  }
};

export default winsSortBtnHandler;
