import removeAddHandler from '../../../../common/remove-add-handler';
import idSorcBtnHandler from './idSort';
import winsSortBtnHandler from './winsSort';
import timeSortBtnHandler from './timeSort';

const sortHandlers = (): void => {
  const idSorcBtn: HTMLElement = document.querySelector('.winners-page__head__id');
  const winsSortBtn: HTMLElement = document.querySelector('.winners-page__head__wins');
  const timeSortBtn: HTMLElement = document.querySelector('.winners-page__head__best-time');

  removeAddHandler(idSorcBtn, 'click', idSorcBtnHandler);
  removeAddHandler(winsSortBtn, 'click', winsSortBtnHandler);
  removeAddHandler(timeSortBtn, 'click', timeSortBtnHandler);
};

export default sortHandlers;
