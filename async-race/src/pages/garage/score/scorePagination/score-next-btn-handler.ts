import { ableBtn, disableBtn } from '../../../../common/able-disable-btn';
import getWinnersApi from '../../../../common/api/scoreApi/getWinnersApi';
import PaginationState from '../../../../common/pagination-state';
import { HandlerT } from '../../../types/types';
import createWinnersPage from '../create-winners-page';

const scoreNextBtnHandler: HandlerT = () => {
  const pageInfo: HTMLElement = document.querySelector('.winners-page__pagination__pageInfo');
  const prevBtn: HTMLElement = document.querySelector('.winners-page__pagination__button__prev');
  const nextBtn: HTMLElement = document.querySelector('.winners-page__pagination__button__next');

  ableBtn(prevBtn);

  PaginationState.winnersPage += 1;
  getWinnersApi().then((res) => {
    if (res.length === 0) {
      disableBtn(nextBtn);
      PaginationState.winnersPage -= 1;
    }

    pageInfo.innerHTML = `page ${PaginationState.winnersPage}`;
    createWinnersPage();
  });
};

export default scoreNextBtnHandler;
