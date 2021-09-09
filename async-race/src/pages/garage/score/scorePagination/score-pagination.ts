import { ableBtn, disableBtn } from '../../../../common/able-disable-btn';
import getWinnersApi from '../../../../common/api/scoreApi/getWinnersApi';
import PaginationState from '../../../../common/pagination-state';
import scoreNextBtnHandler from './score-next-btn-handler';
import scorePrevBtnHandler from './score-prev-btn-handler';
import removeAddHandler from '../../../../common/remove-add-handler';
import createWinnersPage from '../create-winners-page';
import Winner from '../../../entity/winner';

const ScorePagination = (): void => {
  const pageInfo: HTMLElement = document.querySelector('.winners-page__pagination__pageInfo');
  const prevBtn: HTMLElement = document.querySelector('.winners-page__pagination__button__prev');
  const nextBtn: HTMLElement = document.querySelector('.winners-page__pagination__button__next');

  getWinnersApi().then((res: Winner[]) => {
    if (res.length === 0 && PaginationState.winnersPage !== 1) {
      PaginationState.winnersPage -= 1;
      pageInfo.innerHTML = `page ${PaginationState.winnersPage}`;
      createWinnersPage();
    }
  });

  getWinnersApi(null, null, PaginationState.winnersPage + 1).then((res: Winner[]) => {
    if (res.length === 0) {
      disableBtn(nextBtn);
    } else {
      ableBtn(nextBtn);
    }
  });

  if (PaginationState.winnersPage === 1) {
    disableBtn(prevBtn);
  } else {
    ableBtn(prevBtn);
  }

  removeAddHandler(prevBtn, 'click', scorePrevBtnHandler);
  removeAddHandler(nextBtn, 'click', scoreNextBtnHandler);
};
export default ScorePagination;
