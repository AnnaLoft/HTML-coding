import { ableBtn } from '../../../../common/able-disable-btn';
import PaginationState from '../../../../common/pagination-state';
import { HandlerT } from '../../../types/types';
import createWinnersPage from '../create-winners-page';

const scorePrevBtnHandler: HandlerT = () => {
  const pageInfo: HTMLElement = document.querySelector('.winners-page__pagination__pageInfo');
  const nextBtn: HTMLElement = document.querySelector('.winners-page__pagination__button__next');

  ableBtn(nextBtn);
  PaginationState.winnersPage -= 1;
  pageInfo.innerHTML = `page ${PaginationState.winnersPage}`;
  createWinnersPage();
};

export default scorePrevBtnHandler;
