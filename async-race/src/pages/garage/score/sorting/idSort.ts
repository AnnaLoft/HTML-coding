import createScore from '../create-score';
import delayOfBtn from '../../../../common/delay-btn';
import nowSortedBy from './sorting-state';
import { HandlerT } from '../../../types/types';

const idSorcBtnHandler: HandlerT = () => {
  const idSorcBtn: HTMLElement = document.querySelector('.winners-page__head__id');
  const timeSortBtn: HTMLElement = document.querySelector('.winners-page__head__best-time');
  const winsSortBtn: HTMLElement = document.querySelector('.winners-page__head__wins');
  delayOfBtn(idSorcBtn);
  if (nowSortedBy.id === 0) {
    idSorcBtn.classList.add('winners-page__head__id__active');
    winsSortBtn.classList.add('winners-page__head__element__active');
    timeSortBtn.classList.add('winners-page__head__element__active');
    createScore('id', 'ASC');
    nowSortedBy.id += 1;
    nowSortedBy.wins = 0;
    nowSortedBy.time = 0;
  } else if (nowSortedBy.id === 1) {
    createScore('id', 'DESC');
    nowSortedBy.id += 1;
    idSorcBtn.classList.add('winners-page__head__id__clicked');
  } else if (nowSortedBy.id === 2) {
    idSorcBtn.classList.add('winners-page__head__element__active');

    createScore();
    nowSortedBy.id = 0;
  }
};

export default idSorcBtnHandler;
